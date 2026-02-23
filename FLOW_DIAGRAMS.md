# Fabb6 Salon Platform - System Flow Diagrams

This document contains comprehensive flow diagrams for all major system processes.

---

## 1. User Authentication Flow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant API Gateway
    participant Auth Service
    participant Database
    participant Email Service
    
    User->>Frontend: Enter credentials
    Frontend->>API Gateway: POST /auth/login
    API Gateway->>Auth Service: Validate request
    Auth Service->>Database: Check credentials
    Database-->>Auth Service: User data
    
    alt Valid Credentials
        Auth Service->>Auth Service: Generate JWT tokens
        Auth Service-->>API Gateway: Access + Refresh tokens
        API Gateway-->>Frontend: Tokens + User data
        Frontend->>Frontend: Store tokens
        Frontend-->>User: Redirect to dashboard
    else Invalid Credentials
        Auth Service-->>API Gateway: Error 401
        API Gateway-->>Frontend: Authentication failed
        Frontend-->>User: Show error message
    end
    
    Note over Auth Service,Email Service: For new user registration
    User->>Frontend: Sign up
    Frontend->>Auth Service: POST /auth/register
    Auth Service->>Database: Create user
    Auth Service->>Email Service: Send verification email
    Email Service-->>User: Verification email
```

---

## 2. Booking Flow (Client Perspective)

```mermaid
flowchart TD
    A[Client Opens App] --> B{Logged In?}
    B -->|No| C[Login/Register]
    B -->|Yes| D[View Services]
    C --> D
    
    D --> E[Select Service]
    E --> F[Select Date]
    F --> G[View Staff Availability]
    G --> H[Select Staff Member]
    H --> I[Select Time Slot]
    
    I --> J{Slot Available?}
    J -->|No| K[Show Alternative Times]
    K --> I
    J -->|Yes| L[Review Booking Details]
    
    L --> M[Enter Additional Info]
    M --> N{Payment Method?}
    
    N -->|Pay Now| O[Process Payment]
    N -->|Pay Later| P[Confirm Booking]
    
    O --> Q{Payment Success?}
    Q -->|Yes| P
    Q -->|No| R[Payment Failed]
    R --> N
    
    P --> S[Send Confirmation Email]
    S --> T[Send SMS Reminder]
    T --> U[Add to Calendar]
    U --> V[Booking Complete]
    
    V --> W[Show Booking Details]
    W --> X{Actions}
    X -->|Modify| Y[Update Booking]
    X -->|Cancel| Z[Cancel Booking]
    X -->|Add to Cart| AA[Continue Shopping]
```

---

## 3. Booking Management Flow (Staff/Admin)

```mermaid
flowchart TD
    A[Staff Login] --> B[View Dashboard]
    B --> C[Check Today's Appointments]
    
    C --> D{Action Needed?}
    D -->|New Booking Request| E[Review Request]
    D -->|No Action| F[View Calendar]
    
    E --> G{Accept Booking?}
    G -->|Yes| H[Confirm Booking]
    G -->|No| I[Decline with Reason]
    
    H --> J[Update Calendar]
    I --> K[Notify Client]
    J --> K
    
    F --> L{Manage Availability}
    L -->|Block Time| M[Set Unavailable]
    L -->|Add Availability| N[Open Slots]
    L -->|View Bookings| O[Check Schedule]
    
    O --> P{Booking Status}
    P -->|Upcoming| Q[Prepare for Service]
    P -->|In Progress| R[Mark as Started]
    P -->|Completed| S[Mark as Complete]
    
    S --> T[Request Payment]
    T --> U{Payment Method}
    U -->|Cash| V[Record Cash Payment]
    U -->|Card| W[Process Card Payment]
    U -->|UPI| X[Process UPI Payment]
    
    V --> Y[Update Records]
    W --> Y
    X --> Y
    
    Y --> Z[Request Review]
    Z --> AA[Close Booking]
    AA --> AB[Update Stats]
```

---

## 4. Payment Processing Flow

```mermaid
sequenceDiagram
    actor Client
    participant Frontend
    participant API Gateway
    participant Payment Service
    participant Razorpay/Stripe
    participant Database
    participant Notification Service
    
    Client->>Frontend: Initiate payment
    Frontend->>API Gateway: POST /payments/create
    API Gateway->>Payment Service: Create payment intent
    Payment Service->>Database: Create payment record (pending)
    Payment Service->>Razorpay/Stripe: Initialize payment
    Razorpay/Stripe-->>Payment Service: Payment session ID
    Payment Service-->>Frontend: Session details
    
    Frontend->>Razorpay/Stripe: Redirect to payment gateway
    Client->>Razorpay/Stripe: Enter payment details
    
    alt Payment Success
        Razorpay/Stripe->>Payment Service: Webhook: Payment success
        Payment Service->>Database: Update payment status (completed)
        Payment Service->>Database: Update booking status (confirmed)
        Payment Service->>Notification Service: Send receipt
        Notification Service->>Client: Email + SMS receipt
        Payment Service-->>Frontend: Success response
        Frontend-->>Client: Show success message
    else Payment Failed
        Razorpay/Stripe->>Payment Service: Webhook: Payment failed
        Payment Service->>Database: Update payment status (failed)
        Payment Service-->>Frontend: Failure response
        Frontend-->>Client: Show error & retry option
    end
    
    Note over Payment Service: Automatically refund if booking cancelled within policy
```

---

## 5. Product Order Flow (E-commerce)

```mermaid
flowchart TD
    A[Browse Products] --> B[View Product Details]
    B --> C{Add to Cart?}
    C -->|Yes| D[Add to Cart]
    C -->|No| A
    
    D --> E{Continue Shopping?}
    E -->|Yes| A
    E -->|No| F[View Cart]
    
    F --> G{Update Cart?}
    G -->|Update Qty| H[Modify Quantity]
    G -->|Remove Item| I[Remove from Cart]
    G -->|Apply Coupon| J[Validate Coupon]
    
    H --> F
    I --> F
    J --> K{Valid Coupon?}
    K -->|Yes| L[Apply Discount]
    K -->|No| M[Show Error]
    L --> F
    M --> F
    
    F --> N[Proceed to Checkout]
    N --> O[Enter/Select Shipping Address]
    O --> P[Select Shipping Method]
    P --> Q[Review Order]
    Q --> R[Select Payment Method]
    
    R --> S{Payment Type}
    S -->|Online| T[Process Payment]
    S -->|COD| U[Place Order]
    
    T --> V{Payment Success?}
    V -->|Yes| U
    V -->|No| W[Payment Failed]
    W --> R
    
    U --> X[Create Order in DB]
    X --> Y[Update Inventory]
    Y --> Z[Send Confirmation]
    Z --> AA[Notify Warehouse]
    AA --> AB{Shopify Sync?}
    AB -->|Yes| AC[Sync with Shopify]
    AB -->|No| AD[Generate Invoice]
    AC --> AD
    
    AD --> AE[Track Order]
    AE --> AF{Order Status}
    AF -->|Packed| AG[Update: Packed]
    AF -->|Shipped| AH[Update: Shipped]
    AF -->|Delivered| AI[Update: Delivered]
    
    AI --> AJ[Request Review]
    AJ --> AK[Order Complete]
```

---

## 6. Staff Management Flow

```mermaid
flowchart TD
    A[Admin Dashboard] --> B[Manage Staff]
    B --> C{Action}
    
    C -->|Add New| D[Create Staff Profile]
    C -->|Edit| E[Update Staff Details]
    C -->|View| F[View Staff List]
    C -->|Schedule| G[Manage Schedule]
    
    D --> H[Enter Staff Information]
    H --> I[Set Services/Skills]
    I --> J[Set Commission Rate]
    J --> K[Set Availability]
    K --> L[Assign Locations]
    L --> M[Save Staff Profile]
    M --> N[Send Welcome Email]
    N --> O[Generate Login Credentials]
    
    G --> P[Select Staff Member]
    P --> Q[View Current Schedule]
    Q --> R{Modify Schedule}
    R -->|Block Time| S[Mark Unavailable]
    R -->|Add Hours| T[Extend Availability]
    R -->|Vacation| U[Set Leave Period]
    
    S --> V[Update Calendar]
    T --> V
    U --> V
    V --> W[Notify Staff]
    
    F --> X[View Performance]
    X --> Y{Metrics}
    Y -->|Revenue| Z[Show Revenue Stats]
    Y -->|Bookings| AA[Show Booking Count]
    Y -->|Ratings| AB[Show Rating Average]
    Y -->|Attendance| AC[Show Attendance]
    
    Z --> AD[Generate Report]
    AA --> AD
    AB --> AD
    AC --> AD
    AD --> AE[Export/Share Report]
```

---

## 7. Inventory Management Flow

```mermaid
flowchart TD
    A[Inventory Dashboard] --> B{Action}
    
    B -->|View Stock| C[Display Current Stock]
    B -->|Add Product| D[Create New Product]
    B -->|Receive Stock| E[Record Purchase]
    B -->|Adjust Stock| F[Manual Adjustment]
    
    C --> G{Check Stock Level}
    G -->|Low Stock| H[Generate Alert]
    G -->|Normal| I[Continue Monitoring]
    G -->|Out of Stock| J[Mark Unavailable]
    
    H --> K{Auto Reorder?}
    K -->|Yes| L[Generate Purchase Order]
    K -->|No| M[Notify Manager]
    
    D --> N[Enter Product Details]
    N --> O[Set Price & Cost]
    O --> P[Set Reorder Level]
    P --> Q[Upload Images]
    Q --> R{Shopify Product?}
    R -->|Yes| S[Sync with Shopify]
    R -->|No| T[Save Product]
    S --> T
    
    E --> U[Scan/Enter Product]
    U --> V[Enter Quantity]
    V --> W[Enter Purchase Price]
    W --> X[Update Stock Level]
    X --> Y[Generate Receipt]
    
    F --> Z{Adjustment Type}
    Z -->|Damage| AA[Record损失]
    Z -->|Theft| AB[Record Loss]
    Z -->|Found| AC[Add Stock]
    Z -->|Used in Service| AD[Deduct Stock]
    
    AA --> AE[Update Inventory]
    AB --> AE
    AC --> AE
    AD --> AE
    AE --> AF[Create Transaction Log]
    AF --> AG[Update Reports]
    
    AG --> AH{Generate Reports}
    AH -->|Stock Valuation| AI[Calculate Total Value]
    AH -->|Movement Report| AJ[Show Transactions]
    AH -->|Low Stock Report| AK[List Items to Reorder]
```

---

## 8. Analytics & Reporting Flow

```mermaid
flowchart TD
    A[Admin Login] --> B[Analytics Dashboard]
    B --> C[Select Date Range]
    C --> D[Select Report Type]
    
    D --> E{Report Type}
    
    E -->|Revenue| F[Revenue Analytics]
    E -->|Client| G[Client Analytics]
    E -->|Staff| H[Staff Performance]
    E -->|Service| I[Service Analytics]
    E -->|Product| J[Product Sales]
    
    F --> K[Fetch Payment Data]
    K --> L[Calculate Metrics]
    L --> M[Daily Revenue]
    L --> N[Monthly Trends]
    L --> O[Payment Methods Breakdown]
    L --> P[Revenue by Service]
    
    G --> Q[Fetch Client Data]
    Q --> R[New Clients]
    Q --> S[Retention Rate]
    Q --> T[Client Lifetime Value]
    Q --> U[Top Clients]
    
    H --> V[Fetch Staff Data]
    V --> W[Bookings per Staff]
    V --> X[Revenue per Staff]
    V --> Y[Rating Average]
    V --> Z[Utilization Rate]
    
    I --> AA[Fetch Service Data]
    AA --> AB[Most Booked Services]
    AA --> AC[Service Revenue]
    AA --> AD[Service Ratings]
    AA --> AE[Peak Hours]
    
    J --> AF[Fetch Product Data]
    AF --> AG[Top Selling Products]
    AF --> AH[Product Revenue]
    AF --> AI[Inventory Turnover]
    AF --> AJ[Profit Margins]
    
    M --> AK[Visualize Data]
    N --> AK
    O --> AK
    P --> AK
    R --> AK
    S --> AK
    T --> AK
    U --> AK
    W --> AK
    X --> AK
    Y --> AK
    Z --> AK
    AB --> AK
    AC --> AK
    AD --> AK
    AE --> AK
    AG --> AK
    AH --> AK
    AI --> AK
    AJ --> AK
    
    AK --> AL[Generate Charts]
    AL --> AM[Display Dashboard]
    AM --> AN{Export Options}
    AN -->|PDF| AO[Generate PDF]
    AN -->|Excel| AP[Generate Excel]
    AN -->|Email| AQ[Send Report]
    
    AO --> AR[Download Report]
    AP --> AR
    AQ --> AS[Email Sent]
```

---

## 9. Notification System Flow

```mermaid
sequenceDiagram
    participant Event Source
    participant Event Bus
    participant Notification Service
    participant Template Engine
    participant Email Service
    participant SMS Service
    participant Push Service
    participant Database
    
    Event Source->>Event Bus: Trigger event (booking created)
    Event Bus->>Notification Service: Event notification
    Notification Service->>Database: Get user preferences
    Database-->>Notification Service: Notification settings
    
    Notification Service->>Notification Service: Determine notification type
    Notification Service->>Template Engine: Request template
    Template Engine-->>Notification Service: Compiled template
    
    par Email Notification
        Notification Service->>Email Service: Send email
        Email Service-->>Notification Service: Email sent
    and SMS Notification
        Notification Service->>SMS Service: Send SMS
        SMS Service-->>Notification Service: SMS sent
    and Push Notification
        Notification Service->>Push Service: Send push
        Push Service-->>Notification Service: Push sent
    end
    
    Notification Service->>Database: Log notifications
    
    Note over Notification Service: Retry failed notifications
    
    alt Notification Failed
        Notification Service->>Event Bus: Schedule retry
        Event Bus->>Notification Service: Retry after delay
    end
```

---

## 10. Shopify Integration Flow

```mermaid
flowchart TD
    A[Shopify Integration Setup] --> B[Configure API Credentials]
    B --> C[Set Sync Preferences]
    C --> D[Initial Data Sync]
    
    D --> E{Sync Direction}
    E -->|Shopify → Platform| F[Import Products]
    E -->|Platform → Shopify| G[Export Products]
    E -->|Bidirectional| H[Two-way Sync]
    
    F --> I[Fetch Shopify Products]
    I --> J[Map Product Fields]
    J --> K[Import to Database]
    K --> L[Update Stock Levels]
    
    G --> M[Select Products to Export]
    M --> N[Transform Data]
    N --> O[Create in Shopify]
    O --> P[Store Shopify IDs]
    
    H --> Q[Real-time Webhooks]
    Q --> R{Webhook Event}
    
    R -->|Product Updated| S[Update Local Product]
    R -->|Order Created| T[Import Order]
    R -->|Inventory Changed| U[Sync Stock]
    
    S --> V[Update Database]
    T --> W[Create Order Record]
    U --> X[Update Inventory]
    
    V --> Y[Trigger Internal Events]
    W --> Y
    X --> Y
    
    Y --> Z{Sync Back?}
    Z -->|Yes| AA[Update Shopify]
    Z -->|No| AB[Local Only]
    
    AA --> AC[API Call to Shopify]
    AC --> AD{Success?}
    AD -->|Yes| AE[Confirm Sync]
    AD -->|No| AF[Log Error]
    AF --> AG[Retry Queue]
    AG --> AC
    
    AE --> AH[Update Sync Log]
    AB --> AH
    AH --> AI[Monitor Sync Status]
```

---

## 11. Client Lifecycle Flow

```mermaid
flowchart TD
    A[New Client Signup] --> B[Email Verification]
    B --> C[Complete Profile]
    C --> D[First Booking]
    
    D --> E[Service Delivered]
    E --> F[Request Review]
    F --> G{Review Given?}
    G -->|Yes| H[Reward Loyalty Points]
    G -->|No| I[Send Reminder]
    
    H --> J[Track Engagement]
    I --> J
    
    J --> K{Engagement Level}
    K -->|Active| L[Regular Client]
    K -->|Inactive 30 days| M[Re-engagement Campaign]
    K -->|Inactive 90 days| N[Win-back Campaign]
    
    L --> O[Offer Membership]
    O --> P{Membership Purchase?}
    P -->|Yes| Q[VIP Client]
    P -->|No| L
    
    Q --> R[Exclusive Benefits]
    R --> S[Priority Booking]
    R --> T[Special Discounts]
    R --> U[Birthday Rewards]
    
    M --> V{Response?}
    V -->|Booked| L
    V -->|No Response| W[Mark Inactive]
    
    N --> X{Response?}
    X -->|Booked| L
    X -->|No Response| Y[Mark Churned]
    
    L --> Z[Referral Program]
    Z --> AA{Referred Friend?}
    AA -->|Yes| AB[Reward Both Clients]
    AB --> AC[New Client Signup]
    AC --> A
```

---

## 12. System Architecture - Data Flow

```mermaid
flowchart LR
    A[Client Apps] -->|HTTPS| B[API Gateway]
    B -->|Auth Check| C[Auth Service]
    C -->|JWT| B
    
    B --> D[Load Balancer]
    D --> E[Microservices]
    
    E --> F[Booking Service]
    E --> G[Payment Service]
    E --> H[Client Service]
    E --> I[Staff Service]
    E --> J[Product Service]
    E --> K[Analytics Service]
    
    F --> L[(PostgreSQL)]
    G --> L
    H --> L
    I --> L
    J --> L
    
    K --> M[(MongoDB)]
    
    F --> N[(Redis Cache)]
    G --> N
    H --> N
    I --> N
    J --> N
    
    J --> O[(Elasticsearch)]
    H --> O
    
    E --> P[Message Queue]
    P --> Q[Notification Service]
    Q --> R[Email/SMS/Push]
    
    E --> S[S3 Storage]
    S --> T[CloudFront CDN]
    T --> A
    
    E --> U[External APIs]
    U --> V[Payment Gateways]
    U --> W[Shopify]
    U --> X[Google Maps]
```

---

## Usage Instructions

These diagrams can be rendered using:
1. **Mermaid Live Editor**: https://mermaid.live/
2. **GitHub**: Automatically renders in markdown
3. **VS Code**: With Mermaid extension
4. **Documentation tools**: GitBook, Docusaurus, etc.

Each diagram represents a critical system flow and can be used for:
- Developer documentation
- Client presentations
- Training materials
- System design discussions
- Debugging and troubleshooting

---

## Additional Diagrams Available On Request

- Multi-location management flow
- Franchise onboarding flow
- White-label deployment flow
- Disaster recovery flow
- Security incident response flow
- API rate limiting flow
- Cache invalidation flow
- Database replication flow

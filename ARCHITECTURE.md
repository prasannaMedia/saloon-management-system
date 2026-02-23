# Fabb6 Salon Platform - Complete Architecture & Implementation Plan

## 📋 Executive Summary

This document outlines the complete technical architecture, implementation strategy, cost estimation, and timeline for developing a production-ready salon and spa management platform similar to GlossGenius and Zenoti, with integrated ecommerce capabilities.

---

## 🏗️ System Architecture Overview

### Architecture Type
**3-Tier Microservices Architecture with Event-Driven Design**

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Web App      │  │ Mobile App   │  │ Admin Panel  │          │
│  │ (React)      │  │ (React Native)│  │ (React)      │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                            ↓ HTTPS/REST/WebSocket
┌─────────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                             │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ API Gateway (Kong/AWS API Gateway)                     │     │
│  │ - Rate Limiting  - Authentication  - Load Balancing    │     │
│  └────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                    MICROSERVICES LAYER                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │ Auth Service│ │Booking Svc  │ │Payment Svc  │              │
│  │ (Node.js)   │ │ (Node.js)   │ │ (Node.js)   │              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │Client Svc   │ │Staff Svc    │ │Product Svc  │              │
│  │ (Node.js)   │ │ (Node.js)   │ │ (Node.js)   │              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │Analytics Svc│ │Notification │ │Shopify Int. │              │
│  │ (Python)    │ │ (Node.js)   │ │ (Node.js)   │              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │ PostgreSQL  │ │   MongoDB   │ │    Redis    │              │
│  │ (Primary DB)│ │ (Analytics) │ │   (Cache)   │              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│  │     S3      │ │ Elasticsearch│ │RabbitMQ/SQS │              │
│  │ (Storage)   │ │   (Search)  │ │(Message Queue)              │
│  └─────────────┘ └─────────────┘ └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technology Stack

### Frontend Layer

#### Web Application
- **Framework**: React 18.3+ with TypeScript
- **State Management**: Redux Toolkit / Zustand
- **Styling**: Tailwind CSS 3.4+
- **Routing**: React Router 6
- **Form Management**: React Hook Form + Zod validation
- **API Client**: Axios / TanStack Query
- **UI Components**: Shadcn/ui + Custom components
- **Charts**: Recharts / Chart.js
- **Date Handling**: date-fns
- **Icons**: Lucide React

#### Mobile Application (Future)
- **Framework**: React Native with TypeScript
- **Navigation**: React Navigation
- **State**: Redux Toolkit
- **UI**: React Native Paper / NativeBase

#### Admin Panel
- Same tech stack as Web App with enhanced admin features

### Backend Layer

#### Core Services (Node.js)
- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js / NestJS (for enterprise scalability)
- **Language**: TypeScript
- **API Style**: RESTful + GraphQL (for complex queries)
- **Authentication**: JWT + OAuth 2.0
- **Validation**: Joi / Zod
- **Documentation**: Swagger/OpenAPI 3.0

#### Analytics Service (Python)
- **Framework**: FastAPI
- **ML Libraries**: Pandas, NumPy, Scikit-learn
- **Data Viz**: Plotly

#### Real-time Communication
- **WebSocket**: Socket.io
- **Push Notifications**: Firebase Cloud Messaging (FCM)

### Database Layer

#### Primary Database - PostgreSQL 15+
**Why PostgreSQL?**
- ACID compliance for transactions
- Complex relationships (bookings, clients, staff)
- Strong data integrity
- Advanced querying capabilities

**Schema Design:**
```sql
-- Users (Staff, Clients, Admins)
-- Salons/Locations
-- Services
-- Bookings/Appointments
-- Payments/Transactions
-- Products (Ecommerce)
-- Orders
-- Inventory
-- Reviews/Ratings
-- Memberships/Packages
```

#### Analytics Database - MongoDB
- Time-series data
- User activity logs
- Behavioral analytics
- Flexible schema for varied analytics

#### Cache Layer - Redis
- Session management
- API response caching
- Real-time booking availability
- Rate limiting
- Job queuing

#### Search - Elasticsearch
- Full-text search for services
- Product search
- Client search
- Advanced filtering

### Infrastructure & DevOps

#### Cloud Provider Options
**Option 1: AWS (Recommended)**
- EC2/ECS for compute
- RDS for PostgreSQL
- S3 for file storage
- CloudFront CDN
- Route 53 for DNS
- SES for emails
- SNS for SMS

**Option 2: Google Cloud Platform**
- GKE for Kubernetes
- Cloud SQL
- Cloud Storage
- Cloud CDN

**Option 3: Azure**
- Azure App Service
- Azure Database
- Azure Blob Storage

#### Container Orchestration
- **Docker**: Containerization
- **Kubernetes**: Orchestration (for scale)
- **Docker Compose**: Local development

#### CI/CD Pipeline
- **Version Control**: Git (GitHub/GitLab)
- **CI/CD**: GitHub Actions / GitLab CI
- **Code Quality**: ESLint, Prettier, SonarQube
- **Testing**: Jest, Cypress, Playwright
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Error Tracking**: Sentry

### Third-Party Integrations

#### Payment Gateways
- **Razorpay** (Primary for India) - 2% + GST
- **Stripe** (International) - 2.9% + ₹2 per transaction
- **Paytm** (Alternative)
- **PayPal** (International clients)

#### Communication
- **Twilio**: SMS notifications (₹0.50/SMS)
- **SendGrid**: Email service (₹0.50/email)
- **Firebase**: Push notifications (Free tier available)

#### Shopify Integration
- Shopify API for product sync
- Webhook integration
- Inventory management sync

#### Calendar Integration
- Google Calendar API
- Outlook Calendar API
- iCal support

#### Other Services
- **Google Maps API**: Location services
- **AWS S3/CloudFront**: Media storage & CDN
- **Cloudinary**: Image optimization (Alternative)

---

## 📊 Database Schema Design

### Core Tables (PostgreSQL)

```sql
-- Organizations/Salons
CREATE TABLE organizations (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    address JSONB,
    settings JSONB,
    subscription_plan VARCHAR(50),
    subscription_status VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Users (Staff, Clients, Admins)
CREATE TABLE users (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(20), -- admin, staff, client
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Staff Profiles
CREATE TABLE staff_profiles (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    organization_id UUID REFERENCES organizations(id),
    specialization TEXT[],
    bio TEXT,
    experience_years INTEGER,
    rating DECIMAL(3,2),
    total_reviews INTEGER,
    availability JSONB, -- weekly schedule
    commission_rate DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Services
CREATE TABLE services (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    duration INTEGER, -- in minutes
    price DECIMAL(10,2),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Bookings/Appointments
CREATE TABLE bookings (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    client_id UUID REFERENCES users(id),
    staff_id UUID REFERENCES users(id),
    service_id UUID REFERENCES services(id),
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status VARCHAR(20), -- pending, confirmed, completed, cancelled, no_show
    notes TEXT,
    reminder_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments/Transactions
CREATE TABLE payments (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    booking_id UUID REFERENCES bookings(id),
    client_id UUID REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2),
    tip DECIMAL(10,2),
    total_amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    payment_gateway VARCHAR(50),
    transaction_id VARCHAR(255),
    status VARCHAR(20), -- pending, completed, failed, refunded
    paid_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Products (Ecommerce)
CREATE TABLE products (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    price DECIMAL(10,2),
    cost_price DECIMAL(10,2),
    sku VARCHAR(100) UNIQUE,
    stock_quantity INTEGER,
    low_stock_threshold INTEGER,
    images JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    shopify_product_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    client_id UUID REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE,
    subtotal DECIMAL(10,2),
    tax DECIMAL(10,2),
    shipping DECIMAL(10,2),
    total DECIMAL(10,2),
    status VARCHAR(20), -- pending, processing, shipped, delivered, cancelled
    shipping_address JSONB,
    tracking_number VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Order Items
CREATE TABLE order_items (
    id UUID PRIMARY KEY,
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    quantity INTEGER,
    price DECIMAL(10,2),
    total DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Client Profiles
CREATE TABLE client_profiles (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    organization_id UUID REFERENCES organizations(id),
    date_of_birth DATE,
    preferences JSONB,
    allergies TEXT[],
    notes TEXT,
    total_bookings INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    loyalty_points INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Reviews/Ratings
CREATE TABLE reviews (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    booking_id UUID REFERENCES bookings(id),
    client_id UUID REFERENCES users(id),
    staff_id UUID REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Memberships/Packages
CREATE TABLE memberships (
    id UUID PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id),
    client_id UUID REFERENCES users(id),
    package_name VARCHAR(255),
    package_type VARCHAR(50),
    start_date DATE,
    end_date DATE,
    total_sessions INTEGER,
    used_sessions INTEGER DEFAULT 0,
    amount_paid DECIMAL(10,2),
    status VARCHAR(20), -- active, expired, cancelled
    created_at TIMESTAMP DEFAULT NOW()
);

-- Notifications
CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    type VARCHAR(50), -- booking_reminder, payment_received, review_request
    title VARCHAR(255),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP DEFAULT NOW()
);

-- Inventory Transactions
CREATE TABLE inventory_transactions (
    id UUID PRIMARY KEY,
    product_id UUID REFERENCES products(id),
    transaction_type VARCHAR(20), -- purchase, sale, adjustment
    quantity INTEGER,
    notes TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Indexes for Performance
```sql
-- Booking queries
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_staff ON bookings(staff_id, booking_date);
CREATE INDEX idx_bookings_client ON bookings(client_id);
CREATE INDEX idx_bookings_status ON bookings(status);

-- User lookups
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_org ON users(organization_id);

-- Product searches
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_active ON products(is_active);

-- Payment tracking
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_date ON payments(paid_at);
```

---

## 🔐 Security Architecture

### Authentication & Authorization
- **JWT Tokens**: Access (15 min) + Refresh (7 days)
- **OAuth 2.0**: Google, Facebook login
- **2FA**: Optional two-factor authentication
- **Role-Based Access Control (RBAC)**:
  - Super Admin
  - Organization Admin
  - Staff Member
  - Client

### Data Security
- **Encryption at Rest**: AES-256
- **Encryption in Transit**: TLS 1.3
- **PII Data**: Encrypted fields for sensitive data
- **Payment Data**: PCI-DSS compliant (never store CVV)
- **Password**: bcrypt with salt rounds = 12

### API Security
- Rate limiting (100 req/min per IP)
- CORS configuration
- Input validation & sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens

### Compliance
- **GDPR**: Data privacy for EU clients
- **Indian IT Act 2000**: Data protection
- **PCI-DSS**: Payment card security
- **HIPAA** (if medical spa): Health data protection

---

## 📱 Mobile Application Architecture

### React Native App Structure
```
mobile-app/
├── src/
│   ├── screens/
│   │   ├── auth/
│   │   ├── booking/
│   │   ├── services/
│   │   ├── products/
│   │   └── profile/
│   ├── components/
│   ├── navigation/
│   ├── store/ (Redux)
│   ├── api/
│   ├── utils/
│   └── assets/
```

### Features
- Client booking
- Push notifications
- Payment integration
- Loyalty program
- Service history
- Product shopping
- Location services

---

## 🔄 System Flow Diagrams

See separate `FLOW_DIAGRAMS.md` file for detailed flow diagrams.

---

## 📈 Scalability Strategy

### Horizontal Scaling
- Load balancer (AWS ALB/ELB)
- Auto-scaling groups
- Database read replicas
- CDN for static assets

### Caching Strategy
- **Level 1**: Browser cache
- **Level 2**: CDN cache (CloudFront)
- **Level 3**: Redis cache
- **Level 4**: Database query cache

### Database Optimization
- Connection pooling
- Query optimization
- Proper indexing
- Partitioning for large tables
- Archive old data

### Performance Targets
- API Response: < 200ms (95th percentile)
- Page Load: < 2 seconds
- Uptime: 99.9% (8.76 hours downtime/year)
- Concurrent Users: 10,000+

---

## 🔍 Monitoring & Observability

### Application Monitoring
- **APM**: New Relic / DataDog
- **Logs**: ELK Stack
- **Errors**: Sentry
- **Uptime**: Pingdom / UptimeRobot

### Business Metrics
- Daily/Monthly bookings
- Revenue tracking
- Client retention
- Staff utilization
- Product sales
- Conversion rates

### Alerts
- Server down
- High error rates
- Database issues
- Payment failures
- Low stock alerts

---

## 🚀 Deployment Strategy

### Environments
1. **Development** - Local Docker
2. **Staging** - AWS/GCP staging environment
3. **Production** - AWS/GCP production environment

### Deployment Process
1. Code commit → GitHub
2. CI pipeline runs tests
3. Build Docker images
4. Push to container registry
5. Deploy to Kubernetes/ECS
6. Run smoke tests
7. Monitor for issues

### Rollback Strategy
- Blue-Green deployment
- Canary releases
- Database migrations with rollback scripts
- Feature flags for gradual rollout

---

## 📞 Support & Maintenance

### Support Channels
- In-app chat (Intercom/Drift)
- Email support
- Phone support (business hours)
- Knowledge base
- Video tutorials

### Maintenance Windows
- Weekly patches: Sunday 2-4 AM IST
- Major updates: Monthly
- Emergency patches: As needed

### Backup Strategy
- **Database**: Daily automated backups (30-day retention)
- **Files**: S3 versioning enabled
- **Point-in-time recovery**: Available
- **Disaster recovery**: RTO < 4 hours, RPO < 1 hour

---

## 📋 Conclusion

This architecture provides a scalable, secure, and maintainable platform that can grow from a startup to enterprise scale. The microservices approach allows for independent scaling and updates of different components.

**Next Steps:**
1. Review and approve architecture
2. Finalize technology choices
3. Set up development environment
4. Begin Phase 1 development
5. Regular sprint reviews and iterations

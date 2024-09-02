
# 🌐 Quantum Web3 Agent

## 🚀 Overview

**Quantum Web3 Agent** is a next-generation SaaS application that merges the cutting-edge fields of quantum computing, Web3 technologies, and AI. This platform offers users two powerful AI services:

- **🆓 Free AI Service:** Harness the power of open-source models like GPT-J.
- **💎 Premium AI Service:** Unlock the advanced capabilities of models like OpenAI's GPT-4, available through a subscription plan.

## ✨ Features

- **🤖 AI Integration:** Seamlessly generate text using either free or premium AI models.
- **🔒 Secure Authentication:** Protect your data with JWT-based authentication and role-based access control.
- **💰 Subscription Management:** Easily upgrade to premium AI services via a Stripe-powered subscription system.
- **☁️ Scalable Deployment:** The app is ready for AWS deployment, complete with CI/CD integration.


## 🔧 Setup Instructions

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/redx94/quantum-web3-agent.git
cd quantum-web3-agent
```

### 2. ⚙️ Backend Setup

#### Install Dependencies

```bash
cd backend
sh setup.sh
```

#### Environment Variables

Create a `.env` file in the `backend` directory and populate it with the following:

```plaintext
POSTGRES_URL=your_postgresql_connection_string
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PREMIUM_API_KEY=your_openai_api_key
```

### 3. 🎨 Frontend Setup

Your frontend is already set up. If any adjustments are needed to integrate the new backend endpoints, update the relevant API calls to match the new routes.

### 4. 🚀 Deployment

#### AWS Elastic Beanstalk

Ensure your AWS credentials are configured in GitHub secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`). Push your changes to trigger the CI/CD pipeline:

```bash
git add .
git commit -m "🚀 Deploy updated project"
git push origin main
```

### 5. 🔥 Usage

#### 🆓 Free AI Service

Send POST requests to the `/ai/free` endpoint. Ensure the user is authenticated and has the "free" role:

```json
{
  "prompt": "Your text prompt here"
}
```

#### 💎 Premium AI Service

For the premium service, users must have a "premium" role, which they can acquire by subscribing via Stripe. Send POST requests to the `/ai/premium` endpoint:

```json
{
  "prompt": "Your premium text prompt here"
}
```

### 6. 💳 Subscription Management

Users can subscribe to the premium service through the `/subscribe` endpoint. Make sure the Stripe configuration in the backend is set up correctly with your plan ID.

## 🤝 Contributing

Contributions are always welcome! Please submit a pull request with a detailed description of your changes, and we’ll review it as soon as possible.

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute as you see fit.

---

### 📬 Contact

For any inquiries or support, reach out to us at [reece.qtt@gmail.com]. We’d love to hear from you!

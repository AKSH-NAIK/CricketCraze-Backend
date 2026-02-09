# 🏏 CricketCraze Backend

This is the backend server for **CricketCraze**, a cricket-themed progress tracking application. It provides secure APIs for user data management, progress tracking, and integration with Firebase for authentication and database services.

---

## 🔗 Project Links

- **Frontend Repository:** [AKSH-NAIK/CricketCraze](https://github.com/AKSH-NAIK/CricketCraze)
- **Live Demo (Frontend):** [CricketCraze Live](https://aksh-naik.github.io/CricketCraze/)

---

## 🚀 Features

- **Progress Management:** Store and retrieve user progress data securely.
- **Authentication:** Integrated with Firebase Auth to ensure private data access.
- **Firestore Database:** Uses Google Cloud Firestore for scalable, real-time data storage.
- **Secure Middleware:** Token-based authorization for all protected routes.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database & Auth:** [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- **Communication:** [CORS](https://www.npmjs.com/package/cors) enabled for frontend integration.

---

## 📂 Project Structure

```text
CricketCraze-Backend/
├── config/             # Firebase configuration and Service Account
├── middleware/         # Auth middleware for token verification
├── routes/             # API route definitions
│   ├── progress.routes.js # Progress CRUD operations
│   └── protectedTest.js   # Security testing routes
├── server.js           # Entry point
└── package.json        # Dependencies and scripts
```

---

## 📡 API Endpoints

### Authentication
All protected routes require a `Bearer` token in the `Authorization` header.

### Progress Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/progress` | Get user progress history | Yes |
| `POST` | `/api/progress` | Save new progress data | Yes |

### Test Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/test/protected` | Test authentication middleware | Yes |

---

## ⚙️ Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AKSH-NAIK/CricketCraze-Backend.git
   cd CricketCraze-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Generate a New Private Key for your Service Account: `Project Settings > Service Accounts`.
   - Save the JSON file as `config/serviceAccountKey.json`.

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` (or `PORT` from environment variables).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

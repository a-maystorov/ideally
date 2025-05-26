# Ideally

![React](https://img.shields.io/badge/React-17+-61DAFB?logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-9+-FFCA28?logo=firebase&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-2.x-yellow)

A modern project management and idea sharing platform built with React and Firebase. Ideally enables teams to collaborate effectively by managing projects, sharing ideas, and tracking progress in real-time with a clean, intuitive interface.

## 🚀 Features

- **User Authentication**: Secure login and registration system powered by Firebase Auth
- **Project Management**: Create, update, and track projects with team members
- **Real-time Updates**: See changes instantly with Firebase Firestore integration
- **File Sharing**: Upload and share project-related files with Firebase Storage
- **Comments & Discussions**: Foster team collaboration through threaded comments
- **Custom Dashboards**: Personalized overview of your projects and tasks
- **User Profiles**: Customizable user profiles with avatars and preferences
- **Modern UI**: Clean and intuitive user interface for optimal user experience

## 🔧 Technology Stack

### Core Technologies

- **React**: Frontend library with hooks-based architecture
- **Firebase v9**: Backend-as-a-Service platform
  - **Authentication**: User registration and login
  - **Firestore Database**: NoSQL cloud database
  - **Storage**: File storage and sharing
  - **Hosting**: Application deployment
- **React Router**: Client-side routing
- **date-fns**: Modern JavaScript date utility library
- **Custom Hooks**: Specialized hooks for Firebase integration

### Development Tools

- **Create React App**: React application scaffolding
- **Git & GitHub**: Version control and code collaboration
- **npm**: Package management
- **Firebase CLI**: Firebase project management and deployment

## 🏗️ Architecture

Ideally follows a modular component-based architecture with custom hooks for Firebase integration:

```
src/
├── components/        # Reusable UI components
├── context/           # React context providers
├── hooks/             # Custom hooks for Firebase and app logic
├── pages/             # Main application pages
├── assets/            # Static assets (images, styles)
├── firebase/          # Firebase configuration and utilities
└── App.js             # Main application component
```

## 🔥 Firebase Integration

- **Authentication**: Email/password and Google authentication
- **Firestore**: Document-based data model for projects, tasks, and comments
- **Storage**: User avatars and project file attachments
- **Security Rules**: Custom rules to protect data and enforce access control
- **Hosting**: Deployed with continuous integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Firebase account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ideally.git
cd ideally

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with your Firebase configuration

# Start development server
npm start
```

### Firebase Setup

1. Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Add your Firebase configuration to the project

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to Firebase Hosting

## 📱 User Flow

1. **User Registration/Login**: Create an account or sign in
2. **Dashboard**: View all projects and recent activities
3. **Project Creation**: Create new projects with title, description, and category
4. **Team Collaboration**: Invite team members to projects
5. **Task Management**: Add, edit, and complete tasks
6. **Comments & Discussions**: Communicate with team members
7. **File Sharing**: Upload and share project-related files

## 💻 Technical Highlights

- **Custom Firebase Hooks**: Abstracted Firebase operations into reusable hooks
- **Context API**: Global state management for authentication and theme
- **Real-time Listeners**: Efficient Firestore subscriptions for live updates
- **Conditional Rendering**: Optimized component rendering based on user roles
- **Component Composition**: Reusable component patterns for consistent UI
- **Firestore Data Modeling**: Optimized document structure for querying

## 🌟 Learning Outcomes & Skills Demonstrated

This project showcases proficiency in:

- Building modern React applications with hooks
- Firebase integration (Auth, Firestore, Storage)
- State management with Context API
- Custom hook creation and implementation
- Real-time database operations
- User authentication flows
- Modern JavaScript practices
- Component-based architecture
- Deployment and hosting

## 🔮 Future Enhancements

- Responsive design for mobile and tablet devices
- Dark mode support
- Advanced filtering and sorting options
- Email notifications
- Calendar integration
- Performance optimizations
- Unit and integration tests

## 📸 Preview Screenshots

![Dashboard View](https://user-images.githubusercontent.com/76817540/170010911-542d7c2d-d715-45a5-944d-b3ee60fcb9d6.jpeg)

![Project Details](https://user-images.githubusercontent.com/76817540/170010925-63e4b2da-b38b-48f4-bb07-b15f177fa632.jpeg)

![Task Management](https://user-images.githubusercontent.com/76817540/170010937-9922f52d-7200-46a3-a5ec-a315543c8d89.jpeg)

## 🔗 Live Demo

[Ideally Project Management](https://ideally-project-management.web.app/login)

> :warning: **Note**: The website is currently optimized for desktop viewing and has limited responsiveness on tablets and phones.

## 📄 License

MIT

---

© 2022 Ideally - Crafted with ❤️ by Alkin Maystorov

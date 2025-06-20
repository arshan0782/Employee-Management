
const employees = [
  {
    "id": 1,
    "firstName": "Arshan",
    "email": "arshan@me.com",
    "password": "123",
    "taskCount": {
      "newTask": 3,
      "active": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design Landing Page",
        "description": "Create a responsive landing page for product.",
        "date": "2025-05-14",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve user login failure issue in production.",
        "date": "2025-05-10",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup analytics",
        "description": "Integrate Google Analytics in dashboard.",
        "date": "2025-05-12",
        "category": "Analytics"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 3,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a 5-slide pitch for stakeholders.",
        "date": "2025-05-15",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Database Migration",
        "description": "Move user data from old DB to new DB.",
        "date": "2025-05-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Email Campaign",
        "description": "Send promotional emails to users.",
        "date": "2025-05-09",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Update User Flow",
        "description": "Improve onboarding steps for new users.",
        "date": "2025-05-14",
        "category": "UX"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write Test Cases",
        "description": "Write unit tests for payment module.",
        "date": "2025-05-13",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests from team members.",
        "date": "2025-05-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Implement Dark Mode",
        "description": "Add dark mode toggle in settings.",
        "date": "2025-05-10",
        "category": "UI"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Client Feedback",
        "description": "Collect and document feedback from client.",
        "date": "2025-05-14",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Research Competitors",
        "description": "Study top 3 competitors’ pricing model.",
        "date": "2025-05-08",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Anjali",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Optimize Images",
        "description": "Reduce image sizes across site.",
        "date": "2025-05-14",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Refactor CSS",
        "description": "Clean and organize CSS code.",
        "date": "2025-05-11",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Deploy Update",
        "description": "Deploy new build to staging environment.",
        "date": "2025-05-10",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Build Contact Form",
        "description": "Create contact form with validation.",
        "date": "2025-05-14",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Add FAQ Section",
        "description": "Insert FAQ accordion on Help page.",
        "date": "2025-05-13",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Improve SEO",
        "description": "Update meta tags and alt texts.",
        "date": "2025-05-11",
        "category": "SEO"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Live Chat Integration",
        "description": "Embed live chat widget on homepage.",
        "date": "2025-05-09",
        "category": "Support"
      }
    ]
  }
]



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }] 


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }

}
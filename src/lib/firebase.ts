import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if we have the minimal configuration to initialize Firebase
const hasFirebaseKeys = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (hasFirebaseKeys) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn(
    "Firebase environment variables are missing. Using local/localStorage fallback operations for forms."
  );
}

export { app, db };

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
}

// Helper to save contact submissions
export async function submitContactForm(data: Omit<ContactSubmission, "createdAt">): Promise<{ success: boolean; id?: string }> {
  const submission: ContactSubmission = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  if (db) {
    try {
      const docRef = await addDoc(collection(db, "contact_messages"), submission);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error submitting contact form to Firebase:", error);
      throw error;
    }
  } else {
    // Local fallback: log to console and store in localStorage
    console.log("Local Fallback: Contact Form Submission received:", submission);
    try {
      const localMessages = JSON.parse(localStorage.getItem("technolz_contact_messages") || "[]");
      const localId = "local_" + Math.random().toString(36).substr(2, 9);
      localMessages.push({ id: localId, ...submission });
      localStorage.setItem("technolz_contact_messages", JSON.stringify(localMessages));
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return { success: true, id: localId };
    } catch (e) {
      console.error("Error writing to localStorage:", e);
      return { success: true, id: "local_memory_success" };
    }
  }
}

// Helper to save newsletter subscription
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; id?: string }> {
  const subscription: NewsletterSubscription = {
    email,
    subscribedAt: new Date().toISOString(),
  };

  if (db) {
    try {
      const docRef = await addDoc(collection(db, "newsletter_subscriptions"), subscription);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error subscribing to newsletter in Firebase:", error);
      throw error;
    }
  } else {
    // Local fallback
    console.log("Local Fallback: Newsletter Subscription received:", subscription);
    try {
      const localSubs = JSON.parse(localStorage.getItem("technolz_newsletter_subscriptions") || "[]");
      const localId = "local_" + Math.random().toString(36).substr(2, 9);
      localSubs.push({ id: localId, ...subscription });
      localStorage.setItem("technolz_newsletter_subscriptions", JSON.stringify(localSubs));
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return { success: true, id: localId };
    } catch (e) {
      console.error("Error writing to localStorage:", e);
      return { success: true, id: "local_memory_success" };
    }
  }
}

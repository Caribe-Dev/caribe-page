import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SDK_PRIVATE);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

export default async function handler(
    req,
    res
) {
    const id = db.collection("caribe-conf-2024").doc().id;
    const docRef = db.collection('caribe-conf-2024').doc(id);
    const { email } = req.body;

    await docRef.set({ email });

    res.status(200).json({ message: 'success' })
}
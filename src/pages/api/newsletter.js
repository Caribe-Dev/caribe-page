import { getFirestore } from "firebase-admin/firestore";
import { getApps, initializeApp, cert } from "firebase-admin/app";

const serviceAccount = JSON.parse(process.env.FIREBASE_SDK_PRIVATE);

const alreadyCreatedAps = getApps();

if (alreadyCreatedAps.length === 0) {
    initializeApp({
        credential: cert(serviceAccount)
    });
}

const db = getFirestore();

export default async function handler(
    req,
    res
) {
    if (req.method === 'POST') {
        const { email } = req.body;

        const existEmail = await db.collection("caribe-conf-2024").where('email', '==', email, true).get();

        if (existEmail.empty) {
            const id = db.collection("caribe-conf-2024").doc().id;
            const docRef = db.collection('caribe-conf-2024').doc(id);

            await docRef.set({ email });
        }


        res.status(200).json({ message: 'success' });
    }
}
import React, { useEffect, useState } from "react";
import "./emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { db } from "../configFirebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  console.log(emails);

  // Function to read data from the "mails" collection
  const readDataFromFirestore = async () => {
    try {
      const mailsCollectionRef = collection(db, "mails");
      const querySnapshot = await getDocs(mailsCollectionRef);

      const emailList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const emailWithId = { id: doc.id, ...data };
        emailList.push(emailWithId);
      });

      // Set the emails state with the list of emails including IDs
      setEmails(emailList);
    } catch (error) {
      console.error("Error reading data from Firestore:", error);
    }
  };

  useEffect(() => {
    // Call the function to read data when the component mounts
    readDataFromFirestore();
  }, []); // Empty dependency array to ensure it runs once

  return (
    <div className="emailList">
      <EmailListSetting />
      <EmailType />

      {emails.map((email) => (
        <EmailBody
          key={email.id}
          name={email.to}
          subject={email.subject}
          message={email.message}
          time={new Date(email.timestamp?.seconds * 1000).toLocaleTimeString()}
        />
      ))}
    </div>
  );
};

export default EmailList;

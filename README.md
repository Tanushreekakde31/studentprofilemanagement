Setup Instructions:
Install Dependencies:

Clone the repository from GitHub or the relevant source.
Ensure Node.js and npm are installed. You can check if they’re installed by running node -v and npm -v in the terminal.


1)Navigate to the project directory and install dependencies by running:
npm install
Start the Development Server:

2)Once dependencies are installed, start the development server with:
npm start
This will launch the app in your browser at http://localhost:3000 (default address).
Build for Production:

3)To build the app for production, run:
npm run build
The production build will be located in the build folder, ready to be deployed.
Customize the Profile Fields:

Modify the relevant React components to adjust profile fields, skill categories, and other elements as needed.


##Description of Features:
1)Profile Management: Users can create, update, and view their profile with personal information such as name, email, grade, birth date, and phone number.
2)Profile Picture Upload: Students can upload their profile picture, which is displayed on their profile card.
3)Skill Inventory Management: Add, edit, and remove skills categorized by type (e.g., Technical, Soft Skills) with proficiency levels (e.g., Beginner, Intermediate, Expert).
4)Bulk Actions for Skills: Efficient management through bulk actions for deleting or updating multiple skills at once.
5)Modular Design: React components are reusable for easy updates, enhancements, or new features.
6)Real-time Updates: The SPA ensures smooth user interactions without requiring full-page reloads.
7)Scalability: The app is designed to scale with additional features like resume generation or profile exporting.

##Challenges Faced:
1)State Management: Managing complex state transitions for profiles and skills required careful organization to ensure that the app remains responsive and bug-free, especially when dealing with dynamic updates.
2)UI Consistency: Maintaining a consistent, clean design while making sure the app is easy to use for all users, regardless of their technical skills, posed a challenge in balancing user experience with functionality.
3)Bulk Skill Management: Implementing bulk actions (add, edit, delete) for skills posed challenges regarding performance and state synchronization, especially when dealing with a large number of skills.
4)Profile Picture Upload: Ensuring proper handling of file uploads, resizing images, and managing the UI to show profile pictures smoothly was a challenge.


##Potential Improvements:
1)Resume Generation: Add a feature to generate resumes based on the stored profile data and skills, potentially in different formats (PDF, DOCX).
2)Export Profile: Allow users to export their profile data, including personal information and skills, into various formats like PDF or CSV.
3)User Authentication: Implement user authentication and data persistence (e.g., saving profiles to a backend) so students can securely store and access their information across devices.
4)Advanced Search and Filter: Implement advanced search and filter options for skills, making it easier for users to navigate their skills inventory.
Mobile Responsiveness: Ensure the app is fully responsive across different screen sizes and devices, ensuring that students can manage their profiles on the go.

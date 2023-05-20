# Description
Web Resource Hub is an open-source project developed for the DevJam Hackathon organized by Social Summer of Code. It serves as a comprehensive collection of frontend web resources, including HTML, CSS, JavaScript, and React. The project aims to provide developers with a centralized platform to access a wide range of frontend tools and resources, making their development process more efficient and productive..

![Screenshot 2023-05-15 094313](https://github.com/jayk-gupta/web-resources-project/assets/100681165/1f5db7da-e30c-4075-bab7-719cac80cae4)



# How to Use 
1. Choose a Section:Start by selecting the section that corresponds to the type of resource you're interested in. You can choose from Videos, Websites, Books, or Tools.

2. Explore Tags: Within each section, you'll find tags representing different technologies such as HTML, CSS, JavaScript, and React. Click on a specific tag to filter the resources and display only those relevant to the chosen technology. For example, clicking on the "HTML" tag will show resources specifically related to HTML.

3. Browse Resource Cards: Once you've selected a tag, resource cards related to that technology will be displayed. Each card represents a specific resource, such as a video tutorial, website, book, or tool. The cards typically contain a brief description, title, and relevant details about the resource.

4. Access Resource Details: Click on a resource card to access more details about the resource. This may include a link to the video, website, or book, as well as additional information, ratings, or reviews.

5. Navigate Back: To explore more resources within the same section, simply use the navigation buttons or links provided. You can go back to the list of tags, choose a different tag, or select another resource.

# Getting Started
1. Fork the project,click on create new fork.
![s3](https://github.com/jayk-gupta/web-resources-project/assets/100681165/b6fdab7f-61cd-48ba-9462-9ae89c50e4c6)

2. To clone the repository to your local machine, follow these steps:

1. Click on the "Code" button.
![s1](https://github.com/jayk-gupta/web-resources-project/assets/100681165/c6b5a565-212a-467a-a697-2106ba3911a4)

2. Copy the HTTPS Link.
![s2](https://github.com/jayk-gupta/web-resources-project/assets/100681165/a0193d9a-85bc-457f-9edc-d24b93ce9f9d)

4. Open the terminal or command prompt on your computer.

5. Navigate to the directory where you want to clone the repository.


6. Type the command `git clone [https://github.com/<your_github_username>/web-resources-project.git]` (This will download the repository to your local machine)


# Running the Project Locally
1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where the repository was cloned.
3. Run the following command: `pnpm install` (This command installs the project dependencies).
4. After the installation is complete, run the following command: `pnpm dev` (This command launches the project in your local browser or terminal).

# Adding new resource 
1. Navigate to the database folder in the src folder.
2. Navigate to the appropriate section directory (videos, websites or challenges etc) based on the type of resource you want to add. 
3. Each directory has technology json file
3. Create a new object for your resource in the appropriate json file.
4. Add the details of your resource: title,description,link,image link.

## Adding images
The size of the image should be less than 300 Kb
1. Navigate to the public folder.
2. Now navigate in the Card Images folder
3. There you will find folders of all the sections, navigate to the appropriate folder.
4. Each folder has a .md file
5. Drag and drop your image in the .md file in the appropriate position.

# Contributing
We welcome contributions from the community! If you're interested in contributing to this project, please read our contribution guidelines for more information on how to get started.

# License
MIT License


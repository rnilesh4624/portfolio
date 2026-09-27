function Projects(){


const projects=[

{
title:"E-Commerce Automation Framework",

description:
"Selenium Java + Cucumber BDD + TestNG automation framework",

link:
"https://github.com/yourusername/automation-framework"

},


{
title:"API Automation Framework",

description:
"REST API automation using Java, Rest Assured and Cucumber",

link:
"https://github.com/yourusername/api-framework"

},


{
title:"Playwright Learning Project",

description:
"Automation practice using Playwright Java",

link:
"https://github.com/yourusername/playwright-project"

}

];


return(

<section id="projects">


<h2>
Projects
</h2>


{

projects.map((project,index)=>(


<div key={index}>


<h3>
{project.title}
</h3>


<p>
{project.description}
</p>


<a 
href={project.link}
target="_blank">
View
</a>


</div>


))

}


</section>


)

}


export default Projects;
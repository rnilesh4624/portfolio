function Skills(){

const skills=[
"Selenium WebDriver",
"Java",
"Cucumber BDD",
"TestNG",
"API Testing",
"Postman",
"SQL",
"Git/GitHub",
"Playwright (Learning)",
"Manual Testing"
];


return(

<section id="skills">

<h2>Skills</h2>

<ul>

{
skills.map(
(skill,index)=>
<li key={index}>{skill}</li>
)
}

</ul>

</section>

)

}

export default Skills;
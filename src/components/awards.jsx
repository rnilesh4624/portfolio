function Awards(){


const award=[

{
name:"Ownership Award",
file:"/awards/aza-award.pdf"
}
// ,
// {
// name:"API Testing Certificate",
// file:"/certificates/api-testing-certificate.pdf"
// }


];


return(

<section>


<h2>
Awards
</h2>


<ul>


{

award.map((cert,index)=>(

<li key={index}>


<a 
href={award.file}
target="_blank">

{award.name}

</a>


</li>


))


}


</ul>


</section>


)

}


export default Awards;
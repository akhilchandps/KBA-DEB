import React from 'react'

const Result = () => {
  return (
    <>
      <div class="main flex justify-center  ">

<div class="mt-5 bg-[rgba(0,0,0,0.8)] px-5 py-5  backdrop-blur-sm md:px-20 md:py-8">
    <ul class="gap-5 list-style-none md:text-xl  text-md text-white">
        <li class="my-2 flex gap-5"><b>Student Name:</b> <p>Akhil Chand</p></li>
        <li class="my-2 flex gap-5"><b>Student Result:</b>42355</li>
        <li class="my-2 flex gap-5"><b>Student Class:</b>tenth</li>
    </ul>

    <div class="mt-12 ">
        <table class="bg-[rgba(255,255,255,0.8)] w-[350px]	 md:w-[650px] border">
            <tr>
                <th class="p-5 border ">Sl No</th>
                <th class="p-5 border">Subjects</th>
                <th class="p-5 border">Marks</th>
            </tr>
            <tr>
                <td class="text-center p-3 border">2</td>
                <td class="text-center p-3 border">English</td>
                <td class="text-center p-3 border">90</td>
            </tr>
            <tr>
                <td class="text-center p-3 border">3</td>
                <td class="text-center p-3 border">Science</td>
                <td class="text-center p-3 border">80</td>
            </tr>
            <tr>
                <td class="text-center p-3 border">4</td>
                <td class="text-center p-3 border">Maths</td>
                <td class="text-center p-3 border">75</td>
            </tr>
            <tr>
                <td class="text-center p-3 border">Total</td>
                <td></td>
                <td class="text-center p-3 border"><b>301</b>outof <b>400</b></td>
            </tr>
            <tr>
                <td class="text-center p-3 border">Percentage</td>
                <td></td>
                <td class="text-center p-3 border"><b>75%</b></td>
            </tr>
            <tr>
                <td class="text-center p-3 border">Download Result</td>
                <td></td>
                <td class="text-cente p-3 border"><b>Download</b></td>
            </tr>
        </table>
    </div>
</div>


</div>
    </>
  )
}

export default Result

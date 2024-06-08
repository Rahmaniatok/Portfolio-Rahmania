import Link from "next/link";
import Navbarproject from '../Navbarproject';


export default function Treeageestimation (){
    return(
        <main>
            <Navbarproject />
            <div className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[100px]">
                <div className="flex justify-center">
                    <img className="w-[200px] md:w-[400px] mx-2" src="/projects/Treeageestimation.png"></img>
                </div>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    Tree Age Estimation
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                    This program estimates the age of a tree based on the tree rings on its trunk. The input for this program is an image of the tree trunk, which will be processed using edge detection to count the number of rings detected.
                </h4>

                <h2 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    What Part Did I Make?
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                    I worked on finding the center point and drawing a line from center to the edge to count the rings (tree rings) that were intersected.
                </h4>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    Program Flow
                </h2>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/gray.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Convert to Gray Scale
                    </h4>
                </div>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/edge.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Edge Detection
                    </h4>
                </div>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/sobel.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Implement Sobel Operator
                    </h4>
                </div>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/threshold.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Adaptive Thresholding
                    </h4>
                </div>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/center.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Find The Center
                    </h4>
                </div>
                <div className="flex justify-center py-4">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/treeageestimation_image/countinglines.png"></img>
                    </div>
                    <h4 className="text-l md:text-xl font-sans text-left flex items-center basis-1/2">
                        Counting Lines
                    </h4>
                </div>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    You Can Access This Project Using Link: 
                </h2>
                <Link href={"https://github.com/Rahmaniatok/Tree-Age-Counting"}>
                    <h4 className="text-l md:text-xl font-sans text-center hover:text-blue-800">
                    https://github.com/Rahmaniatok/Tree-Age-Counting
                    </h4>
                </Link>
                <div className="my-24"></div>
            </div>
        </main>
    )
}


import Link from "next/link";
import Navbarproject from '../Navbarproject';



export default function Sleepefficiency (){
    return(
        <main>
            <Navbarproject />
            <div className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[100px]">
                <div className="flex justify-center">
                    <img className="w-[200px] md:w-[400px] mx-2" src="/projects/Sleepefficiency.png"></img>
                </div>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    Sleep Efficiency Regression
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                    Sleep efficiency is defined as the ratio of the time spent in bed to the time actually spent sleeping. This model aims to predict individuals at risk of sleep disorders and improve overall sleep quality by providing recommendations on how to enhance their sleep efficiency.
                </h4>
                <h2 className="text-2xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    What Part Did I Make?
                </h2>
                <h4 className="text-l md:text-xl font-sans text-center">
                    I worked on the preprocessing and modeling using random forest for this project.
                </h4>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    Program Flow
                </h2>
                <div className="flex justify-center py-4 items-center">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/sleepefficiency_image/statistic.png"></img>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="text-l md:text-xl font-sans text-left font-semibold">
                        Data Statistic Analysis
                        </h4>
                        <h4 className="text-l md:text-xl font-sans text-left">
                    Modes, correlation, outliers, group data, range, frequency table
                        </h4>
                    </div>
                </div>
                <div className="flex justify-center py-4 items-center">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/sleepefficiency_image/visualization.png"></img>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="text-l md:text-xl font-sans text-left font-semibold">
                        Data Preparation
                        </h4>
                        <h4 className="text-l md:text-xl font-sans text-left">
                        Data Cleaning, Imputation, outlier handling, scling, feature selection                        </h4>
                    </div>
                </div>
                <div className="flex justify-center py-4 items-center">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/sleepefficiency_image/feature.png"></img>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="text-l md:text-xl font-sans text-left font-semibold">
                        Fetaure Selection
                        </h4>
                    </div>
                </div>
                <div className="flex justify-center py-4 items-center">
                    <div className="basis-1/2 flex justify-end">
                        <img className="h-[100px] md:h-[200px] mx-2" src="/sleepefficiency_image/tuning.png"></img>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="text-l md:text-xl font-sans text-left font-semibold">
                        Modelling, Tuning, and Evaluation
                        </h4>
                        <h4 className="text-l md:text-xl font-sans text-left">
                        Model : Random Forest, Linear Regression, SVM
                        </h4>
                        <h4 className="text-l md:text-xl font-sans text-left">
                        Tuning : GridSearchV
                        </h4>
                    </div>
                </div>
                <h2 className="text-xl md:text-4xl py-2 font-semibold font-sans text-center mt-12">
                    You Can Access This Project Using Link: 
                </h2>
                <Link href={"https://github.com/Rahmaniatok/Sleep-Efficiency-Regression"}>
                    <h4 className="text-l md:text-xl font-sans text-center hover:text-blue-800">
                    https://github.com/Rahmaniatok/Sleep-Efficiency-Regression
                    </h4>
                </Link>
                <div className="my-24"></div>
            </div>
        </main>
    )
}
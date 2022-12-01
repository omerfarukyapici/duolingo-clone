import { ProductComp } from "./ProductComp";

import ProductOne from '../../assets/img/press/productOne.svg';
import ProductTwo from '../../assets/img/press/productTwo.svg';
import ProductThree from '../../assets/img/press/productThree.svg';

export const OurProducts = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-[1000px] pb-[1.5rem] md:pb-[3rem] border-solid border-b-2 border-[#e5e5e5]">
                <div className="flex justify-center py-[3rem] md:py-[5rem]">
                    <h2 className="text-[#58cc02] text-[40px] lg:text-[54px]  leading-1.1 font-bold pb-2 text-center lg:text-left">our products</h2>
                </div>

                <div className="block md:flex justify-between ">
                    <div className="flex justify-center">
                        <ProductComp
                            img={ProductOne}
                            title="Duolingo ABC"
                            content="The fun, hands-on way for kids to learn how to read."
                            linkAdress="#/abc"
                            linkName="LEARN MORE"
                        />
                    </div>

                    <div className="flex justify-center">
                        <ProductComp
                            img={ProductTwo}
                            title="Duolingo"
                            content="The world’s most popular language learning app."
                            linkAdress="#/press"
                            linkName="LEARN MORE"
                        />
                    </div>
                    <div className="flex justify-center">
                        <ProductComp
                            img={ProductThree}
                            title="Duolingo English Test"
                            content="The future of English proficiency testing."
                            linkAdress="#/press"
                            linkName="LEARN MORE"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}
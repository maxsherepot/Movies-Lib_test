import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const MovieCard = ({ item }) => {
    const { title, imageUrl, description, id } = item;


    return (
        <div className="col-12 col-sm-6 col-lg-4 p-4 p-md-5">
            <div className="card customShadow">
                <h3 className="text-center my-3">{title}</h3>

                <div className="imageContainer mx-auto mb-4">
                    <img className="card-img-top"
                        src={imageUrl}
                        alt="wrong url"
                    />
                </div>

                {description &&
                    <Accordion allowZeroExpanded>
                        <AccordionItem key={id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Description
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {description}
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                }
            </div>
        </div>
    );
};


export default MovieCard;

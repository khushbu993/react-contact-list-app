import React from 'react';

const ContactCard = ({ contactList }) => {
    return (
        <>
            {contactList?.map((contact, index) => (
                <figure key={index} className="bg-white h-80 rounded-lg shadow-md pt-7 border-2 border-purple-500 hover:border-pink-500">
                    <img
                        src={contact.picture.large} alt="user"
                        className="W-32 h-32 rounded-full mx-auto"
                    />
                    <figcaption className="text-center mt-5">
                        <p className="text-gray-700 font-semibold text-xl mb-2">{contact.name.first} {contact.name.last}</p>
                        <p className="text-gray-500"><span className="font-medium">email:</span>{contact.email}</p>
                        <p className="text-gray-500"><span className="font-medium">Phone:</span>{contact.cell}</p>
                        <p className="text-gray-500"><span className="font-medium">City:</span>{contact.location.city}</p>
                    </figcaption>
                </figure>
            ))
            }
        </>
    );
};

export default ContactCard;
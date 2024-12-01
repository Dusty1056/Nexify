/* import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({open, setOpen, el}) => {
    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <div className='py-4 w-full flex flex-col gap-4 items-center justify-center'>
                    <Dialog.Title as='h3' className='font-semibold text-lg'>
                        {el?.task?.title}
                    </Dialog.Title>

                    <p className='text-start text-gray-500'>{el?.text}</p>

                    <Button
                        type='button'
                        className='bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto border'
                        onClick={() => setOpen(false)}
                        label='Ok'
                    />    
                </div>
            </ModalWrapper>
        </>
    );
};

export default ViewNotification; */

/* import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({ open, setOpen, el, markAsRead }) => {
    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                    {// Title of the Task }
                    <Dialog.Title as="h3" className="font-semibold text-lg">
                        {el?.task?.title || "Notification"}
                    </Dialog.Title>

                    {// Notification Text }
                    <p className="text-start text-gray-500">{el?.text || "No details available."}</p>

                    {// Timestamp of Notification }
                    <p className="text-sm text-gray-400">
                        {el?.timestamp ? new Date(el.timestamp).toLocaleString() : "No timestamp available"}
                    </p>

                    {// Mark as Read Button }
                    <Button
                        type="button"
                        className="bg-blue-600 px-4 text-sm font-semibold text-white rounded hover:bg-blue-700"
                        onClick={() => {
                            if (markAsRead) {
                                markAsRead(el?.id); // Call the function to mark as read
                            }
                            setOpen(false); // Close modal
                        }}
                        label="Mark as Read"
                    />

                    {// Close Button }
                    <Button
                        type="button"
                        className="bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto border"
                        onClick={() => setOpen(false)}
                        label="Ok"
                    />
                </div>
            </ModalWrapper>
        </>
    );
};

export default ViewNotification; */

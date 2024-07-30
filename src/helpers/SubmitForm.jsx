import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

const SubmitForm = () => {
    const navigate = useNavigate();
    const closeBtnRef = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        const { goingTo, checkinout, guests } = formData;
        const dateArray = checkinout.split(" ");
        const checkinDate = dateArray[0];
        const checkoutDate = dateArray[2];
        if (goingTo === "") {
            toast.error("Please select any city...");
        } else if (checkinDate.length === 0) {
            toast.error("Please select Date...");
        } else if(checkoutDate=== undefined){
            toast.error("Please select checkout Date...");
        } else {
            navigate(`/hotel-list/${goingTo}/${checkinDate}/${checkoutDate}/${guests}`);
        }
        if (closeBtnRef.current && closeBtnRef.current.classList.contains("open")) {
            closeBtnRef.current.click();
        }
    };

    return { handleSubmitForm, closeBtnRef };
};

export default SubmitForm;

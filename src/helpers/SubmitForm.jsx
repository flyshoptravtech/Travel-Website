import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SubmitForm = () => {

    const navigate = useNavigate()

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries())
        const {goingTo,checkinout,guests} = formData
        const dateArray = checkinout.split(" ")
        const checkinDate = dateArray[0]
        const checkoutDate = dateArray[2]
        if(goingTo === ""){
            toast.error("Please select any city...")
        }else if(checkinDate === ""){
            toast.error("Please select Date...")
        }else{
            console.log(goingTo,checkinDate,checkoutDate,guests);
            navigate(`/hotel-list/${goingTo}/${checkinDate}/${checkoutDate}/${guests}`)
        }
    }

    return {handleSubmitForm}
}

export default SubmitForm
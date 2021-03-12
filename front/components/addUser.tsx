import { useForm } from 'react-hook-form';

interface AddContactFormProps {
    onSubmit: any;
}

export default function AddUserForm(props: AddContactFormProps) {
    const {  handleSubmit } = useForm();
    return (
        <div style={{textAlign: "center"}}>

            <h1 style={{fontSize: "20px"}}> Registrer</h1>
            <br/>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <label> Email </label>
                <br/>
                <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}}
                />
                <br/><br/>
                <label> Firstname </label>
                <br/>
                <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                <br/><br/>
                <label> Lastname </label>
                <br/>
                <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                <br/><br/>
                <label> Birthdate </label>
                <br/>
                <input type="date" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                <br/><br/>
                <label> Gender</label>
                <br/>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Female</label><br/>
                <input type="radio" id="other" name="gender" value="other"/>
                <label htmlFor="other">Other</label>
                <br/><br/>
                <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                <br/><br/>
                <input type="submit" value="Submit" style={{border: "2px solid black", borderRadius: "20px", width: 200}} />
            </form>
        </div>
    );
}
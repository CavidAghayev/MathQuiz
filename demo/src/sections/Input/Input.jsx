import './../Input/Input.css'
const Input = ({size}) => {

    return (
      <form action="" className='form'>
        <label className='label' htmlFor="email">Email</label>
        <input className={`input input--${size}`} type='text' id='email' /> c
        <label className='label' htmlFor="password">Password</label>
        <input className={`input input--${size}`} type='password' id='password'/>
      </form>
    )

}


export default Input
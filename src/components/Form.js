import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className='form-page'>
      <div className='form'>
        <h2>Add a Character</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='Name' {...register("name", { required: true })}/>
          {errors.name && <span>* This field is required</span>}
          <input type='text' placeholder='Species' {...register("species", { required: true })} />
          {errors.species && <span>* This field is required</span>}
          <input type='text' placeholder='Gender' {...register("gender", { required: true })} />
          {errors.gender && <span>*This field is required</span>}
          <input type='text' placeholder='Status' {...register("status", { required: true })}/>
          {errors.status && <span>* This field is required</span>}
          <input type='text' placeholder='Origin'  {...register("origin", { required: true })} />
          {errors.origin && <span>* This field is required</span>}
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Form
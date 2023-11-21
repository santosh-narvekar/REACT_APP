import { useNavigation } from "react-router-dom"

const SubmitBtn = ({text}) => {
  const {state} = useNavigation();
  const isSubmitting = state==='submitting';
  console.log(isSubmitting)
  return (
      <button
      type="submit"
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
      >
        {isSubmitting?
        <span 
        className='loading loading-spinner'>
          submitting...
        </span>  
      :
        <span >
          {text || 'submit'}
        </span>
      }
      </button>
    )
  }


export default SubmitBtn

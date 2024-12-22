import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Create = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [summary , setSummmary] = useState('')

  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating || !body || !summary) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating, body, summary }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
      
    }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Rate your Book Here!</h1>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Body:</label>
        <input 
          type="text" 
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label htmlFor="summary">Summary:</label>
        <textarea 
          id="summary"
          value={summary}
          onChange={(e) => setSummmary(e.target.value)}
        />

        

        <button>Submit Here!</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create
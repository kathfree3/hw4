import React, { useState } from 'react'
import s from 'styled-components'

const Input = s.input`
  display: block;
  font-size: 20px;
  padding: 10px 24px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  margin: 2rem 1rem;
`

const TextBox = s(Input)`
  color: #262626;
  width: 95%;
  height: 5%;
`

const SubmitButton = s(Input)`
  background: palevioletred;
  color: white;
  margin-left: auto;
`

const FormContainer = s.div`
  margin: auto;
  border: 3px solid #f2f2f2;
  border-radius: 3px;
  padding: 5px;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: ${props => (props.isNewPost ? '80%' : '100%')};
`

const Form = ({
  setInputData, inputData, setMakeNewReview, h, previousName, depth,
}) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState(previousName ? `@${previousName}` : '')

  const shouldBeDisabled = name === '' || content === ''

  const submit = () => {
    setInputData([...inputData, { name, content, depth }])
    setName('')
    setContent('')
    if (setMakeNewReview) {
      setMakeNewReview(false)
    }
  }

  return (
    <FormContainer isNewPost={!previousName}>
      <h2>{h}</h2>
      <form>
        <TextBox value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Name..." />
        <TextBox value={content} type="text" onChange={e => setContent(e.target.value)} placeholder="Write a New Post..." />
        <SubmitButton type="reset" onClick={() => submit()} disabled={shouldBeDisabled} value="Submit" />
      </form>
    </FormContainer>
  )
}

export default Form

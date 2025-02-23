// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextEditor(props: any) {

  const { schema } = props;

  const update = () => {
    schema.add(100, 100, 100, 200);
  }

  return (
    <div>
      <h1 className='text-3xl'>Write your code here</h1>
      <textarea className='w-full h-full' onChange={update}></textarea>
    </div>
  )
}
export default function Citation({
  citation,
  align = 'center' }) {
  return (
    <p className="citation" style={{ textAlign: align }}>
      Source: <cite>{citation}</cite>
    </p>
  )
}

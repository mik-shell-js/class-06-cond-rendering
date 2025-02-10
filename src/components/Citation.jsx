export default function Citation({ citation, align = 'center', color }) {
  return (
    <p className="citation" style={{ textAlign: align, backgroundColor: color }}>
      Source: <cite>{citation}</cite>
    </p>
  )
}

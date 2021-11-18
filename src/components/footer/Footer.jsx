import './Footer.css'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnRyOSIsImEiOiJja3MyM3NsdjExenI5Mm5uODlteGxhbXdvIn0.0AkcaTfC9swqHJgqbr8TLg'

const Footer = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [85.324, 27.7172],
      zoom: 12,
    })

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([85.324, 27.7172])
      .addTo(map)
  }, [])

  return (
    <div className="footer">
      <div className="footer__About">
        <div className="footer__About--Title">About</div>
        <div className="footer__About--secondary">contact:98XXXXXXXX</div>
        <div className="footer__About--secondary">
          Pepsicola townplanning ktm 35 pepsicola
        </div>
      </div>
      <div className="Map" id="map"></div>
    </div>
  )
}

export default Footer

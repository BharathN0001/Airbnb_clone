function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        {/* About */}
      <div className="space-y-4 text-s text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      {/* Community */}
      <div className="space-y-4 text-s text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Bharath</p>
      </div>
    
      {/* */}
      <div className="space-y-4 text-s text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Bharath N</p>
        <p>Presents</p>
        <p>My work portfolio</p>
        <p>With latest projects</p>
        <p>Using latest Technologies</p>
      </div>

      {/* */}
      <div className="space-y-4 text-s text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Easter eggs</p>
        <p>For the win</p>
      </div>

    </div>
  )
}

export default Footer

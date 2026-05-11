export default function Wallpaper({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: isDarkMode ? "url('/Lutervyn/wallpaper-night.jpg')" : "url('/Lutervyn/wallpaper-day.jpg')",
      }}
    />
  )
}

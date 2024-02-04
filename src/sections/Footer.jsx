export default () => (
  <footer className="max-container" >
    <div className="flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
      <p className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        &copy;{ new Date().getFullYear() } 
        <a className="text-indigo-700" href="https://github.com/Maeokubo" target="_blank" rel="noopener noreferrer"> Portfolio</a>,
        by Hazuki Okubo .
      </p>
    </div> 
  </footer>
)


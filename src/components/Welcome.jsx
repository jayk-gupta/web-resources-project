
const Welcome = ({section, isOutletRendered}) => {
    return (
        <div className="mx-auto text-center">
        <h2 className="text-4xl font-roboto tracking-wider mb-2">
        {isOutletRendered ? "Enjoy learning!" : `Welcome to ${section} section!`}
        </h2>
        <p className="font-roboto tracking-wider">

          Select a Topic to Learn

        </p>
      </div>
    )
}
export default Welcome
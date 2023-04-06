function Layout(props) {
    return(
        <div>
            <div>
                {props.Main}
            </div>
            <div>
                {props.Description}
            </div><
                div>
                {props.basics}
            </div>
            <div>
                {props.inproveYourself}
            </div>
            <div>
                {props.Helpers}
            </div>
            <div>
                {props.AboutCompany}
            </div>
        </div>
    )
}

export default Layout;
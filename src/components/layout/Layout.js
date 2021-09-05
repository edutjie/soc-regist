function Layout(props) {
    return (
        <main className='bg-wallpaper bg-cover bg-fixed bg-no-repeat'>
            {props.children}
        </main>
    )
}

export default Layout;
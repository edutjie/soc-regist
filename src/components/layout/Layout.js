function Layout(props) {
    return (
        <main className='bg-gradient-to-b from-gradient1 to-gradient2'>
            {props.children}
        </main>
    )
}

export default Layout;
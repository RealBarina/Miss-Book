export default {
    template: `
        <section class="about-page">
            <h2>About <i class="fa-solid fa-user-group"></i></h2>
            <img src="assets/img/aboutbook.jpg" class="about-img"/>
            <hr />
            <nav>
                <RouterLink to="/about/team">Our team</RouterLink> |
                <RouterLink to="/about/services">Our services</RouterLink> |
            </nav>
            <hr />
            <RouterView />
            <hr />
        </section>
    `,
}

export const AboutTeam = {
    template: `<section>
        <h3>Bar's team is amazing</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
        <img src="assets/img/meBigBen.jpg" class="about-img"/>
    </section>`
}
export const AboutServices = {
    template: `<section>
        <h3>Our Services are incredible!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
        <img src="assets/img/bigBen.jpg" class="about-img"/>
    </section>`
}

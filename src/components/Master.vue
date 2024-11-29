<template>
	<!--================ Start Header Area =================-->
	<header-section></header-section>
	<router-view></router-view>
	<!--================ End Header Area =================-->

	<!--================ Start Newsletter Area =================-->
	<newsletter-section></newsletter-section>
	<!--================ End Newsletter Area =================-->

	<!--================Footer Area =================-->
	<footer-section></footer-section>
	<!--================End Footer Area =================-->
</template>
<script>
import HeaderSection from './Frontend/HeaderSection.vue'
import FooterSection from './Frontend/FooterSection.vue'
import NewsletterSection from './Frontend/NewsletterSection.vue'
export default {
	components: {
		'header-section': HeaderSection,
		'footer-section': FooterSection,
		'newsletter-section': NewsletterSection
	}
}
</script>
<style scoped></style>

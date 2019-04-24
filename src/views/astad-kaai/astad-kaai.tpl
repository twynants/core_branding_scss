<template id="astad-kaai">
	<div class="astad-kaai">
		<n-sidebar v-if="configuring" @close="configuring = false" class="settings">
			<n-form class="layout2">
				<n-form-section>
					<n-collapsible title="Image Settings">
						<n-form-text v-model="cell.state.url" label="url"/>
					</n-collapsible>
				</n-form-section>
			</n-form>
		</n-sidebar>		
		<div class="kaai">
			<div class="kaai-outer-container">
				<div class="logo-wrapper">
					<a class="o-header__logo" href="https://antwerpen.be" target="_blank">
						<img src="${server.root()}resources/images/astad.png">
					</a>
					<a class="o-header__logo descriptor" v-if="fullUrl" href="${server.root()}">
						<img :src="fullUrl">
					</a>
				</div>
			</div>
		</div>
	</div>	
</template>
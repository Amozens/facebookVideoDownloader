package com.video.facevid.app.service.model

import com.google.gson.annotations.SerializedName

data class WebResponse(

	@field:SerializedName("data")
	val data: List<DataItem> = arrayListOf(),

	@field:SerializedName("js_cb_tag")
	val jsCbTag: String? = null
)

data class DataItem(

	@field:SerializedName("isLive")
	val isLive: String? = null,

	@field:SerializedName("videoURL")
	val videoURL: String? = null,

	@field:SerializedName("thumb")
	val thumb: String? = null,

	@field:SerializedName("name")
	val name: String? = null,

	@field:SerializedName("width")
	val width: Int? = null,

	@field:SerializedName("from")
	val from: String? = null,

	@field:SerializedName("videoID")
	val videoID: String? = null
)

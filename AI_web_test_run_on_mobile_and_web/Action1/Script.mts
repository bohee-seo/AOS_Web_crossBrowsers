Browser("Advantage Shopping").Maximize
AIUtil.SetContext Browser("Advantage Shopping")
browserType = Datatable.value("BrowserType",  "Global")

If browserType = "mobile" Then
	AIUtil.SetContext Device("micclass:=Device")
	AIUtil("hamburger_menu").Click
End If

AIUtil("profile").Highlight
AIUtil("profile").Click
AIUtil("input", "Username").Highlight
AIUtil("input", "Username").Type "aidemo"
AIUtil("input", "Username").Click
AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "SIGN IN").Highlight
AIUtil("button", "SIGN IN").Click

If browserType = "mobile"  Then
	AIUtil("hamburger_menu").Click
End If
AIUtil("profile").Highlight
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click



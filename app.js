(function () {
  "use strict";

  var PROPOSAL_BOT_IDML_BASE_FILES = {
  "designmap.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<?aid style=\"50\" type=\"document\" readerVersion=\"6.0\" featureSet=\"257\" product=\"7.5(142)\" ?>\n<Document xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\" Self=\"d\" StoryList=\"ue4 u102 u11b u139 u9c\" ZeroPoint=\"0 0\" ActiveLayer=\"ub3\" CMYKProfile=\"$ID/\" RGBProfile=\"$ID/\" SolidColorIntent=\"UseColorSettings\" AfterBlendingIntent=\"UseColorSettings\" DefaultImageIntent=\"UseColorSettings\" RGBPolicy=\"ColorPolicyOff\" CMYKPolicy=\"ColorPolicyOff\" AccurateLABSpots=\"false\">\n\t<Language Self=\"Language/$ID/[No Language]\" Name=\"$ID/[No Language]\" SingleQuotes=\"&apos;&apos;\" DoubleQuotes=\"&quot;&quot;\" PrimaryLanguageName=\"$ID/[No Language]\" SublanguageName=\"$ID/[No Language]\" Id=\"0\" HyphenationVendor=\"$ID/\" SpellingVendor=\"$ID/\"/>\n\t<Language Self=\"Language/$ID/English%3a USA\" Name=\"$ID/English: USA\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/English\" SublanguageName=\"$ID/USA\" Id=\"269\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/English%3a USA Medical\" Name=\"$ID/English: USA Medical\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/English\" SublanguageName=\"$ID/USA Medical\" Id=\"269\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/English%3a USA Legal\" Name=\"$ID/English: USA Legal\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/English\" SublanguageName=\"$ID/USA Legal\" Id=\"269\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/French\" Name=\"$ID/French\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/French\" SublanguageName=\"$ID/\" Id=\"274\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Spanish%3a Castilian\" Name=\"$ID/Spanish: Castilian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Spanish\" SublanguageName=\"$ID/Castilian\" Id=\"294\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Italian\" Name=\"$ID/Italian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Italian\" SublanguageName=\"$ID/\" Id=\"281\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/English%3a UK\" Name=\"$ID/English: UK\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/English\" SublanguageName=\"$ID/UK\" Id=\"525\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Swedish\" Name=\"$ID/Swedish\" SingleQuotes=\"\u2019\u2019\" DoubleQuotes=\"\u201d\u201d\" PrimaryLanguageName=\"$ID/Swedish\" SublanguageName=\"$ID/\" Id=\"295\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Danish\" Name=\"$ID/Danish\" SingleQuotes=\"\u2019\u2019\" DoubleQuotes=\"\u201d\u201d\" PrimaryLanguageName=\"$ID/Danish\" SublanguageName=\"$ID/\" Id=\"267\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Norwegian%3a Bokmal\" Name=\"$ID/Norwegian: Bokmal\" SingleQuotes=\"\u2019\u2019\" DoubleQuotes=\"\u201d\u201d\" PrimaryLanguageName=\"$ID/Norwegian\" SublanguageName=\"$ID/Bokmal\" Id=\"286\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Portuguese\" Name=\"$ID/Portuguese\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Portuguese\" SublanguageName=\"$ID/\" Id=\"288\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Portuguese%3a Brazilian\" Name=\"$ID/Portuguese: Brazilian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Portuguese\" SublanguageName=\"$ID/Brazilian\" Id=\"544\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/French%3a Canadian\" Name=\"$ID/French: Canadian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/French\" SublanguageName=\"$ID/Canadian\" Id=\"786\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Norwegian%3a Nynorsk\" Name=\"$ID/Norwegian: Nynorsk\" SingleQuotes=\"\u2019\u2019\" DoubleQuotes=\"\u201d\u201d\" PrimaryLanguageName=\"$ID/Norwegian\" SublanguageName=\"$ID/Nynorsk\" Id=\"542\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Finnish\" Name=\"$ID/Finnish\" SingleQuotes=\"\u2019\u2019\" DoubleQuotes=\"\u201d\u201d\" PrimaryLanguageName=\"$ID/Finnish\" SublanguageName=\"$ID/\" Id=\"273\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Catalan\" Name=\"$ID/Catalan\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Catalan\" SublanguageName=\"$ID/\" Id=\"263\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Russian\" Name=\"$ID/Russian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/Russian\" SublanguageName=\"$ID/\" Id=\"290\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/Bulgarian\" Name=\"$ID/Bulgarian\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/Bulgarian\" SublanguageName=\"$ID/\" Id=\"261\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Czech\" Name=\"$ID/Czech\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/Czech\" SublanguageName=\"$ID/\" Id=\"266\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/Polish\" Name=\"$ID/Polish\" SingleQuotes=\"\u201a\u2019\" DoubleQuotes=\"\u201e\u201d\" PrimaryLanguageName=\"$ID/Polish\" SublanguageName=\"$ID/\" Id=\"287\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/Romanian\" Name=\"$ID/Romanian\" SingleQuotes=\"\u201a\u2019\" DoubleQuotes=\"\u201e\u201d\" PrimaryLanguageName=\"$ID/Romanian\" SublanguageName=\"$ID/\" Id=\"289\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Greek\" Name=\"$ID/Greek\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/Greek\" SublanguageName=\"$ID/\" Id=\"276\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/Turkish\" Name=\"$ID/Turkish\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Turkish\" SublanguageName=\"$ID/\" Id=\"297\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Hungarian\" Name=\"$ID/Hungarian\" SingleQuotes=\"\u201a\u2019\" DoubleQuotes=\"\u201e\u201d\" PrimaryLanguageName=\"$ID/Hungarian\" SublanguageName=\"$ID/\" Id=\"278\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/English%3a Canadian\" Name=\"$ID/English: Canadian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/English\" SublanguageName=\"$ID/Canadian\" Id=\"1037\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Slovak\" Name=\"$ID/Slovak\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/Slovak\" SublanguageName=\"$ID/\" Id=\"291\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"WinSoft\"/>\n\t<Language Self=\"Language/$ID/Croatian\" Name=\"$ID/Croatian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Croatian\" SublanguageName=\"$ID/\" Id=\"265\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Estonian\" Name=\"$ID/Estonian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Estonian\" SublanguageName=\"$ID/\" Id=\"270\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Latvian\" Name=\"$ID/Latvian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Latvian\" SublanguageName=\"$ID/\" Id=\"284\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Lithuanian\" Name=\"$ID/Lithuanian\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/Lithuanian\" SublanguageName=\"$ID/\" Id=\"285\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Slovenian\" Name=\"$ID/Slovenian\" SingleQuotes=\"&apos;&apos;\" DoubleQuotes=\"\u00bb\u00ab\" PrimaryLanguageName=\"$ID/Slovenian\" SublanguageName=\"$ID/\" Id=\"292\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/German%3a Traditional\" Name=\"$ID/German: Traditional\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/German\" SublanguageName=\"$ID/Traditional\" Id=\"275\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/German%3a Reformed\" Name=\"$ID/German: Reformed\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/German\" SublanguageName=\"$ID/Reformed\" Id=\"275\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/de_DE_2006\" Name=\"$ID/de_DE_2006\" SingleQuotes=\"\u201a\u2018\" DoubleQuotes=\"\u201e\u201c\" PrimaryLanguageName=\"$ID/de_DE_2006\" SublanguageName=\"$ID/\" Id=\"275\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Dutch\" Name=\"$ID/Dutch\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Dutch\" SublanguageName=\"$ID/\" Id=\"268\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/nl_NL_2005\" Name=\"$ID/nl_NL_2005\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/nl_NL_2005\" SublanguageName=\"$ID/\" Id=\"268\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/German%3a Swiss\" Name=\"$ID/German: Swiss\" SingleQuotes=\"\u2039\u203a\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/German\" SublanguageName=\"$ID/Swiss\" Id=\"531\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/de_CH_2006\" Name=\"$ID/de_CH_2006\" SingleQuotes=\"\u2039\u203a\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/de_CH_2006\" SublanguageName=\"$ID/\" Id=\"531\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Portuguese%3a Orthographic Agreement\" Name=\"$ID/Portuguese: Orthographic Agreement\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u201c\u201d\" PrimaryLanguageName=\"$ID/Portuguese\" SublanguageName=\"$ID/Orthographic Agreement\" Id=\"544\" HyphenationVendor=\"Proximity\" SpellingVendor=\"Proximity\"/>\n\t<Language Self=\"Language/$ID/Ukrainian\" Name=\"$ID/Ukrainian\" SingleQuotes=\"\u2018\u2019\" DoubleQuotes=\"\u00ab\u00bb\" PrimaryLanguageName=\"$ID/Ukrainian\" SublanguageName=\"$ID/\" Id=\"298\" HyphenationVendor=\"WinSoft\" SpellingVendor=\"Hunspell\"/>\n\t<idPkg:Graphic src=\"Resources/Graphic.xml\"/>\n\t<idPkg:Fonts src=\"Resources/Fonts.xml\"/>\n\t<idPkg:Styles src=\"Resources/Styles.xml\"/>\n\t<NumberingList Self=\"NumberingList/$ID/[Default]\" Name=\"$ID/[Default]\" ContinueNumbersAcrossStories=\"false\" ContinueNumbersAcrossDocuments=\"false\"/>\n\t<NamedGrid Self=\"NamedGrid/$ID/[Page Grid]\" Name=\"$ID/[Page Grid]\">\n\t\t<GridDataInformation FontStyle=\"Regular\" PointSize=\"12\" CharacterAki=\"0\" LineAki=\"9\" HorizontalScale=\"100\" VerticalScale=\"100\" LineAlignment=\"LeftOrTopLineJustify\" GridAlignment=\"AlignEmCenter\" CharacterAlignment=\"AlignEmCenter\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</GridDataInformation>\n\t</NamedGrid>\n\t<idPkg:Preferences src=\"Resources/Preferences.xml\"/>\n\t<LinkedStoryOption UpdateWhileSaving=\"false\" WarnOnUpdateOfEditedStory=\"true\" RemoveForcedLineBreaks=\"false\"/>\n\t<TaggedPDFPreference StructureOrder=\"UseXMLStructure\"/>\n\t<WatermarkPreference WatermarkVisibility=\"false\" WatermarkDoPrint=\"false\" WatermarkDrawInBack=\"true\" WatermarkText=\"\" WatermarkFontFamily=\"Minion Pro\" WatermarkFontStyle=\"Regular\" WatermarkFontPointSize=\"48\" WatermarkOpacity=\"50\" WatermarkRotation=\"0\" WatermarkHorizontalPosition=\"WatermarkHCenter\" WatermarkHorizontalOffset=\"0\" WatermarkVerticalPosition=\"WatermarkVCenter\" WatermarkVerticalOffset=\"0\">\n\t\t<Properties>\n\t\t\t<WatermarkFontColor type=\"enumeration\">Black</WatermarkFontColor>\n\t\t</Properties>\n\t</WatermarkPreference>\n\t<ConditionalTextPreference ShowConditionIndicators=\"ShowIndicators\" ActiveConditionSet=\"n\"/>\n\t<TextVariable Self=\"dTextVariablen&lt;?AID 001b?&gt;TV XRefChapterNumber\" Name=\"&lt;?AID 001b?&gt;TV XRefChapterNumber\" VariableType=\"XrefChapterNumberType\"/>\n\t<TextVariable Self=\"dTextVariablen&lt;?AID 001b?&gt;TV XRefPageNumber\" Name=\"&lt;?AID 001b?&gt;TV XRefPageNumber\" VariableType=\"XrefPageNumberType\"/>\n\t<TextVariable Self=\"dTextVariablenChapter Number\" Name=\"Chapter Number\" VariableType=\"ChapterNumberType\">\n\t\t<ChapterNumberVariablePreference TextBefore=\"\" Format=\"Current\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenCreation Date\" Name=\"Creation Date\" VariableType=\"CreationDateType\">\n\t\t<DateVariablePreference TextBefore=\"\" Format=\"dd/MM/yy\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenFile Name\" Name=\"File Name\" VariableType=\"FileNameType\">\n\t\t<FileNameVariablePreference TextBefore=\"\" IncludePath=\"false\" IncludeExtension=\"false\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenImage Name\" Name=\"Image Name\" VariableType=\"LiveCaptionType\">\n\t\t<CaptionMetadataVariablePreference TextBefore=\"\" MetadataProviderName=\"$ID/#LinkInfoNameStr\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenLast Page Number\" Name=\"Last Page Number\" VariableType=\"LastPageNumberType\">\n\t\t<PageNumberVariablePreference TextBefore=\"\" Format=\"Current\" TextAfter=\"\" Scope=\"SectionScope\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenModification Date\" Name=\"Modification Date\" VariableType=\"ModificationDateType\">\n\t\t<DateVariablePreference TextBefore=\"\" Format=\"d MMMM yyyy h:mm aa\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenOutput Date\" Name=\"Output Date\" VariableType=\"OutputDateType\">\n\t\t<DateVariablePreference TextBefore=\"\" Format=\"dd/MM/yy\" TextAfter=\"\"/>\n\t</TextVariable>\n\t<TextVariable Self=\"dTextVariablenRunning Header\" Name=\"Running Header\" VariableType=\"MatchParagraphStyleType\">\n\t\t<MatchParagraphStylePreference TextBefore=\"\" TextAfter=\"\" AppliedParagraphStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" SearchStrategy=\"FirstOnPage\" ChangeCase=\"None\" DeleteEndPunctuation=\"false\"/>\n\t</TextVariable>\n\t<idPkg:Tags src=\"XML/Tags.xml\"/>\n\t<Layer Self=\"ub3\" Name=\"Layer 1\" Visible=\"true\" Locked=\"false\" IgnoreWrap=\"false\" ShowGuides=\"true\" LockGuides=\"false\" UI=\"true\" Expendable=\"true\" Printable=\"true\">\n\t\t<Properties>\n\t\t\t<LayerColor type=\"enumeration\">LightBlue</LayerColor>\n\t\t</Properties>\n\t</Layer>\n\t<idPkg:MasterSpread src=\"MasterSpreads/MasterSpread_uca.xml\"/>\n\t<idPkg:Spread src=\"Spreads/Spread_ub6.xml\"/>\n\t<idPkg:Spread src=\"Spreads/Spread_ubc.xml\"/>\n\t<idPkg:Spread src=\"Spreads/Spread_uc3.xml\"/>\n\t<Section Self=\"uc9\" Length=\"4\" Name=\"\" ContinueNumbering=\"true\" IncludeSectionPrefix=\"false\" Marker=\"\" PageStart=\"ubb\" SectionPrefix=\"\">\n\t\t<Properties>\n\t\t\t<PageNumberStyle type=\"enumeration\">Arabic</PageNumberStyle>\n\t\t</Properties>\n\t</Section>\n\t<DocumentUser Self=\"dDocumentUser0\" UserName=\"$ID/Unknown User Name\">\n\t\t<Properties>\n\t\t\t<UserColor type=\"enumeration\">Gold</UserColor>\n\t\t</Properties>\n\t</DocumentUser>\n\t<CrossReferenceFormat Self=\"u8a\" Name=\"Full Paragraph &amp; Page Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8aBuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8aBuildingBlock1\" BlockType=\"FullParagraphBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8aBuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot; on page \" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8aBuildingBlock3\" BlockType=\"PageNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u8b\" Name=\"Full Paragraph\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8bBuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8bBuildingBlock1\" BlockType=\"FullParagraphBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8bBuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u8c\" Name=\"Paragraph Text &amp; Page Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8cBuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8cBuildingBlock1\" BlockType=\"ParagraphTextBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8cBuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot; on page \" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8cBuildingBlock3\" BlockType=\"PageNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u8d\" Name=\"Paragraph Text\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8dBuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8dBuildingBlock1\" BlockType=\"ParagraphTextBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8dBuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u8e\" Name=\"Paragraph Number &amp; Page Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8eBuildingBlock0\" BlockType=\"ParagraphNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8eBuildingBlock1\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\" on page \" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u8eBuildingBlock2\" BlockType=\"PageNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u8f\" Name=\"Paragraph Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u8fBuildingBlock0\" BlockType=\"ParagraphNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u90\" Name=\"Text Anchor Name &amp; Page Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u90BuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u90BuildingBlock1\" BlockType=\"BookmarkNameBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u90BuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot; on page \" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u90BuildingBlock3\" BlockType=\"PageNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u91\" Name=\"Text Anchor Name\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u91BuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u91BuildingBlock1\" BlockType=\"BookmarkNameBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u91BuildingBlock2\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"&quot;\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<CrossReferenceFormat Self=\"u92\" Name=\"Page Number\" AppliedCharacterStyle=\"n\">\n\t\t<BuildingBlock Self=\"u92BuildingBlock0\" BlockType=\"CustomStringBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"page \" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t\t<BuildingBlock Self=\"u92BuildingBlock1\" BlockType=\"PageNumberBuildingBlock\" AppliedCharacterStyle=\"n\" CustomText=\"$ID/\" AppliedDelimiter=\"$ID/\" IncludeDelimiter=\"false\"/>\n\t</CrossReferenceFormat>\n\t<idPkg:BackingStory src=\"XML/BackingStory.xml\"/>\n\t<idPkg:Story src=\"Stories/Story_u139.xml\"/>\n\t<idPkg:Story src=\"Stories/Story_u11b.xml\"/>\n\t<idPkg:Story src=\"Stories/Story_u102.xml\"/>\n\t<idPkg:Story src=\"Stories/Story_ue4.xml\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Symbol\" Name=\"$ID/kIndexGroup_Symbol\" Include=\"true\" Priority=\"0\" HeaderType=\"Nothing\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Alphabet\" Name=\"$ID/kIndexGroup_Alphabet\" Include=\"true\" Priority=\"1\" HeaderType=\"BasicLatin\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Numeric\" Name=\"$ID/kIndexGroup_Numeric\" Include=\"false\" Priority=\"2\" HeaderType=\"Nothing\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkWRIndexGroup_GreekAlphabet\" Name=\"$ID/kWRIndexGroup_GreekAlphabet\" Include=\"false\" Priority=\"3\" HeaderType=\"Nothing\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkWRIndexGroup_CyrillicAlphabet\" Name=\"$ID/kWRIndexGroup_CyrillicAlphabet\" Include=\"false\" Priority=\"4\" HeaderType=\"Russian\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Kana\" Name=\"$ID/kIndexGroup_Kana\" Include=\"false\" Priority=\"5\" HeaderType=\"HiraganaAll\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Chinese\" Name=\"$ID/kIndexGroup_Chinese\" Include=\"false\" Priority=\"6\" HeaderType=\"ChinesePinyin\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkIndexGroup_Korean\" Name=\"$ID/kIndexGroup_Korean\" Include=\"false\" Priority=\"7\" HeaderType=\"KoreanConsonant\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkWRIndexGroup_ArabicAlphabet\" Name=\"$ID/kWRIndexGroup_ArabicAlphabet\" Include=\"false\" Priority=\"8\" HeaderType=\"Nothing\"/>\n\t<IndexingSortOption Self=\"dIndexingSortOptionnkWRIndexGroup_HebrewAlphabet\" Name=\"$ID/kWRIndexGroup_HebrewAlphabet\" Include=\"false\" Priority=\"9\" HeaderType=\"Nothing\"/>\n\t<ABullet Self=\"dABullet0\" CharacterType=\"UnicodeOnly\" CharacterValue=\"8226\">\n\t\t<Properties>\n\t\t\t<BulletsFont type=\"string\">$ID/</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"string\">$ID/</BulletsFontStyle>\n\t\t</Properties>\n\t</ABullet>\n\t<ABullet Self=\"dABullet1\" CharacterType=\"UnicodeOnly\" CharacterValue=\"42\">\n\t\t<Properties>\n\t\t\t<BulletsFont type=\"string\">$ID/</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"string\">$ID/</BulletsFontStyle>\n\t\t</Properties>\n\t</ABullet>\n\t<ABullet Self=\"dABullet2\" CharacterType=\"UnicodeOnly\" CharacterValue=\"9674\">\n\t\t<Properties>\n\t\t\t<BulletsFont type=\"string\">$ID/</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"string\">$ID/</BulletsFontStyle>\n\t\t</Properties>\n\t</ABullet>\n\t<ABullet Self=\"dABullet3\" CharacterType=\"UnicodeWithFont\" CharacterValue=\"187\">\n\t\t<Properties>\n\t\t\t<BulletsFont type=\"string\">Myriad Pro</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"string\">$ID/Regular</BulletsFontStyle>\n\t\t</Properties>\n\t</ABullet>\n\t<ABullet Self=\"dABullet4\" CharacterType=\"GlyphWithFont\" CharacterValue=\"503\">\n\t\t<Properties>\n\t\t\t<BulletsFont type=\"string\">Minion Pro</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"string\">$ID/Regular</BulletsFontStyle>\n\t\t</Properties>\n\t</ABullet>\n\t<Assignment Self=\"ud1\" Name=\"$ID/UnassignedInCopy\" UserName=\"$ID/\" ExportOptions=\"AssignedSpreads\" IncludeLinksWhenPackage=\"true\" FilePath=\"$ID/\">\n\t\t<Properties>\n\t\t\t<FrameColor type=\"enumeration\">Nothing</FrameColor>\n\t\t</Properties>\n\t</Assignment>\n</Document>\n",
  "META-INF/container.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<container version=\"1.0\" xmlns=\"urn:oasis:names:tc:opendocument:xmlns:container\">\n\t<rootfiles>\n\t\t<rootfile full-path=\"designmap.xml\" media-type=\"text/xml\">\n\t\t</rootfile>\n\t</rootfiles>\n</container>\n",
  "META-INF/metadata.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<?xpacket begin=\"\ufeff\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.2-c003 61.141987, 2011/02/22-12:03:51        \">\n   <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n      <rdf:Description rdf:about=\"\"\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n         <dc:format>application/x-indesign</dc:format>\n      </rdf:Description>\n      <rdf:Description rdf:about=\"\"\n            xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\">\n         <xmp:CreateDate>2012-03-14T14:14:53+01:00</xmp:CreateDate>\n         <xmp:MetadataDate>2012-03-14T16:05:17+01:00</xmp:MetadataDate>\n         <xmp:ModifyDate>2012-03-14T16:05:17+01:00</xmp:ModifyDate>\n         <xmp:CreatorTool>Adobe InDesign 7.5</xmp:CreatorTool>\n      </rdf:Description>\n      <rdf:Description rdf:about=\"\"\n            xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\"\n            xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\">\n         <xmpMM:InstanceID>xmp.iid:FA7F11740720681188C6DF1D8A35579E</xmpMM:InstanceID>\n         <xmpMM:DocumentID>xmp.did:F77F11740720681188C6DF1D8A35579E</xmpMM:DocumentID>\n         <xmpMM:OriginalDocumentID>xmp.did:F77F11740720681188C6DF1D8A35579E</xmpMM:OriginalDocumentID>\n         <xmpMM:History>\n            <rdf:Seq>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>created</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:F77F11740720681188C6DF1D8A35579E</stEvt:instanceID>\n                  <stEvt:when>2012-03-14T14:14:53+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe InDesign 7.5</stEvt:softwareAgent>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>saved</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:F87F11740720681188C6DF1D8A35579E</stEvt:instanceID>\n                  <stEvt:when>2012-03-14T14:17:50+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe InDesign 7.5</stEvt:softwareAgent>\n                  <stEvt:changed>/;/metadata</stEvt:changed>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>saved</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:F97F11740720681188C6DF1D8A35579E</stEvt:instanceID>\n                  <stEvt:when>2012-03-14T14:17:50+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe InDesign 7.5</stEvt:softwareAgent>\n                  <stEvt:changed>/metadata</stEvt:changed>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>saved</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:FA7F11740720681188C6DF1D8A35579E</stEvt:instanceID>\n                  <stEvt:when>2012-03-14T16:05:17+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe InDesign 7.5</stEvt:softwareAgent>\n                  <stEvt:changed>/;/metadata</stEvt:changed>\n               </rdf:li>\n            </rdf:Seq>\n         </xmpMM:History>\n         <xmpMM:RenditionClass>default</xmpMM:RenditionClass>\n      </rdf:Description>\n      <rdf:Description rdf:about=\"\"\n            xmlns:idPriv=\"http://ns.adobe.com/xmp/InDesign/private\">\n         <idPriv:DocChangeCount>445</idPriv:DocChangeCount>\n      </rdf:Description>\n      <rdf:Description rdf:about=\"\"\n            xmlns:xmpTPg=\"http://ns.adobe.com/xap/1.0/t/pg/\"\n            xmlns:xmpG=\"http://ns.adobe.com/xap/1.0/g/\"\n            xmlns:stFnt=\"http://ns.adobe.com/xap/1.0/sType/Font#\">\n         <xmpTPg:Colorants>\n            <rdf:Seq>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <xmpG:swatchName>Black</xmpG:swatchName>\n                  <xmpG:mode>CMYK</xmpG:mode>\n                  <xmpG:type>Process</xmpG:type>\n                  <xmpG:cyan>0</xmpG:cyan>\n                  <xmpG:magenta>0</xmpG:magenta>\n                  <xmpG:yellow>0</xmpG:yellow>\n                  <xmpG:black>100</xmpG:black>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <xmpG:swatchName>Paper</xmpG:swatchName>\n                  <xmpG:mode>CMYK</xmpG:mode>\n                  <xmpG:type>Process</xmpG:type>\n                  <xmpG:cyan>0</xmpG:cyan>\n                  <xmpG:magenta>0</xmpG:magenta>\n                  <xmpG:yellow>0</xmpG:yellow>\n                  <xmpG:black>0</xmpG:black>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <xmpG:swatchName>Registration</xmpG:swatchName>\n                  <xmpG:mode>CMYK</xmpG:mode>\n                  <xmpG:type>Process</xmpG:type>\n                  <xmpG:cyan>100</xmpG:cyan>\n                  <xmpG:magenta>100</xmpG:magenta>\n                  <xmpG:yellow>100</xmpG:yellow>\n                  <xmpG:black>100</xmpG:black>\n               </rdf:li>\n            </rdf:Seq>\n         </xmpTPg:Colorants>\n         <xmpTPg:Fonts>\n            <rdf:Bag>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-BoldCn</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold Cond</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-BoldCnVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-BoldCn.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-BoldCnIt</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold Cond Italic</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-BoldCnItVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-BoldCnIt.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-Regular</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Regular</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-RegularVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-Regular.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-It</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Italic</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-ItVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-It.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-Medium</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Medium</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-MediumVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-Medium.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-MediumIt</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Medium Italic</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-MediumItVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-MediumIt.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-Semibold</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Semibold</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-SemiboldVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-Semibold.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-SemiboldIt</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Semibold Italic</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-SemiboldItVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-SemiboldIt.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-Bold</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-BoldVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-Bold.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>MinionPro-BoldIt</stFnt:fontName>\n                  <stFnt:fontFamily>Minion Pro</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold Italic</stFnt:fontFace>\n                  <stFnt:fontType>OpenTypeCFF</stFnt:fontType>\n                  <stFnt:versionString>MinionPro-BoldItVersion 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>MinionPro-BoldIt.otf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>Vollkorn-Italic</stFnt:fontName>\n                  <stFnt:fontFamily>Vollkorn</stFnt:fontFamily>\n                  <stFnt:fontFace>Italic</stFnt:fontFace>\n                  <stFnt:fontType>TrueType</stFnt:fontType>\n                  <stFnt:versionString>Vollkorn-ItalicVersion 2.001</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>Vollkorn-Italic.ttf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>Vollkorn-Regular</stFnt:fontName>\n                  <stFnt:fontFamily>Vollkorn</stFnt:fontFamily>\n                  <stFnt:fontFace>Regular</stFnt:fontFace>\n                  <stFnt:fontType>TrueType</stFnt:fontType>\n                  <stFnt:versionString>Vollkorn-RegularVersion 2.001</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>Vollkorn-Regular.ttf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>Vollkorn-Bold</stFnt:fontName>\n                  <stFnt:fontFamily>Vollkorn</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold</stFnt:fontFace>\n                  <stFnt:fontType>TrueType</stFnt:fontType>\n                  <stFnt:versionString>Vollkorn-BoldVersion 2.001</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>Vollkorn-Bold.ttf</stFnt:fontFileName>\n               </rdf:li>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stFnt:fontName>Vollkorn-BoldItalic</stFnt:fontName>\n                  <stFnt:fontFamily>Vollkorn</stFnt:fontFamily>\n                  <stFnt:fontFace>Bold Italic</stFnt:fontFace>\n                  <stFnt:fontType>TrueType</stFnt:fontType>\n                  <stFnt:versionString>Vollkorn-BoldItalicVersion 2.001</stFnt:versionString>\n                  <stFnt:composite>false</stFnt:composite>\n                  <stFnt:fontFileName>Vollkorn-BoldItalic.ttf</stFnt:fontFileName>\n               </rdf:li>\n            </rdf:Bag>\n         </xmpTPg:Fonts>\n      </rdf:Description>\n   </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>",
  "Resources/Graphic.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:Graphic xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<Color Self=\"Color/Black\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 0 100\" ColorOverride=\"Specialblack\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Black\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=0 M=0 Y=100 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 100 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=0 M=0 Y=100 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=0 M=100 Y=0 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 100 0 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=0 M=100 Y=0 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=100 M=0 Y=0 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"100 0 0 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=100 M=0 Y=0 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=100 M=90 Y=10 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"100 90 10 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=100 M=90 Y=10 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=15 M=100 Y=100 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"15 100 100 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=15 M=100 Y=100 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/C=75 M=5 Y=100 K=0\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"75 5 100 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"C=75 M=5 Y=100 K=0\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/Cyan\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"100 0 0 0\" ColorOverride=\"Hiddenreserved\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Cyan\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"false\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/Magenta\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 100 0 0\" ColorOverride=\"Hiddenreserved\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Magenta\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"false\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/Paper\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 0 0\" ColorOverride=\"Specialpaper\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Paper\" ColorEditable=\"true\" ColorRemovable=\"false\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/Registration\" Model=\"Registration\" Space=\"CMYK\" ColorValue=\"100 100 100 100\" ColorOverride=\"Specialregistration\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Registration\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/Yellow\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 100 0\" ColorOverride=\"Hiddenreserved\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"Yellow\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"false\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/u7f\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 0 100\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"$ID/\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"false\" SwatchCreatorID=\"7937\"/>\n\t<Color Self=\"Color/u81\" Model=\"Process\" Space=\"CMYK\" ColorValue=\"0 0 0 0\" ColorOverride=\"Normal\" AlternateSpace=\"NoAlternateColor\" AlternateColorValue=\"\" Name=\"$ID/\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"false\" SwatchCreatorID=\"7937\"/>\n\t<Ink Self=\"Ink/$ID/Process Cyan\" Name=\"$ID/Process Cyan\" Angle=\"75\" ConvertToProcess=\"false\" Frequency=\"70\" NeutralDensity=\"0.61\" PrintInk=\"true\" TrapOrder=\"1\" InkType=\"Normal\"/>\n\t<Ink Self=\"Ink/$ID/Process Magenta\" Name=\"$ID/Process Magenta\" Angle=\"15\" ConvertToProcess=\"false\" Frequency=\"70\" NeutralDensity=\"0.76\" PrintInk=\"true\" TrapOrder=\"2\" InkType=\"Normal\"/>\n\t<Ink Self=\"Ink/$ID/Process Yellow\" Name=\"$ID/Process Yellow\" Angle=\"0\" ConvertToProcess=\"false\" Frequency=\"70\" NeutralDensity=\"0.16\" PrintInk=\"true\" TrapOrder=\"3\" InkType=\"Normal\"/>\n\t<Ink Self=\"Ink/$ID/Process Black\" Name=\"$ID/Process Black\" Angle=\"45\" ConvertToProcess=\"false\" Frequency=\"70\" NeutralDensity=\"1.7\" PrintInk=\"true\" TrapOrder=\"4\" InkType=\"Normal\"/>\n\t<PastedSmoothShade Self=\"PastedSmoothShade/u82\" ContentsVersion=\"0\" ContentsType=\"ConstantShade\" SpotColorList=\"\" ContentsEncoding=\"Ascii64Encoding\" ContentsMatrix=\"1 0 0 1 0 0\" Name=\"$ID/\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"false\" SwatchCreatorID=\"7937\">\n\t\t<Properties>\n\t\t\t<Contents><![CDATA[AAAAAUBv4AAAAAAAAAAAAAAAAAAAAAAAAAAAAA==]]></Contents>\n\t\t</Properties>\n\t</PastedSmoothShade>\n\t<Swatch Self=\"Swatch/None\" Name=\"None\" ColorEditable=\"false\" ColorRemovable=\"false\" Visible=\"true\" SwatchCreatorID=\"7937\"/>\n\t<Gradient Self=\"Gradient/u80\" Type=\"Linear\" Name=\"$ID/\" ColorEditable=\"true\" ColorRemovable=\"true\" Visible=\"false\" SwatchCreatorID=\"7937\">\n\t\t<GradientStop Self=\"u80GradientStop0\" StopColor=\"Color/u81\" Location=\"0\"/>\n\t\t<GradientStop Self=\"u80GradientStop1\" StopColor=\"Color/Black\" Location=\"100\" Midpoint=\"50\"/>\n\t</Gradient>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Triple_Stroke\" Name=\"$ID/Triple_Stroke\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThickThinThick\" Name=\"$ID/ThickThinThick\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThinThickThin\" Name=\"$ID/ThinThickThin\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThickThick\" Name=\"$ID/ThickThick\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThickThin\" Name=\"$ID/ThickThin\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThinThick\" Name=\"$ID/ThinThick\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/ThinThin\" Name=\"$ID/ThinThin\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Japanese Dots\" Name=\"$ID/Japanese Dots\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/White Diamond\" Name=\"$ID/White Diamond\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Left Slant Hash\" Name=\"$ID/Left Slant Hash\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Right Slant Hash\" Name=\"$ID/Right Slant Hash\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Straight Hash\" Name=\"$ID/Straight Hash\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Wavy\" Name=\"$ID/Wavy\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Canned Dotted\" Name=\"$ID/Canned Dotted\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Canned Dashed 3x2\" Name=\"$ID/Canned Dashed 3x2\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Canned Dashed 4x4\" Name=\"$ID/Canned Dashed 4x4\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Dashed\" Name=\"$ID/Dashed\"/>\n\t<StrokeStyle Self=\"StrokeStyle/$ID/Solid\" Name=\"$ID/Solid\"/>\n</idPkg:Graphic>",
  "Resources/Fonts.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:Fonts xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<FontFamily Self=\"di3e\" Name=\"Minion Pro\">\n\t\t<Font Self=\"di3eFontnMinion Pro Bold Cond\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Bold Cond\" PostScriptName=\"MinionPro-BoldCn\" Status=\"Installed\" FontStyleName=\"Bold Cond\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Bold Cond\" FullNameNative=\"Minion Pro Bold Cond\" FontStyleNameNative=\"Bold Cond\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Bold Cond Italic\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Bold Cond Italic\" PostScriptName=\"MinionPro-BoldCnIt\" Status=\"Installed\" FontStyleName=\"Bold Cond Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Bold Cond Italic\" FullNameNative=\"Minion Pro Bold Cond Italic\" FontStyleNameNative=\"Bold Cond Italic\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Regular\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Regular\" PostScriptName=\"MinionPro-Regular\" Status=\"Installed\" FontStyleName=\"Regular\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro\" FullNameNative=\"Minion Pro\" FontStyleNameNative=\"Regular\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Italic\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Italic\" PostScriptName=\"MinionPro-It\" Status=\"Installed\" FontStyleName=\"Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Italic\" FullNameNative=\"Minion Pro Italic\" FontStyleNameNative=\"Italic\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Medium\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Medium\" PostScriptName=\"MinionPro-Medium\" Status=\"Installed\" FontStyleName=\"Medium\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Medium\" FullNameNative=\"Minion Pro Medium\" FontStyleNameNative=\"Medium\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Medium Italic\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Medium Italic\" PostScriptName=\"MinionPro-MediumIt\" Status=\"Installed\" FontStyleName=\"Medium Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Medium Italic\" FullNameNative=\"Minion Pro Medium Italic\" FontStyleNameNative=\"Medium Italic\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Semibold\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Semibold\" PostScriptName=\"MinionPro-Semibold\" Status=\"Installed\" FontStyleName=\"Semibold\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Semibold\" FullNameNative=\"Minion Pro Semibold\" FontStyleNameNative=\"Semibold\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Semibold Italic\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Semibold Italic\" PostScriptName=\"MinionPro-SemiboldIt\" Status=\"Installed\" FontStyleName=\"Semibold Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Semibold Italic\" FullNameNative=\"Minion Pro Semibold Italic\" FontStyleNameNative=\"Semibold Italic\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Bold\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Bold\" PostScriptName=\"MinionPro-Bold\" Status=\"Installed\" FontStyleName=\"Bold\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Bold\" FullNameNative=\"Minion Pro Bold\" FontStyleNameNative=\"Bold\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di3eFontnMinion Pro Bold Italic\" FontFamily=\"Minion Pro\" Name=\"Minion Pro Bold Italic\" PostScriptName=\"MinionPro-BoldIt\" Status=\"Installed\" FontStyleName=\"Bold Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Minion Pro Bold Italic\" FullNameNative=\"Minion Pro Bold Italic\" FontStyleNameNative=\"Bold Italic\" PlatformName=\"$ID/\" Version=\"Version 2.068;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t</FontFamily>\n\t<FontFamily Self=\"di89\" Name=\"Myriad Pro\">\n\t\t<Font Self=\"di89FontnMyriad Pro Condensed\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Condensed\" PostScriptName=\"MyriadPro-Cond\" Status=\"Installed\" FontStyleName=\"Condensed\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Condensed\" FullNameNative=\"Myriad Pro Condensed\" FontStyleNameNative=\"Condensed\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Condensed Italic\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Condensed Italic\" PostScriptName=\"MyriadPro-CondIt\" Status=\"Installed\" FontStyleName=\"Condensed Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Condensed Italic\" FullNameNative=\"Myriad Pro Condensed Italic\" FontStyleNameNative=\"Condensed Italic\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Bold Condensed\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Bold Condensed\" PostScriptName=\"MyriadPro-BoldCond\" Status=\"Installed\" FontStyleName=\"Bold Condensed\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Bold Condensed\" FullNameNative=\"Myriad Pro Bold Condensed\" FontStyleNameNative=\"Bold Condensed\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Bold Condensed Italic\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Bold Condensed Italic\" PostScriptName=\"MyriadPro-BoldCondIt\" Status=\"Installed\" FontStyleName=\"Bold Condensed Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Bold Condensed Italic\" FullNameNative=\"Myriad Pro Bold Condensed Italic\" FontStyleNameNative=\"Bold Condensed Italic\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Regular\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Regular\" PostScriptName=\"MyriadPro-Regular\" Status=\"Installed\" FontStyleName=\"Regular\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro\" FullNameNative=\"Myriad Pro\" FontStyleNameNative=\"Regular\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Italic\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Italic\" PostScriptName=\"MyriadPro-It\" Status=\"Installed\" FontStyleName=\"Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Italic\" FullNameNative=\"Myriad Pro Italic\" FontStyleNameNative=\"Italic\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Semibold\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Semibold\" PostScriptName=\"MyriadPro-Semibold\" Status=\"Installed\" FontStyleName=\"Semibold\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Semibold\" FullNameNative=\"Myriad Pro Semibold\" FontStyleNameNative=\"Semibold\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Semibold Italic\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Semibold Italic\" PostScriptName=\"MyriadPro-SemiboldIt\" Status=\"Installed\" FontStyleName=\"Semibold Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Semibold Italic\" FullNameNative=\"Myriad Pro Semibold Italic\" FontStyleNameNative=\"Semibold Italic\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Bold\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Bold\" PostScriptName=\"MyriadPro-Bold\" Status=\"Installed\" FontStyleName=\"Bold\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Bold\" FullNameNative=\"Myriad Pro Bold\" FontStyleNameNative=\"Bold\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di89FontnMyriad Pro Bold Italic\" FontFamily=\"Myriad Pro\" Name=\"Myriad Pro Bold Italic\" PostScriptName=\"MyriadPro-BoldIt\" Status=\"Installed\" FontStyleName=\"Bold Italic\" FontType=\"OpenTypeCFF\" WritingScript=\"0\" FullName=\"Myriad Pro Bold Italic\" FullNameNative=\"Myriad Pro Bold Italic\" FontStyleNameNative=\"Bold Italic\" PlatformName=\"$ID/\" Version=\"Version 2.062;PS 2.000;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t</FontFamily>\n\t<FontFamily Self=\"di96\" Name=\"Kozuka Mincho Pro\">\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro EL\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro EL\" PostScriptName=\"KozMinPro-ExtraLight\" Status=\"Installed\" FontStyleName=\"EL\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro EL\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro EL\" FontStyleNameNative=\"EL\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro L\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro L\" PostScriptName=\"KozMinPro-Light\" Status=\"Installed\" FontStyleName=\"L\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro L\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro L\" FontStyleNameNative=\"L\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro R\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro R\" PostScriptName=\"KozMinPro-Regular\" Status=\"Installed\" FontStyleName=\"R\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro R\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro R\" FontStyleNameNative=\"R\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro M\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro M\" PostScriptName=\"KozMinPro-Medium\" Status=\"Installed\" FontStyleName=\"M\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro M\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro M\" FontStyleNameNative=\"M\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro B\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro B\" PostScriptName=\"KozMinPro-Bold\" Status=\"Installed\" FontStyleName=\"B\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro B\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro B\" FontStyleNameNative=\"B\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t\t<Font Self=\"di96FontnKozuka Mincho Pro H\" FontFamily=\"Kozuka Mincho Pro\" Name=\"Kozuka Mincho Pro H\" PostScriptName=\"KozMinPro-Heavy\" Status=\"Installed\" FontStyleName=\"H\" FontType=\"OpenTypeCID\" WritingScript=\"1\" FullName=\"Kozuka Mincho Pro H\" FullNameNative=\"\u5c0f\u585a\u660e\u671d Pro H\" FontStyleNameNative=\"H\" PlatformName=\"$ID/\" Version=\"Version 4.005;PS 4.003;hotconv 1.0.57;makeotf.lib2.0.21895\"/>\n\t</FontFamily>\n\t<FontFamily Self=\"difb\" Name=\"Vollkorn\">\n\t\t<Font Self=\"difbFontnVollkorn Italic\" FontFamily=\"Vollkorn\" Name=\"Vollkorn Italic\" PostScriptName=\"Vollkorn-Italic\" Status=\"Installed\" FontStyleName=\"Italic\" FontType=\"TrueType\" WritingScript=\"0\" FullName=\"Vollkorn Italic\" FullNameNative=\"Vollkorn Italic\" FontStyleNameNative=\"Italic\" PlatformName=\"$ID/\" Version=\"Version 2.001\"/>\n\t\t<Font Self=\"difbFontnVollkorn Regular\" FontFamily=\"Vollkorn\" Name=\"Vollkorn Regular\" PostScriptName=\"Vollkorn-Regular\" Status=\"Installed\" FontStyleName=\"Regular\" FontType=\"TrueType\" WritingScript=\"0\" FullName=\"Vollkorn Regular\" FullNameNative=\"Vollkorn Regular\" FontStyleNameNative=\"Regular\" PlatformName=\"$ID/\" Version=\"Version 2.001\"/>\n\t\t<Font Self=\"difbFontnVollkorn Bold\" FontFamily=\"Vollkorn\" Name=\"Vollkorn Bold\" PostScriptName=\"Vollkorn-Bold\" Status=\"Installed\" FontStyleName=\"Bold\" FontType=\"TrueType\" WritingScript=\"0\" FullName=\"Vollkorn Bold\" FullNameNative=\"Vollkorn Bold\" FontStyleNameNative=\"Bold\" PlatformName=\"$ID/\" Version=\"Version 2.001\"/>\n\t\t<Font Self=\"difbFontnVollkorn Bold Italic\" FontFamily=\"Vollkorn\" Name=\"Vollkorn Bold Italic\" PostScriptName=\"Vollkorn-BoldItalic\" Status=\"Installed\" FontStyleName=\"Bold Italic\" FontType=\"TrueType\" WritingScript=\"0\" FullName=\"Vollkorn Bold Italic\" FullNameNative=\"Vollkorn Bold Italic\" FontStyleNameNative=\"Bold Italic\" PlatformName=\"$ID/\" Version=\"Version 2.001\"/>\n\t</FontFamily>\n\t<CompositeFont Self=\"CompositeFont/$ID/[No composite font]\" Name=\"$ID/[No composite font]\">\n\t\t<CompositeFontEntry Self=\"u95\" Name=\"$ID/Kanji\" FontStyle=\"$ID/R\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" Locked=\"true\" ScaleOption=\"true\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Kozuka Mincho Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t\t<CompositeFontEntry Self=\"u97\" Name=\"$ID/Kana\" FontStyle=\"$ID/R\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" CustomCharacters=\"\u3041\u3042\u3043\u3044\u3045\u3046\u3047\u3048\u3049\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3063\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3083\u3084\u3085\u3086\u3087\u3088\u3089\u308a\u308b\u308c\u308d\u308e\u308f\u3090\u3091\u3092\u3093\u3094\u3095\u3096\u309d\u309e\u30a1\u30a2\u30a3\u30a4\u30a5\u30a6\u30a7\u30a8\u30a9\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c3\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e3\u30e4\u30e5\u30e6\u30e7\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ee\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f5\u30f6\u30f7\u30f8\u30f9\u30fa\u30fc\u30fd\u30fe\" Locked=\"true\" ScaleOption=\"true\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Kozuka Mincho Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t\t<CompositeFontEntry Self=\"u98\" Name=\"$ID/Punctuation\" FontStyle=\"$ID/R\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" CustomCharacters=\"\u2014\u2015\u2016\u2018\u2019\u201c\u201d\u2025\u2026\u2032\u2033\u2225\u3001\u3002\u3008\u3009\u300a\u300b\u300c\u300d\u300e\u300f\u3010\u3011\u3014\u3015\u301c\u30fb\uff01\uff08\uff09\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff3b\uff3d\uff5b\uff5d\uff5e\" Locked=\"true\" ScaleOption=\"true\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Kozuka Mincho Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t\t<CompositeFontEntry Self=\"u99\" Name=\"$ID/Symbols\" FontStyle=\"$ID/R\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" CustomCharacters=\"\u00a2\u00a3\u00a7\u00a8\u00ac\u00b0\u00b1\u00b4\u00b6\u00d7\u00f7\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u0401\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f\u0451\u2010\u2020\u2021\u2030\u203b\u2103\u212b\u2190\u2191\u2192\u2193\u21d2\u21d4\u2200\u2202\u2203\u2207\u2208\u220b\u2212\u221a\u221d\u221e\u2220\u2227\u2228\u2229\u222a\u222b\u222c\u2234\u2235\u223d\u2252\u2260\u2261\u2266\u2267\u226a\u226b\u2282\u2283\u2286\u2287\u22a5\u2312\u25a0\u25a1\u25b2\u25b3\u25bc\u25bd\u25c6\u25c7\u25cb\u25ce\u25cf\u25ef\u2605\u2606\u2640\u2642\u266a\u266d\u266f\u3003\u3006\u3007\u3012\u3013\u309b\u309c\uff03\uff04\uff05\uff06\uff0a\uff0b\uff0d\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff1c\uff1d\uff1e\uff20\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a\uff3c\uff3e\uff3f\uff40\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff5c\uffe0\uffe1\uffe2\uffe3\uffe5\" Locked=\"true\" ScaleOption=\"true\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Kozuka Mincho Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t\t<CompositeFontEntry Self=\"u9a\" Name=\"$ID/Alphabetic\" FontStyle=\"$ID/Regular\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" CustomCharacters=\" !&quot;#$%&amp;&apos;()*+,-./:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u007f\u00a0\u00a1\u00a4\u00a5\u00a6\u00a9\u00aa\u00ab\u00ad\u00ae\u00af\u00b2\u00b3\u00b5\u00b7\u00b8\u00b9\u00ba\u00bb\u00bc\u00bd\u00be\u00bf\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00c6\u00c7\u00c8\u00c9\u00ca\u00cb\u00cc\u00cd\u00ce\u00cf\u00d0\u00d1\u00d2\u00d3\u00d4\u00d5\u00d6\u00d8\u00d9\u00da\u00db\u00dc\u00dd\u00de\u00df\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e6\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f8\u00f9\u00fa\u00fb\u00fc\u00fd\u00fe\u00ff\u0131\u0152\u0153\u0160\u0161\u0178\u017d\u017e\u0192\u02c6\u02c7\u02d8\u02d9\u02da\u02db\u02dc\u02dd\u2013\u201a\u201e\u2022\u2039\u203a\u2044\u20ac\u2122\u2206\u220f\u2211\u2248\u2264\u2265\u25ca\ufb00\ufb01\ufb02\ufb03\ufb04\ufb05\ufb06\" Locked=\"true\" ScaleOption=\"false\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t\t<CompositeFontEntry Self=\"u9b\" Name=\"$ID/Numbers\" FontStyle=\"$ID/Regular\" RelativeSize=\"100\" HorizontalScale=\"100\" VerticalScale=\"100\" CustomCharacters=\"0123456789\" Locked=\"true\" ScaleOption=\"false\" BaselineShift=\"0\">\n\t\t\t<Properties>\n\t\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t\t</Properties>\n\t\t</CompositeFontEntry>\n\t</CompositeFont>\n</idPkg:Fonts>",
  "Resources/Styles.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:Styles xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<RootCharacterStyleGroup Self=\"u6b\">\n\t\t<CharacterStyle Self=\"CharacterStyle/$ID/[No character style]\" Imported=\"false\" Name=\"$ID/[No character style]\"/>\n\t</RootCharacterStyleGroup>\n\t<RootParagraphStyleGroup Self=\"u6a\">\n\t\t<ParagraphStyle Self=\"ParagraphStyle/$ID/[No paragraph style]\" Name=\"$ID/[No paragraph style]\" Imported=\"false\" FillColor=\"Color/Black\" FontStyle=\"Regular\" PointSize=\"12\" HorizontalScale=\"100\" KerningMethod=\"$ID/Metrics\" Ligatures=\"true\" PageNumberType=\"AutoPageNumber\" StrokeWeight=\"1\" Tracking=\"0\" Composer=\"HL Composer\" DropCapCharacters=\"0\" DropCapLines=\"0\" BaselineShift=\"0\" Capitalization=\"Normal\" StrokeColor=\"Swatch/None\" HyphenateLadderLimit=\"3\" VerticalScale=\"100\" LeftIndent=\"0\" RightIndent=\"0\" FirstLineIndent=\"0\" AutoLeading=\"120\" AppliedLanguage=\"$ID/English: UK\" Hyphenation=\"true\" HyphenateAfterFirst=\"2\" HyphenateBeforeLast=\"2\" HyphenateCapitalizedWords=\"true\" HyphenateWordsLongerThan=\"5\" NoBreak=\"false\" HyphenationZone=\"36\" SpaceBefore=\"0\" SpaceAfter=\"0\" Underline=\"false\" OTFFigureStyle=\"Default\" DesiredWordSpacing=\"100\" MaximumWordSpacing=\"133\" MinimumWordSpacing=\"80\" DesiredLetterSpacing=\"0\" MaximumLetterSpacing=\"0\" MinimumLetterSpacing=\"0\" DesiredGlyphScaling=\"100\" MaximumGlyphScaling=\"100\" MinimumGlyphScaling=\"100\" StartParagraph=\"Anywhere\" KeepAllLinesTogether=\"false\" KeepWithNext=\"0\" KeepFirstLines=\"2\" KeepLastLines=\"2\" Position=\"Normal\" StrikeThru=\"false\" CharacterAlignment=\"AlignEmCenter\" KeepLinesTogether=\"false\" StrokeTint=\"-1\" FillTint=\"-1\" OverprintStroke=\"false\" OverprintFill=\"false\" GradientStrokeAngle=\"0\" GradientFillAngle=\"0\" GradientStrokeLength=\"-1\" GradientFillLength=\"-1\" GradientStrokeStart=\"0 0\" GradientFillStart=\"0 0\" Skew=\"0\" RuleAboveLineWeight=\"1\" RuleAboveTint=\"-1\" RuleAboveOffset=\"0\" RuleAboveLeftIndent=\"0\" RuleAboveRightIndent=\"0\" RuleAboveWidth=\"ColumnWidth\" RuleBelowLineWeight=\"1\" RuleBelowTint=\"-1\" RuleBelowOffset=\"0\" RuleBelowLeftIndent=\"0\" RuleBelowRightIndent=\"0\" RuleBelowWidth=\"ColumnWidth\" RuleAboveOverprint=\"false\" RuleBelowOverprint=\"false\" RuleAbove=\"false\" RuleBelow=\"false\" LastLineIndent=\"0\" HyphenateLastWord=\"true\" ParagraphBreakType=\"Anywhere\" SingleWordJustification=\"FullyJustified\" OTFOrdinal=\"false\" OTFFraction=\"false\" OTFDiscretionaryLigature=\"false\" OTFTitling=\"false\" RuleAboveGapTint=\"-1\" RuleAboveGapOverprint=\"false\" RuleBelowGapTint=\"-1\" RuleBelowGapOverprint=\"false\" Justification=\"LeftAlign\" DropcapDetail=\"1\" PositionalForm=\"None\" OTFMark=\"true\" HyphenWeight=\"5\" OTFLocale=\"true\" HyphenateAcrossColumns=\"true\" KeepRuleAboveInFrame=\"false\" IgnoreEdgeAlignment=\"false\" OTFSlashedZero=\"false\" OTFStylisticSets=\"0\" OTFHistorical=\"false\" OTFContextualAlternate=\"true\" UnderlineGapOverprint=\"false\" UnderlineGapTint=\"-1\" UnderlineOffset=\"-9999\" UnderlineOverprint=\"false\" UnderlineTint=\"-1\" UnderlineWeight=\"-9999\" StrikeThroughGapOverprint=\"false\" StrikeThroughGapTint=\"-1\" StrikeThroughOffset=\"-9999\" StrikeThroughOverprint=\"false\" StrikeThroughTint=\"-1\" StrikeThroughWeight=\"-9999\" MiterLimit=\"4\" StrokeAlignment=\"OutsideAlignment\" EndJoin=\"MiterEndJoin\" SpanColumnType=\"SingleColumn\" SplitColumnInsideGutter=\"6\" SplitColumnOutsideGutter=\"0\" KeepWithPrevious=\"false\" SpanColumnMinSpaceBefore=\"0\" SpanColumnMinSpaceAfter=\"0\" OTFSwash=\"false\" Tsume=\"0\" LeadingAki=\"-1\" TrailingAki=\"-1\" KinsokuType=\"KinsokuPushInFirst\" KinsokuHangType=\"None\" BunriKinshi=\"true\" RubyOpenTypePro=\"true\" RubyFontSize=\"-1\" RubyAlignment=\"RubyJIS\" RubyType=\"PerCharacterRuby\" RubyParentSpacing=\"RubyParent121Aki\" RubyXScale=\"100\" RubyYScale=\"100\" RubyXOffset=\"0\" RubyYOffset=\"0\" RubyPosition=\"AboveRight\" RubyAutoAlign=\"true\" RubyParentOverhangAmount=\"RubyOverhangOneRuby\" RubyOverhang=\"false\" RubyAutoScaling=\"false\" RubyParentScalingPercent=\"66\" RubyTint=\"-1\" RubyOverprintFill=\"Auto\" RubyStrokeTint=\"-1\" RubyOverprintStroke=\"Auto\" RubyWeight=\"-1\" KentenKind=\"None\" KentenFontSize=\"-1\" KentenXScale=\"100\" KentenYScale=\"100\" KentenPlacement=\"0\" KentenAlignment=\"AlignKentenCenter\" KentenPosition=\"AboveRight\" KentenCustomCharacter=\"\" KentenCharacterSet=\"CharacterInput\" KentenTint=\"-1\" KentenOverprintFill=\"Auto\" KentenStrokeTint=\"-1\" KentenOverprintStroke=\"Auto\" KentenWeight=\"-1\" Tatechuyoko=\"false\" TatechuyokoXOffset=\"0\" TatechuyokoYOffset=\"0\" AutoTcy=\"0\" AutoTcyIncludeRoman=\"false\" Jidori=\"0\" GridGyoudori=\"0\" GridAlignFirstLineOnly=\"false\" GridAlignment=\"None\" CharacterRotation=\"0\" RotateSingleByteCharacters=\"false\" Rensuuji=\"true\" ShataiMagnification=\"0\" ShataiDegreeAngle=\"4500\" ShataiAdjustTsume=\"true\" ShataiAdjustRotation=\"false\" Warichu=\"false\" WarichuLines=\"2\" WarichuSize=\"50\" WarichuLineSpacing=\"0\" WarichuAlignment=\"Auto\" WarichuCharsBeforeBreak=\"2\" WarichuCharsAfterBreak=\"2\" OTFHVKana=\"false\" OTFProportionalMetrics=\"false\" OTFRomanItalics=\"false\" LeadingModel=\"LeadingModelAkiBelow\" ScaleAffectsLineHeight=\"false\" ParagraphGyoudori=\"false\" CjkGridTracking=\"false\" GlyphForm=\"None\" RubyAutoTcyDigits=\"0\" RubyAutoTcyIncludeRoman=\"false\" RubyAutoTcyAutoScale=\"true\" TreatIdeographicSpaceAsSpace=\"false\" AllowArbitraryHyphenation=\"false\" BulletsAndNumberingListType=\"NoList\" NumberingStartAt=\"1\" NumberingLevel=\"1\" NumberingContinue=\"true\" NumberingApplyRestartPolicy=\"true\" BulletsAlignment=\"LeftAlign\" NumberingAlignment=\"LeftAlign\" NumberingExpression=\"^#.^t\" BulletsTextAfter=\"^t\" DigitsType=\"DefaultDigits\" Kashidas=\"DefaultKashidas\" DiacriticPosition=\"OpentypePosition\" CharacterDirection=\"DefaultDirection\" ParagraphDirection=\"LeftToRightDirection\" ParagraphJustification=\"DefaultJustification\" XOffsetDiacritic=\"0\" YOffsetDiacritic=\"0\" OTFOverlapSwash=\"false\" OTFStylisticAlternate=\"false\" OTFJustificationAlternate=\"false\" OTFStretchedAlternate=\"false\" KeyboardDirection=\"DefaultDirection\">\n\t\t\t<Properties>\n\t\t\t\t<Leading type=\"enumeration\">Auto</Leading>\n\t\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t\t\t<RuleAboveColor type=\"string\">Text Color</RuleAboveColor>\n\t\t\t\t<RuleBelowColor type=\"string\">Text Color</RuleBelowColor>\n\t\t\t\t<RuleAboveType type=\"object\">StrokeStyle/$ID/Solid</RuleAboveType>\n\t\t\t\t<RuleBelowType type=\"object\">StrokeStyle/$ID/Solid</RuleBelowType>\n\t\t\t\t<BalanceRaggedLines type=\"enumeration\">NoBalancing</BalanceRaggedLines>\n\t\t\t\t<RuleAboveGapColor type=\"object\">Swatch/None</RuleAboveGapColor>\n\t\t\t\t<RuleBelowGapColor type=\"object\">Swatch/None</RuleBelowGapColor>\n\t\t\t\t<UnderlineColor type=\"string\">Text Color</UnderlineColor>\n\t\t\t\t<UnderlineGapColor type=\"object\">Swatch/None</UnderlineGapColor>\n\t\t\t\t<UnderlineType type=\"object\">StrokeStyle/$ID/Solid</UnderlineType>\n\t\t\t\t<StrikeThroughColor type=\"string\">Text Color</StrikeThroughColor>\n\t\t\t\t<StrikeThroughGapColor type=\"object\">Swatch/None</StrikeThroughGapColor>\n\t\t\t\t<StrikeThroughType type=\"object\">StrokeStyle/$ID/Solid</StrikeThroughType>\n\t\t\t\t<SpanSplitColumnCount type=\"enumeration\">All</SpanSplitColumnCount>\n\t\t\t\t<Mojikumi type=\"enumeration\">Nothing</Mojikumi>\n\t\t\t\t<KinsokuSet type=\"enumeration\">Nothing</KinsokuSet>\n\t\t\t\t<RubyFont type=\"string\">$ID/</RubyFont>\n\t\t\t\t<RubyFontStyle type=\"enumeration\">Nothing</RubyFontStyle>\n\t\t\t\t<RubyFill type=\"string\">Text Color</RubyFill>\n\t\t\t\t<RubyStroke type=\"string\">Text Color</RubyStroke>\n\t\t\t\t<KentenFont type=\"string\">$ID/</KentenFont>\n\t\t\t\t<KentenFontStyle type=\"enumeration\">Nothing</KentenFontStyle>\n\t\t\t\t<KentenFillColor type=\"string\">Text Color</KentenFillColor>\n\t\t\t\t<KentenStrokeColor type=\"string\">Text Color</KentenStrokeColor>\n\t\t\t\t<BulletChar BulletCharacterType=\"UnicodeOnly\" BulletCharacterValue=\"8226\"/>\n\t\t\t\t<NumberingFormat type=\"string\">1, 2, 3, 4...</NumberingFormat>\n\t\t\t\t<BulletsFont type=\"string\">$ID/</BulletsFont>\n\t\t\t\t<BulletsFontStyle type=\"enumeration\">Nothing</BulletsFontStyle>\n\t\t\t\t<AppliedNumberingList type=\"object\">NumberingList/$ID/[Default]</AppliedNumberingList>\n\t\t\t\t<NumberingRestartPolicies RestartPolicy=\"AnyPreviousLevel\" LowerLevel=\"0\" UpperLevel=\"0\"/>\n\t\t\t\t<BulletsCharacterStyle type=\"object\">CharacterStyle/$ID/[No character style]</BulletsCharacterStyle>\n\t\t\t\t<NumberingCharacterStyle type=\"object\">CharacterStyle/$ID/[No character style]</NumberingCharacterStyle>\n\t\t\t</Properties>\n\t\t</ParagraphStyle>\n\t\t<ParagraphStyle Self=\"ParagraphStyle/$ID/NormalParagraphStyle\" Name=\"$ID/NormalParagraphStyle\" Imported=\"false\" NextStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" KeyboardShortcut=\"0 0\">\n\t\t\t<Properties>\n\t\t\t\t<BasedOn type=\"string\">$ID/[No paragraph style]</BasedOn>\n\t\t\t\t<PreviewColor type=\"enumeration\">Nothing</PreviewColor>\n\t\t\t</Properties>\n\t\t</ParagraphStyle>\n\t</RootParagraphStyleGroup>\n\t<TOCStyle Self=\"TOCStyle/$ID/DefaultTOCStyleName\" TitleStyle=\"ParagraphStyle/$ID/[No paragraph style]\" Title=\"Contents\" Name=\"$ID/DefaultTOCStyleName\" RunIn=\"false\" IncludeHidden=\"false\" IncludeBookDocuments=\"false\" CreateBookmarks=\"true\" SetStoryDirection=\"Horizontal\" NumberedParagraphs=\"IncludeFullParagraph\"/>\n\t<RootCellStyleGroup Self=\"u7a\">\n\t\t<CellStyle Self=\"CellStyle/$ID/[None]\" AppliedParagraphStyle=\"ParagraphStyle/$ID/[No paragraph style]\" Name=\"$ID/[None]\"/>\n\t</RootCellStyleGroup>\n\t<RootTableStyleGroup Self=\"u7c\">\n\t\t<TableStyle Self=\"TableStyle/$ID/[No table style]\" Name=\"$ID/[No table style]\" StrokeOrder=\"BestJoins\" TopBorderStrokeWeight=\"1\" TopBorderStrokeType=\"StrokeStyle/$ID/Solid\" TopBorderStrokeColor=\"Color/Black\" TopBorderStrokeTint=\"100\" TopBorderStrokeOverprint=\"false\" TopBorderStrokeGapColor=\"Color/Paper\" TopBorderStrokeGapTint=\"100\" TopBorderStrokeGapOverprint=\"false\" LeftBorderStrokeWeight=\"1\" LeftBorderStrokeType=\"StrokeStyle/$ID/Solid\" LeftBorderStrokeColor=\"Color/Black\" LeftBorderStrokeTint=\"100\" LeftBorderStrokeOverprint=\"false\" LeftBorderStrokeGapColor=\"Color/Paper\" LeftBorderStrokeGapTint=\"100\" LeftBorderStrokeGapOverprint=\"false\" BottomBorderStrokeWeight=\"1\" BottomBorderStrokeType=\"StrokeStyle/$ID/Solid\" BottomBorderStrokeColor=\"Color/Black\" BottomBorderStrokeTint=\"100\" BottomBorderStrokeOverprint=\"false\" BottomBorderStrokeGapColor=\"Color/Paper\" BottomBorderStrokeGapTint=\"100\" BottomBorderStrokeGapOverprint=\"false\" RightBorderStrokeWeight=\"1\" RightBorderStrokeType=\"StrokeStyle/$ID/Solid\" RightBorderStrokeColor=\"Color/Black\" RightBorderStrokeTint=\"100\" RightBorderStrokeOverprint=\"false\" RightBorderStrokeGapColor=\"Color/Paper\" RightBorderStrokeGapTint=\"100\" RightBorderStrokeGapOverprint=\"false\" SpaceBefore=\"4\" SpaceAfter=\"-4\" SkipFirstAlternatingStrokeRows=\"0\" SkipLastAlternatingStrokeRows=\"0\" StartRowStrokeCount=\"0\" StartRowStrokeColor=\"Color/Black\" StartRowStrokeWeight=\"1\" StartRowStrokeType=\"StrokeStyle/$ID/Solid\" StartRowStrokeTint=\"100\" StartRowStrokeGapOverprint=\"false\" StartRowStrokeGapColor=\"Color/Paper\" StartRowStrokeGapTint=\"100\" StartRowStrokeOverprint=\"false\" EndRowStrokeCount=\"0\" EndRowStrokeColor=\"Color/Black\" EndRowStrokeWeight=\"0.25\" EndRowStrokeType=\"StrokeStyle/$ID/Solid\" EndRowStrokeTint=\"100\" EndRowStrokeOverprint=\"false\" EndRowStrokeGapColor=\"Color/Paper\" EndRowStrokeGapTint=\"100\" EndRowStrokeGapOverprint=\"false\" SkipFirstAlternatingStrokeColumns=\"0\" SkipLastAlternatingStrokeColumns=\"0\" StartColumnStrokeCount=\"0\" StartColumnStrokeColor=\"Color/Black\" StartColumnStrokeWeight=\"1\" StartColumnStrokeType=\"StrokeStyle/$ID/Solid\" StartColumnStrokeTint=\"100\" StartColumnStrokeOverprint=\"false\" StartColumnStrokeGapColor=\"Color/Paper\" StartColumnStrokeGapTint=\"100\" StartColumnStrokeGapOverprint=\"false\" EndColumnStrokeCount=\"0\" EndColumnStrokeColor=\"Color/Black\" EndColumnStrokeWeight=\"0.25\" EndColumnLineStyle=\"StrokeStyle/$ID/Solid\" EndColumnStrokeTint=\"100\" EndColumnStrokeOverprint=\"false\" EndColumnStrokeGapColor=\"Color/Paper\" EndColumnStrokeGapTint=\"100\" EndColumnStrokeGapOverprint=\"false\" ColumnFillsPriority=\"false\" SkipFirstAlternatingFillRows=\"0\" SkipLastAlternatingFillRows=\"0\" StartRowFillColor=\"Color/Black\" StartRowFillCount=\"0\" StartRowFillTint=\"20\" StartRowFillOverprint=\"false\" EndRowFillCount=\"0\" EndRowFillColor=\"Swatch/None\" EndRowFillTint=\"100\" EndRowFillOverprint=\"false\" SkipFirstAlternatingFillColumns=\"0\" SkipLastAlternatingFillColumns=\"0\" StartColumnFillCount=\"0\" StartColumnFillColor=\"Color/Black\" StartColumnFillTint=\"20\" StartColumnFillOverprint=\"false\" EndColumnFillCount=\"0\" EndColumnFillColor=\"Swatch/None\" EndColumnFillTint=\"100\" EndColumnFillOverprint=\"false\" HeaderRegionSameAsBodyRegion=\"true\" FooterRegionSameAsBodyRegion=\"true\" LeftColumnRegionSameAsBodyRegion=\"true\" RightColumnRegionSameAsBodyRegion=\"true\" HeaderRegionCellStyle=\"n\" FooterRegionCellStyle=\"n\" LeftColumnRegionCellStyle=\"n\" RightColumnRegionCellStyle=\"n\" BodyRegionCellStyle=\"CellStyle/$ID/[None]\"/>\n\t\t<TableStyle Self=\"TableStyle/$ID/[Basic Table]\" Name=\"$ID/[Basic Table]\" KeyboardShortcut=\"0 0\">\n\t\t\t<Properties>\n\t\t\t\t<BasedOn type=\"string\">$ID/[No table style]</BasedOn>\n\t\t\t</Properties>\n\t\t</TableStyle>\n\t</RootTableStyleGroup>\n\t<RootObjectStyleGroup Self=\"u85\">\n\t\t<ObjectStyle Self=\"ObjectStyle/$ID/[None]\" Name=\"$ID/[None]\" AppliedParagraphStyle=\"ParagraphStyle/$ID/[No paragraph style]\" CornerRadius=\"12\" FillColor=\"Swatch/None\" FillTint=\"-1\" StrokeWeight=\"0\" MiterLimit=\"4\" EndCap=\"ButtEndCap\" EndJoin=\"MiterEndJoin\" StrokeType=\"StrokeStyle/$ID/Solid\" LeftLineEnd=\"None\" RightLineEnd=\"None\" StrokeColor=\"Swatch/None\" StrokeTint=\"-1\" GapColor=\"Swatch/None\" GapTint=\"-1\" StrokeAlignment=\"CenterAlignment\" Nonprinting=\"false\" GradientFillAngle=\"0\" GradientStrokeAngle=\"0\" AppliedNamedGrid=\"n\" TopLeftCornerOption=\"None\" TopRightCornerOption=\"None\" BottomLeftCornerOption=\"None\" BottomRightCornerOption=\"None\" TopLeftCornerRadius=\"12\" TopRightCornerRadius=\"12\" BottomLeftCornerRadius=\"12\" BottomRightCornerRadius=\"12\" CornerOption=\"None\">\n\t\t\t<TextFramePreference TextColumnCount=\"1\" TextColumnGutter=\"12\" TextColumnFixedWidth=\"144\" UseFixedColumnWidth=\"false\" FirstBaselineOffset=\"AscentOffset\" MinimumFirstBaselineOffset=\"0\" VerticalJustification=\"TopAlign\" VerticalThreshold=\"0\" IgnoreWrap=\"false\" VerticalBalanceColumns=\"false\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<InsetSpacing type=\"list\">\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t</InsetSpacing>\n\t\t\t\t</Properties>\n\t\t\t</TextFramePreference>\n\t\t\t<BaselineFrameGridOption UseCustomBaselineFrameGrid=\"false\" StartingOffsetForBaselineFrameGrid=\"0\" BaselineFrameGridRelativeOption=\"TopOfInset\" BaselineFrameGridIncrement=\"12\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<BaselineFrameGridColor type=\"enumeration\">LightBlue</BaselineFrameGridColor>\n\t\t\t\t</Properties>\n\t\t\t</BaselineFrameGridOption>\n\t\t\t<AnchoredObjectSetting AnchoredPosition=\"InlinePosition\" SpineRelative=\"false\" LockPosition=\"false\" PinPosition=\"true\" AnchorPoint=\"BottomRightAnchor\" HorizontalAlignment=\"LeftAlign\" HorizontalReferencePoint=\"TextFrame\" VerticalAlignment=\"BottomAlign\" VerticalReferencePoint=\"LineBaseline\" AnchorXoffset=\"0\" AnchorYoffset=\"0\" AnchorSpaceAbove=\"0\"/>\n\t\t\t<TextWrapPreference Inverse=\"false\" ApplyToMasterPageOnly=\"false\" TextWrapSide=\"BothSides\" TextWrapMode=\"None\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<TextWrapOffset Top=\"0\" Left=\"0\" Bottom=\"0\" Right=\"0\"/>\n\t\t\t\t</Properties>\n\t\t\t\t<ContourOption ContourType=\"SameAsClipping\" IncludeInsideEdges=\"false\" ContourPathName=\"$ID/\"/>\n\t\t\t</TextWrapPreference>\n\t\t\t<StoryPreference OpticalMarginAlignment=\"false\" OpticalMarginSize=\"12\" FrameType=\"TextFrameType\" StoryOrientation=\"Horizontal\" StoryDirection=\"LeftToRightDirection\"/>\n\t\t\t<FrameFittingOption AutoFit=\"false\" LeftCrop=\"0\" TopCrop=\"0\" RightCrop=\"0\" BottomCrop=\"0\" FittingOnEmptyFrame=\"None\" FittingAlignment=\"TopLeftAnchor\"/>\n\t\t</ObjectStyle>\n\t\t<ObjectStyle Self=\"ObjectStyle/$ID/[Normal Graphics Frame]\" Name=\"$ID/[Normal Graphics Frame]\" AppliedParagraphStyle=\"ParagraphStyle/$ID/[No paragraph style]\" ApplyNextParagraphStyle=\"false\" EnableFill=\"true\" EnableStroke=\"true\" EnableParagraphStyle=\"false\" EnableTextFrameGeneralOptions=\"false\" EnableTextFrameBaselineOptions=\"false\" EnableStoryOptions=\"false\" EnableTextWrapAndOthers=\"false\" EnableAnchoredObjectOptions=\"false\" CornerRadius=\"12\" FillColor=\"Swatch/None\" FillTint=\"-1\" StrokeWeight=\"1\" MiterLimit=\"4\" EndCap=\"ButtEndCap\" EndJoin=\"MiterEndJoin\" StrokeType=\"StrokeStyle/$ID/Solid\" LeftLineEnd=\"None\" RightLineEnd=\"None\" StrokeColor=\"Color/Black\" StrokeTint=\"-1\" OverprintStroke=\"false\" GapColor=\"Swatch/None\" GapTint=\"-1\" StrokeAlignment=\"CenterAlignment\" Nonprinting=\"false\" GradientFillAngle=\"0\" GradientStrokeAngle=\"0\" AppliedNamedGrid=\"n\" KeyboardShortcut=\"0 0\" TopLeftCornerOption=\"None\" TopRightCornerOption=\"None\" BottomLeftCornerOption=\"None\" BottomRightCornerOption=\"None\" TopLeftCornerRadius=\"12\" TopRightCornerRadius=\"12\" BottomLeftCornerRadius=\"12\" BottomRightCornerRadius=\"12\" EnableFrameFittingOptions=\"false\" CornerOption=\"None\" EnableStrokeAndCornerOptions=\"true\">\n\t\t\t<Properties>\n\t\t\t\t<BasedOn type=\"string\">$ID/[None]</BasedOn>\n\t\t\t</Properties>\n\t\t\t<TextFramePreference TextColumnCount=\"1\" TextColumnGutter=\"12\" TextColumnFixedWidth=\"144\" UseFixedColumnWidth=\"false\" FirstBaselineOffset=\"AscentOffset\" MinimumFirstBaselineOffset=\"0\" VerticalJustification=\"TopAlign\" VerticalThreshold=\"0\" IgnoreWrap=\"false\" VerticalBalanceColumns=\"false\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<InsetSpacing type=\"list\">\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t</InsetSpacing>\n\t\t\t\t</Properties>\n\t\t\t</TextFramePreference>\n\t\t\t<BaselineFrameGridOption UseCustomBaselineFrameGrid=\"false\" StartingOffsetForBaselineFrameGrid=\"0\" BaselineFrameGridRelativeOption=\"TopOfInset\" BaselineFrameGridIncrement=\"12\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<BaselineFrameGridColor type=\"enumeration\">LightBlue</BaselineFrameGridColor>\n\t\t\t\t</Properties>\n\t\t\t</BaselineFrameGridOption>\n\t\t\t<AnchoredObjectSetting AnchoredPosition=\"InlinePosition\" SpineRelative=\"false\" LockPosition=\"false\" PinPosition=\"true\" AnchorPoint=\"BottomRightAnchor\" HorizontalAlignment=\"LeftAlign\" HorizontalReferencePoint=\"TextFrame\" VerticalAlignment=\"BottomAlign\" VerticalReferencePoint=\"LineBaseline\" AnchorXoffset=\"0\" AnchorYoffset=\"0\" AnchorSpaceAbove=\"0\"/>\n\t\t\t<TextWrapPreference Inverse=\"false\" ApplyToMasterPageOnly=\"false\" TextWrapSide=\"BothSides\" TextWrapMode=\"None\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<TextWrapOffset Top=\"0\" Left=\"0\" Bottom=\"0\" Right=\"0\"/>\n\t\t\t\t</Properties>\n\t\t\t\t<ContourOption ContourType=\"SameAsClipping\" IncludeInsideEdges=\"false\" ContourPathName=\"$ID/\"/>\n\t\t\t</TextWrapPreference>\n\t\t\t<StoryPreference OpticalMarginAlignment=\"false\" OpticalMarginSize=\"12\" FrameType=\"Unknown\" StoryOrientation=\"Unknown\" StoryDirection=\"UnknownDirection\"/>\n\t\t\t<FrameFittingOption AutoFit=\"false\" LeftCrop=\"0\" TopCrop=\"0\" RightCrop=\"0\" BottomCrop=\"0\" FittingOnEmptyFrame=\"None\" FittingAlignment=\"TopLeftAnchor\"/>\n\t\t\t<ObjectStyleObjectEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleStrokeEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleFillEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleContentEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t</ObjectStyle>\n\t\t<ObjectStyle Self=\"ObjectStyle/$ID/[Normal Text Frame]\" Name=\"$ID/[Normal Text Frame]\" AppliedParagraphStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" ApplyNextParagraphStyle=\"false\" EnableFill=\"true\" EnableStroke=\"true\" EnableParagraphStyle=\"false\" EnableTextFrameGeneralOptions=\"true\" EnableTextFrameBaselineOptions=\"true\" EnableStoryOptions=\"false\" EnableTextWrapAndOthers=\"false\" EnableAnchoredObjectOptions=\"false\" CornerRadius=\"12\" FillColor=\"Swatch/None\" FillTint=\"-1\" StrokeWeight=\"0\" MiterLimit=\"4\" EndCap=\"ButtEndCap\" EndJoin=\"MiterEndJoin\" StrokeType=\"StrokeStyle/$ID/Solid\" LeftLineEnd=\"None\" RightLineEnd=\"None\" StrokeColor=\"Swatch/None\" StrokeTint=\"-1\" GapColor=\"Swatch/None\" GapTint=\"-1\" StrokeAlignment=\"CenterAlignment\" Nonprinting=\"false\" GradientFillAngle=\"0\" GradientStrokeAngle=\"0\" AppliedNamedGrid=\"n\" KeyboardShortcut=\"0 0\" TopLeftCornerOption=\"None\" TopRightCornerOption=\"None\" BottomLeftCornerOption=\"None\" BottomRightCornerOption=\"None\" TopLeftCornerRadius=\"12\" TopRightCornerRadius=\"12\" BottomLeftCornerRadius=\"12\" BottomRightCornerRadius=\"12\" EnableFrameFittingOptions=\"false\" CornerOption=\"None\" EnableStrokeAndCornerOptions=\"true\">\n\t\t\t<Properties>\n\t\t\t\t<BasedOn type=\"string\">$ID/[None]</BasedOn>\n\t\t\t</Properties>\n\t\t\t<TextFramePreference TextColumnCount=\"1\" TextColumnGutter=\"12\" TextColumnFixedWidth=\"144\" UseFixedColumnWidth=\"false\" FirstBaselineOffset=\"AscentOffset\" MinimumFirstBaselineOffset=\"0\" VerticalJustification=\"TopAlign\" VerticalThreshold=\"0\" IgnoreWrap=\"false\" VerticalBalanceColumns=\"false\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<InsetSpacing type=\"list\">\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t</InsetSpacing>\n\t\t\t\t</Properties>\n\t\t\t</TextFramePreference>\n\t\t\t<BaselineFrameGridOption UseCustomBaselineFrameGrid=\"false\" StartingOffsetForBaselineFrameGrid=\"0\" BaselineFrameGridRelativeOption=\"TopOfInset\" BaselineFrameGridIncrement=\"12\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<BaselineFrameGridColor type=\"enumeration\">LightBlue</BaselineFrameGridColor>\n\t\t\t\t</Properties>\n\t\t\t</BaselineFrameGridOption>\n\t\t\t<AnchoredObjectSetting AnchoredPosition=\"InlinePosition\" SpineRelative=\"false\" LockPosition=\"false\" PinPosition=\"true\" AnchorPoint=\"BottomRightAnchor\" HorizontalAlignment=\"LeftAlign\" HorizontalReferencePoint=\"TextFrame\" VerticalAlignment=\"BottomAlign\" VerticalReferencePoint=\"LineBaseline\" AnchorXoffset=\"0\" AnchorYoffset=\"0\" AnchorSpaceAbove=\"0\"/>\n\t\t\t<TextWrapPreference Inverse=\"false\" ApplyToMasterPageOnly=\"false\" TextWrapSide=\"BothSides\" TextWrapMode=\"None\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<TextWrapOffset Top=\"0\" Left=\"0\" Bottom=\"0\" Right=\"0\"/>\n\t\t\t\t</Properties>\n\t\t\t\t<ContourOption ContourType=\"SameAsClipping\" IncludeInsideEdges=\"false\" ContourPathName=\"$ID/\"/>\n\t\t\t</TextWrapPreference>\n\t\t\t<StoryPreference OpticalMarginAlignment=\"false\" OpticalMarginSize=\"12\" FrameType=\"TextFrameType\" StoryOrientation=\"Unknown\" StoryDirection=\"LeftToRightDirection\"/>\n\t\t\t<FrameFittingOption AutoFit=\"false\" LeftCrop=\"0\" TopCrop=\"0\" RightCrop=\"0\" BottomCrop=\"0\" FittingOnEmptyFrame=\"None\" FittingAlignment=\"TopLeftAnchor\"/>\n\t\t\t<ObjectStyleObjectEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleStrokeEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleFillEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleContentEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t</ObjectStyle>\n\t\t<ObjectStyle Self=\"ObjectStyle/$ID/[Normal Grid]\" Name=\"$ID/[Normal Grid]\" AppliedParagraphStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" ApplyNextParagraphStyle=\"false\" EnableFill=\"true\" EnableStroke=\"true\" EnableParagraphStyle=\"false\" EnableTextFrameGeneralOptions=\"true\" EnableTextFrameBaselineOptions=\"true\" EnableStoryOptions=\"true\" EnableTextWrapAndOthers=\"false\" EnableAnchoredObjectOptions=\"false\" CornerRadius=\"12\" FillColor=\"Swatch/None\" FillTint=\"-1\" StrokeWeight=\"0\" MiterLimit=\"4\" EndCap=\"ButtEndCap\" EndJoin=\"MiterEndJoin\" StrokeType=\"StrokeStyle/$ID/Solid\" LeftLineEnd=\"None\" RightLineEnd=\"None\" StrokeColor=\"Swatch/None\" StrokeTint=\"-1\" GapColor=\"Swatch/None\" GapTint=\"-1\" StrokeAlignment=\"CenterAlignment\" Nonprinting=\"false\" GradientFillAngle=\"0\" GradientStrokeAngle=\"0\" AppliedNamedGrid=\"n\" KeyboardShortcut=\"0 0\" TopLeftCornerOption=\"None\" TopRightCornerOption=\"None\" BottomLeftCornerOption=\"None\" BottomRightCornerOption=\"None\" TopLeftCornerRadius=\"12\" TopRightCornerRadius=\"12\" BottomLeftCornerRadius=\"12\" BottomRightCornerRadius=\"12\" EnableFrameFittingOptions=\"false\" CornerOption=\"None\" EnableStrokeAndCornerOptions=\"true\">\n\t\t\t<Properties>\n\t\t\t\t<BasedOn type=\"string\">$ID/[None]</BasedOn>\n\t\t\t</Properties>\n\t\t\t<TextFramePreference TextColumnCount=\"1\" TextColumnGutter=\"12\" TextColumnFixedWidth=\"144\" UseFixedColumnWidth=\"false\" FirstBaselineOffset=\"AscentOffset\" MinimumFirstBaselineOffset=\"0\" VerticalJustification=\"TopAlign\" VerticalThreshold=\"0\" IgnoreWrap=\"false\" VerticalBalanceColumns=\"false\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<InsetSpacing type=\"list\">\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t\t</InsetSpacing>\n\t\t\t\t</Properties>\n\t\t\t</TextFramePreference>\n\t\t\t<BaselineFrameGridOption UseCustomBaselineFrameGrid=\"false\" StartingOffsetForBaselineFrameGrid=\"0\" BaselineFrameGridRelativeOption=\"TopOfInset\" BaselineFrameGridIncrement=\"12\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<BaselineFrameGridColor type=\"enumeration\">LightBlue</BaselineFrameGridColor>\n\t\t\t\t</Properties>\n\t\t\t</BaselineFrameGridOption>\n\t\t\t<AnchoredObjectSetting AnchoredPosition=\"InlinePosition\" SpineRelative=\"false\" LockPosition=\"false\" PinPosition=\"true\" AnchorPoint=\"BottomRightAnchor\" HorizontalAlignment=\"LeftAlign\" HorizontalReferencePoint=\"TextFrame\" VerticalAlignment=\"BottomAlign\" VerticalReferencePoint=\"LineBaseline\" AnchorXoffset=\"0\" AnchorYoffset=\"0\" AnchorSpaceAbove=\"0\"/>\n\t\t\t<TextWrapPreference Inverse=\"false\" ApplyToMasterPageOnly=\"false\" TextWrapSide=\"BothSides\" TextWrapMode=\"None\">\n\t\t\t\t<Properties>\n\t\t\t\t\t<TextWrapOffset Top=\"0\" Left=\"0\" Bottom=\"0\" Right=\"0\"/>\n\t\t\t\t</Properties>\n\t\t\t\t<ContourOption ContourType=\"SameAsClipping\" IncludeInsideEdges=\"false\" ContourPathName=\"$ID/\"/>\n\t\t\t</TextWrapPreference>\n\t\t\t<StoryPreference OpticalMarginAlignment=\"false\" OpticalMarginSize=\"12\" FrameType=\"FrameGridType\" StoryOrientation=\"Unknown\" StoryDirection=\"LeftToRightDirection\"/>\n\t\t\t<FrameFittingOption AutoFit=\"false\" LeftCrop=\"0\" TopCrop=\"0\" RightCrop=\"0\" BottomCrop=\"0\" FittingOnEmptyFrame=\"None\" FittingAlignment=\"TopLeftAnchor\"/>\n\t\t\t<ObjectStyleObjectEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleStrokeEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleFillEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t\t<ObjectStyleContentEffectsCategorySettings EnableTransparency=\"true\" EnableDropShadow=\"true\" EnableFeather=\"true\" EnableInnerShadow=\"true\" EnableOuterGlow=\"true\" EnableInnerGlow=\"true\" EnableBevelEmboss=\"true\" EnableSatin=\"true\" EnableDirectionalFeather=\"true\" EnableGradientFeather=\"true\"/>\n\t\t</ObjectStyle>\n\t</RootObjectStyleGroup>\n\t<TrapPreset Self=\"TrapPreset/$ID/k[No Trap Preset]\" Name=\"$ID/k[No Trap Preset]\" DefaultTrapWidth=\"0.25\" BlackWidth=\"0.5\" TrapJoin=\"MiterEndJoin\" TrapEnd=\"MiterTrapEnds\" ObjectsToImages=\"true\" ImagesToImages=\"true\" InternalImages=\"false\" OneBitImages=\"true\" ImagePlacement=\"CenterEdges\" StepThreshold=\"10\" BlackColorThreshold=\"100\" BlackDensity=\"1.6\" SlidingTrapThreshold=\"70\" ColorReduction=\"100\"/>\n\t<TrapPreset Self=\"TrapPreset/$ID/kDefaultTrapStyleName\" Name=\"$ID/kDefaultTrapStyleName\" DefaultTrapWidth=\"0.25\" BlackWidth=\"0.5\" TrapJoin=\"MiterEndJoin\" TrapEnd=\"MiterTrapEnds\" ObjectsToImages=\"true\" ImagesToImages=\"true\" InternalImages=\"false\" OneBitImages=\"true\" ImagePlacement=\"CenterEdges\" StepThreshold=\"10\" BlackColorThreshold=\"100\" BlackDensity=\"1.6\" SlidingTrapThreshold=\"70\" ColorReduction=\"100\"/>\n</idPkg:Styles>",
  "Resources/Preferences.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:Preferences xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<XMLPreference DefaultStoryTagName=\"Story\" DefaultTableTagName=\"Table\" DefaultCellTagName=\"Cell\" DefaultImageTagName=\"Image\">\n\t\t<Properties>\n\t\t\t<DefaultStoryTagColor type=\"enumeration\">BrickRed</DefaultStoryTagColor>\n\t\t\t<DefaultTableTagColor type=\"enumeration\">DarkBlue</DefaultTableTagColor>\n\t\t\t<DefaultCellTagColor type=\"enumeration\">GrassGreen</DefaultCellTagColor>\n\t\t\t<DefaultImageTagColor type=\"enumeration\">Violet</DefaultImageTagColor>\n\t\t</Properties>\n\t</XMLPreference>\n\t<XMLImportPreference CreateLinkToXML=\"false\" RepeatTextElements=\"true\" IgnoreUnmatchedIncoming=\"false\" ImportTextIntoTables=\"true\" IgnoreWhitespace=\"false\" RemoveUnmatchedExisting=\"false\" ImportToSelected=\"true\" ImportStyle=\"MergeImport\" AllowTransform=\"false\" ImportCALSTables=\"true\">\n\t\t<Properties>\n\t\t\t<TransformFilename type=\"enumeration\">StylesheetInXML</TransformFilename>\n\t\t\t<TransformParameters>\n\t\t\t</TransformParameters>\n\t\t</Properties>\n\t</XMLImportPreference>\n\t<XMLExportPreference ViewAfterExport=\"false\" ExportFromSelected=\"false\" FileEncoding=\"UTF8\" Ruby=\"false\" ExcludeDtd=\"true\" CopyOriginalImages=\"false\" CopyOptimizedImages=\"false\" CopyFormattedImages=\"false\" ImageConversion=\"Automatic\" GIFOptionsPalette=\"AdaptivePalette\" GIFOptionsInterlaced=\"false\" JPEGOptionsQuality=\"Medium\" JPEGOptionsFormat=\"BaselineEncoding\" AllowTransform=\"false\" CharacterReferences=\"false\" ExportUntaggedTablesFormat=\"CALS\">\n\t\t<Properties>\n\t\t\t<PreferredBrowser type=\"enumeration\">Nothing</PreferredBrowser>\n\t\t\t<TransformFilename type=\"enumeration\">StylesheetInXML</TransformFilename>\n\t\t</Properties>\n\t</XMLExportPreference>\n\t<ExportForWebPreference CopyFormattedImages=\"false\" CopyOptimizedImages=\"false\" CopyOriginalImages=\"false\" ImageConversion=\"Automatic\" GIFOptionsPalette=\"AdaptivePalette\" GIFOptionsInterlaced=\"false\" JPEGOptionsQuality=\"Medium\" JPEGOptionsFormat=\"BaselineEncoding\"/>\n\t<TransparencyPreference BlendingSpace=\"CMYK\" GlobalLightAngle=\"120\" GlobalLightAltitude=\"30\"/>\n\t<TransparencyDefaultContainerObject>\n\t\t<TransparencySetting>\n\t\t\t<BlendingSetting BlendMode=\"Normal\" Opacity=\"100\" KnockoutGroup=\"false\" IsolateBlending=\"false\"/>\n\t\t\t<DropShadowSetting Mode=\"None\" BlendMode=\"Multiply\" Opacity=\"75\" XOffset=\"7\" YOffset=\"7\" Size=\"5\" EffectColor=\"n\" Noise=\"0\" Spread=\"0\" UseGlobalLight=\"false\" KnockedOut=\"true\" HonorOtherEffects=\"false\"/>\n\t\t\t<FeatherSetting Mode=\"None\" Width=\"9\" CornerType=\"Diffusion\" Noise=\"0\" ChokeAmount=\"0\"/>\n\t\t\t<InnerShadowSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"75\" Angle=\"120\" Distance=\"7\" UseGlobalLight=\"false\" ChokeAmount=\"0\" Size=\"7\" Noise=\"0\"/>\n\t\t\t<OuterGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\"/>\n\t\t\t<InnerGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\" Source=\"EdgeSourced\"/>\n\t\t\t<BevelAndEmbossSetting Applied=\"false\" Style=\"InnerBevel\" Technique=\"SmoothContour\" Depth=\"100\" Direction=\"Up\" Size=\"7\" Soften=\"0\" Angle=\"120\" Altitude=\"30\" UseGlobalLight=\"false\" HighlightColor=\"n\" HighlightBlendMode=\"Screen\" HighlightOpacity=\"75\" ShadowColor=\"n\" ShadowBlendMode=\"Multiply\" ShadowOpacity=\"75\"/>\n\t\t\t<SatinSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"50\" Angle=\"120\" Distance=\"7\" Size=\"7\" InvertEffect=\"false\"/>\n\t\t\t<DirectionalFeatherSetting Applied=\"false\" LeftWidth=\"0\" RightWidth=\"0\" TopWidth=\"0\" BottomWidth=\"0\" ChokeAmount=\"0\" Angle=\"0\" FollowShapeMode=\"LeadingEdge\" Noise=\"0\"/>\n\t\t\t<GradientFeatherSetting Applied=\"false\" Type=\"Linear\" Angle=\"0\" Length=\"0\" GradientStart=\"0 0\" HiliteAngle=\"0\" HiliteLength=\"0\"/>\n\t\t</TransparencySetting>\n\t\t<StrokeTransparencySetting>\n\t\t\t<BlendingSetting BlendMode=\"Normal\" Opacity=\"100\" KnockoutGroup=\"false\" IsolateBlending=\"false\"/>\n\t\t\t<DropShadowSetting Mode=\"None\" BlendMode=\"Multiply\" Opacity=\"75\" XOffset=\"7\" YOffset=\"7\" Size=\"5\" EffectColor=\"n\" Noise=\"0\" Spread=\"0\" UseGlobalLight=\"false\" KnockedOut=\"true\" HonorOtherEffects=\"false\"/>\n\t\t\t<FeatherSetting Mode=\"None\" Width=\"9\" CornerType=\"Diffusion\" Noise=\"0\" ChokeAmount=\"0\"/>\n\t\t\t<InnerShadowSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"75\" Angle=\"120\" Distance=\"7\" UseGlobalLight=\"false\" ChokeAmount=\"0\" Size=\"7\" Noise=\"0\"/>\n\t\t\t<OuterGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\"/>\n\t\t\t<InnerGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\" Source=\"EdgeSourced\"/>\n\t\t\t<BevelAndEmbossSetting Applied=\"false\" Style=\"InnerBevel\" Technique=\"SmoothContour\" Depth=\"100\" Direction=\"Up\" Size=\"7\" Soften=\"0\" Angle=\"120\" Altitude=\"30\" UseGlobalLight=\"false\" HighlightColor=\"n\" HighlightBlendMode=\"Screen\" HighlightOpacity=\"75\" ShadowColor=\"n\" ShadowBlendMode=\"Multiply\" ShadowOpacity=\"75\"/>\n\t\t\t<SatinSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"50\" Angle=\"120\" Distance=\"7\" Size=\"7\" InvertEffect=\"false\"/>\n\t\t\t<DirectionalFeatherSetting Applied=\"false\" LeftWidth=\"0\" RightWidth=\"0\" TopWidth=\"0\" BottomWidth=\"0\" ChokeAmount=\"0\" Angle=\"0\" FollowShapeMode=\"LeadingEdge\" Noise=\"0\"/>\n\t\t\t<GradientFeatherSetting Applied=\"false\" Type=\"Linear\" Angle=\"0\" Length=\"0\" GradientStart=\"0 0\" HiliteAngle=\"0\" HiliteLength=\"0\"/>\n\t\t</StrokeTransparencySetting>\n\t\t<FillTransparencySetting>\n\t\t\t<BlendingSetting BlendMode=\"Normal\" Opacity=\"100\" KnockoutGroup=\"false\" IsolateBlending=\"false\"/>\n\t\t\t<DropShadowSetting Mode=\"None\" BlendMode=\"Multiply\" Opacity=\"75\" XOffset=\"7\" YOffset=\"7\" Size=\"5\" EffectColor=\"n\" Noise=\"0\" Spread=\"0\" UseGlobalLight=\"false\" KnockedOut=\"true\" HonorOtherEffects=\"false\"/>\n\t\t\t<FeatherSetting Mode=\"None\" Width=\"9\" CornerType=\"Diffusion\" Noise=\"0\" ChokeAmount=\"0\"/>\n\t\t\t<InnerShadowSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"75\" Angle=\"120\" Distance=\"7\" UseGlobalLight=\"false\" ChokeAmount=\"0\" Size=\"7\" Noise=\"0\"/>\n\t\t\t<OuterGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\"/>\n\t\t\t<InnerGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\" Source=\"EdgeSourced\"/>\n\t\t\t<BevelAndEmbossSetting Applied=\"false\" Style=\"InnerBevel\" Technique=\"SmoothContour\" Depth=\"100\" Direction=\"Up\" Size=\"7\" Soften=\"0\" Angle=\"120\" Altitude=\"30\" UseGlobalLight=\"false\" HighlightColor=\"n\" HighlightBlendMode=\"Screen\" HighlightOpacity=\"75\" ShadowColor=\"n\" ShadowBlendMode=\"Multiply\" ShadowOpacity=\"75\"/>\n\t\t\t<SatinSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"50\" Angle=\"120\" Distance=\"7\" Size=\"7\" InvertEffect=\"false\"/>\n\t\t\t<DirectionalFeatherSetting Applied=\"false\" LeftWidth=\"0\" RightWidth=\"0\" TopWidth=\"0\" BottomWidth=\"0\" ChokeAmount=\"0\" Angle=\"0\" FollowShapeMode=\"LeadingEdge\" Noise=\"0\"/>\n\t\t\t<GradientFeatherSetting Applied=\"false\" Type=\"Linear\" Angle=\"0\" Length=\"0\" GradientStart=\"0 0\" HiliteAngle=\"0\" HiliteLength=\"0\"/>\n\t\t</FillTransparencySetting>\n\t\t<ContentTransparencySetting>\n\t\t\t<BlendingSetting BlendMode=\"Normal\" Opacity=\"100\" KnockoutGroup=\"false\" IsolateBlending=\"false\"/>\n\t\t\t<DropShadowSetting Mode=\"None\" BlendMode=\"Multiply\" Opacity=\"75\" XOffset=\"7\" YOffset=\"7\" Size=\"5\" EffectColor=\"n\" Noise=\"0\" Spread=\"0\" UseGlobalLight=\"false\" KnockedOut=\"true\" HonorOtherEffects=\"false\"/>\n\t\t\t<FeatherSetting Mode=\"None\" Width=\"9\" CornerType=\"Diffusion\" Noise=\"0\" ChokeAmount=\"0\"/>\n\t\t\t<InnerShadowSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"75\" Angle=\"120\" Distance=\"7\" UseGlobalLight=\"false\" ChokeAmount=\"0\" Size=\"7\" Noise=\"0\"/>\n\t\t\t<OuterGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\"/>\n\t\t\t<InnerGlowSetting Applied=\"false\" BlendMode=\"Screen\" Opacity=\"75\" Noise=\"0\" EffectColor=\"n\" Technique=\"Softer\" Spread=\"0\" Size=\"7\" Source=\"EdgeSourced\"/>\n\t\t\t<BevelAndEmbossSetting Applied=\"false\" Style=\"InnerBevel\" Technique=\"SmoothContour\" Depth=\"100\" Direction=\"Up\" Size=\"7\" Soften=\"0\" Angle=\"120\" Altitude=\"30\" UseGlobalLight=\"false\" HighlightColor=\"n\" HighlightBlendMode=\"Screen\" HighlightOpacity=\"75\" ShadowColor=\"n\" ShadowBlendMode=\"Multiply\" ShadowOpacity=\"75\"/>\n\t\t\t<SatinSetting Applied=\"false\" EffectColor=\"n\" BlendMode=\"Multiply\" Opacity=\"50\" Angle=\"120\" Distance=\"7\" Size=\"7\" InvertEffect=\"false\"/>\n\t\t\t<DirectionalFeatherSetting Applied=\"false\" LeftWidth=\"0\" RightWidth=\"0\" TopWidth=\"0\" BottomWidth=\"0\" ChokeAmount=\"0\" Angle=\"0\" FollowShapeMode=\"LeadingEdge\" Noise=\"0\"/>\n\t\t\t<GradientFeatherSetting Applied=\"false\" Type=\"Linear\" Angle=\"0\" Length=\"0\" GradientStart=\"0 0\" HiliteAngle=\"0\" HiliteLength=\"0\"/>\n\t\t</ContentTransparencySetting>\n\t</TransparencyDefaultContainerObject>\n\t<TextFramePreference TextColumnCount=\"1\" TextColumnGutter=\"12\" TextColumnFixedWidth=\"144\" UseFixedColumnWidth=\"false\" FirstBaselineOffset=\"AscentOffset\" MinimumFirstBaselineOffset=\"0\" VerticalJustification=\"TopAlign\" VerticalThreshold=\"0\" IgnoreWrap=\"false\" VerticalBalanceColumns=\"false\">\n\t\t<Properties>\n\t\t\t<InsetSpacing type=\"list\">\n\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t\t<ListItem type=\"unit\">0</ListItem>\n\t\t\t</InsetSpacing>\n\t\t</Properties>\n\t</TextFramePreference>\n\t<TextPreference TypographersQuotes=\"true\" HighlightHjViolations=\"false\" HighlightKeeps=\"false\" HighlightSubstitutedGlyphs=\"false\" HighlightCustomSpacing=\"false\" HighlightSubstitutedFonts=\"true\" UseOpticalSize=\"true\" UseParagraphLeading=\"false\" SuperscriptSize=\"58.3\" SuperscriptPosition=\"33.3\" SubscriptSize=\"58.3\" SubscriptPosition=\"33.3\" SmallCap=\"70\" LeadingKeyIncrement=\"2\" BaselineShiftKeyIncrement=\"2\" KerningKeyIncrement=\"20\" ShowInvisibles=\"false\" JustifyTextWraps=\"false\" AbutTextToTextWrap=\"true\" ZOrderTextWrap=\"false\" LinkTextFilesWhenImporting=\"false\" HighlightKinsoku=\"false\" UseNewVerticalScaling=\"false\" UseCidMojikumi=\"false\" EnableStylePreviewMode=\"false\" SmartTextReflow=\"true\" AddPages=\"EndOfStory\" LimitToMasterTextFrames=\"true\" PreserveFacingPageSpreads=\"false\" DeleteEmptyPages=\"false\"/>\n\t<TextDefault FontStyle=\"Regular\" PointSize=\"12\" KerningMethod=\"$ID/Metrics\" Tracking=\"0\" Capitalization=\"Normal\" Position=\"Normal\" Underline=\"false\" StrikeThru=\"false\" Ligatures=\"true\" NoBreak=\"false\" HorizontalScale=\"100\" VerticalScale=\"100\" BaselineShift=\"0\" Skew=\"0\" FillTint=\"-1\" StrokeTint=\"-1\" StrokeWeight=\"1\" OverprintStroke=\"false\" OverprintFill=\"false\" OTFFigureStyle=\"Default\" OTFOrdinal=\"false\" OTFFraction=\"false\" OTFDiscretionaryLigature=\"false\" OTFTitling=\"false\" OTFContextualAlternate=\"true\" OTFSwash=\"false\" UnderlineTint=\"-1\" UnderlineGapTint=\"-1\" UnderlineOverprint=\"false\" UnderlineGapOverprint=\"false\" UnderlineOffset=\"-9999\" UnderlineWeight=\"-9999\" StrikeThroughTint=\"-1\" StrikeThroughGapTint=\"-1\" StrikeThroughOverprint=\"false\" StrikeThroughGapOverprint=\"false\" StrikeThroughOffset=\"-9999\" StrikeThroughWeight=\"-9999\" FillColor=\"Color/Black\" StrokeColor=\"Swatch/None\" AppliedLanguage=\"$ID/English: UK\" FirstLineIndent=\"0\" LeftIndent=\"0\" RightIndent=\"0\" SpaceBefore=\"0\" SpaceAfter=\"0\" Justification=\"LeftAlign\" SingleWordJustification=\"FullyJustified\" AutoLeading=\"120\" DropCapLines=\"0\" DropCapCharacters=\"0\" KeepLinesTogether=\"false\" KeepAllLinesTogether=\"false\" KeepWithNext=\"0\" KeepFirstLines=\"2\" KeepLastLines=\"2\" StartParagraph=\"Anywhere\" Composer=\"HL Composer\" MinimumWordSpacing=\"80\" MaximumWordSpacing=\"133\" DesiredWordSpacing=\"100\" MinimumLetterSpacing=\"0\" MaximumLetterSpacing=\"0\" DesiredLetterSpacing=\"0\" MinimumGlyphScaling=\"100\" MaximumGlyphScaling=\"100\" DesiredGlyphScaling=\"100\" RuleAbove=\"false\" RuleAboveOverprint=\"false\" RuleAboveLineWeight=\"1\" RuleAboveTint=\"-1\" RuleAboveOffset=\"0\" RuleAboveLeftIndent=\"0\" RuleAboveRightIndent=\"0\" RuleAboveWidth=\"ColumnWidth\" RuleAboveGapTint=\"-1\" RuleAboveGapOverprint=\"false\" RuleBelow=\"false\" RuleBelowLineWeight=\"1\" RuleBelowTint=\"-1\" RuleBelowOffset=\"0\" RuleBelowLeftIndent=\"0\" RuleBelowRightIndent=\"0\" RuleBelowWidth=\"ColumnWidth\" RuleBelowGapTint=\"-1\" HyphenateCapitalizedWords=\"true\" Hyphenation=\"true\" HyphenateBeforeLast=\"2\" HyphenateAfterFirst=\"2\" HyphenateWordsLongerThan=\"5\" HyphenateLadderLimit=\"3\" HyphenationZone=\"36\" HyphenWeight=\"5\" AppliedParagraphStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" AppliedCharacterStyle=\"CharacterStyle/$ID/[No character style]\" LastLineIndent=\"0\" HyphenateLastWord=\"true\" OTFSlashedZero=\"false\" OTFHistorical=\"false\" OTFStylisticSets=\"0\" GradientFillLength=\"-1\" GradientFillAngle=\"0\" GradientStrokeLength=\"-1\" GradientStrokeAngle=\"0\" GradientFillStart=\"0 0\" GradientStrokeStart=\"0 0\" KeepWithPrevious=\"false\" SpanColumnType=\"SingleColumn\" SplitColumnInsideGutter=\"6\" SplitColumnOutsideGutter=\"0\" SpanColumnMinSpaceBefore=\"0\" SpanColumnMinSpaceAfter=\"0\" RuleBelowOverprint=\"false\" RuleBelowGapOverprint=\"false\" DropcapDetail=\"1\" HyphenateAcrossColumns=\"true\" KeepRuleAboveInFrame=\"false\" IgnoreEdgeAlignment=\"false\" OTFMark=\"true\" OTFLocale=\"true\" PositionalForm=\"None\" ParagraphDirection=\"LeftToRightDirection\" ParagraphJustification=\"DefaultJustification\" MiterLimit=\"4\" StrokeAlignment=\"OutsideAlignment\" EndJoin=\"MiterEndJoin\" OTFOverlapSwash=\"false\" OTFStylisticAlternate=\"false\" OTFJustificationAlternate=\"false\" OTFStretchedAlternate=\"false\" CharacterDirection=\"DefaultDirection\" KeyboardDirection=\"DefaultDirection\" DigitsType=\"DefaultDigits\" Kashidas=\"DefaultKashidas\" DiacriticPosition=\"OpentypePosition\" XOffsetDiacritic=\"0\" YOffsetDiacritic=\"0\" ParagraphBreakType=\"Anywhere\" PageNumberType=\"AutoPageNumber\" AppliedNamedGrid=\"n\" GridAlignFirstLineOnly=\"false\" GridAlignment=\"None\" GridGyoudori=\"0\" AutoTcy=\"0\" AutoTcyIncludeRoman=\"false\" KinsokuType=\"KinsokuPushInFirst\" KinsokuHangType=\"None\" BunriKinshi=\"true\" Rensuuji=\"true\" RotateSingleByteCharacters=\"false\" LeadingModel=\"LeadingModelAkiBelow\" CharacterAlignment=\"AlignEmCenter\" Tsume=\"0\" LeadingAki=\"-1\" TrailingAki=\"-1\" CharacterRotation=\"0\" Jidori=\"0\" ShataiMagnification=\"0\" ShataiDegreeAngle=\"4500\" ShataiAdjustRotation=\"false\" ShataiAdjustTsume=\"true\" Tatechuyoko=\"false\" TatechuyokoXOffset=\"0\" TatechuyokoYOffset=\"0\" KentenTint=\"-1\" KentenStrokeTint=\"-1\" KentenWeight=\"-1\" KentenOverprintFill=\"Auto\" KentenOverprintStroke=\"Auto\" KentenKind=\"None\" KentenPlacement=\"0\" KentenAlignment=\"AlignKentenCenter\" KentenPosition=\"AboveRight\" KentenFontSize=\"-1\" KentenXScale=\"100\" KentenYScale=\"100\" KentenCustomCharacter=\"\" KentenCharacterSet=\"CharacterInput\" RubyTint=\"-1\" RubyWeight=\"-1\" RubyOverprintFill=\"Auto\" RubyOverprintStroke=\"Auto\" RubyStrokeTint=\"-1\" RubyFontSize=\"-1\" RubyOpenTypePro=\"true\" RubyXScale=\"100\" RubyYScale=\"100\" RubyType=\"PerCharacterRuby\" RubyAlignment=\"RubyJIS\" RubyPosition=\"AboveRight\" RubyXOffset=\"0\" RubyYOffset=\"0\" RubyParentSpacing=\"RubyParent121Aki\" RubyAutoAlign=\"true\" RubyOverhang=\"false\" RubyAutoScaling=\"false\" RubyParentScalingPercent=\"66\" RubyParentOverhangAmount=\"RubyOverhangOneRuby\" Warichu=\"false\" WarichuSize=\"50\" WarichuLines=\"2\" WarichuLineSpacing=\"0\" WarichuAlignment=\"Auto\" WarichuCharsAfterBreak=\"2\" WarichuCharsBeforeBreak=\"2\" OTFProportionalMetrics=\"false\" OTFHVKana=\"false\" OTFRomanItalics=\"false\" ScaleAffectsLineHeight=\"false\" CjkGridTracking=\"false\" GlyphForm=\"None\" ParagraphGyoudori=\"false\" RubyAutoTcyDigits=\"0\" RubyAutoTcyIncludeRoman=\"false\" RubyAutoTcyAutoScale=\"true\" TreatIdeographicSpaceAsSpace=\"false\" AllowArbitraryHyphenation=\"false\" BulletsAndNumberingListType=\"NoList\" NumberingExpression=\"^#.^t\" BulletsTextAfter=\"^t\" NumberingLevel=\"1\" NumberingContinue=\"true\" NumberingStartAt=\"1\" NumberingApplyRestartPolicy=\"true\" BulletsAlignment=\"LeftAlign\" NumberingAlignment=\"LeftAlign\">\n\t\t<Properties>\n\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t\t<Leading type=\"enumeration\">Auto</Leading>\n\t\t\t<UnderlineColor type=\"string\">Text Color</UnderlineColor>\n\t\t\t<UnderlineGapColor type=\"object\">Swatch/None</UnderlineGapColor>\n\t\t\t<UnderlineType type=\"object\">StrokeStyle/$ID/Solid</UnderlineType>\n\t\t\t<StrikeThroughColor type=\"string\">Text Color</StrikeThroughColor>\n\t\t\t<StrikeThroughGapColor type=\"object\">Swatch/None</StrikeThroughGapColor>\n\t\t\t<StrikeThroughType type=\"object\">StrokeStyle/$ID/Solid</StrikeThroughType>\n\t\t\t<BalanceRaggedLines type=\"enumeration\">NoBalancing</BalanceRaggedLines>\n\t\t\t<RuleAboveColor type=\"string\">Text Color</RuleAboveColor>\n\t\t\t<RuleAboveGapColor type=\"object\">Swatch/None</RuleAboveGapColor>\n\t\t\t<RuleAboveType type=\"object\">StrokeStyle/$ID/Solid</RuleAboveType>\n\t\t\t<RuleBelowColor type=\"string\">Text Color</RuleBelowColor>\n\t\t\t<RuleBelowGapColor type=\"object\">Swatch/None</RuleBelowGapColor>\n\t\t\t<RuleBelowType type=\"object\">StrokeStyle/$ID/Solid</RuleBelowType>\n\t\t\t<SpanSplitColumnCount type=\"enumeration\">All</SpanSplitColumnCount>\n\t\t\t<KinsokuSet type=\"enumeration\">Nothing</KinsokuSet>\n\t\t\t<Mojikumi type=\"enumeration\">Nothing</Mojikumi>\n\t\t\t<KentenFillColor type=\"string\">Text Color</KentenFillColor>\n\t\t\t<KentenStrokeColor type=\"string\">Text Color</KentenStrokeColor>\n\t\t\t<KentenFont type=\"string\">$ID/</KentenFont>\n\t\t\t<KentenFontStyle type=\"enumeration\">Nothing</KentenFontStyle>\n\t\t\t<RubyFill type=\"string\">Text Color</RubyFill>\n\t\t\t<RubyStroke type=\"string\">Text Color</RubyStroke>\n\t\t\t<RubyFont type=\"string\">$ID/</RubyFont>\n\t\t\t<RubyFontStyle type=\"enumeration\">Nothing</RubyFontStyle>\n\t\t\t<BulletChar BulletCharacterType=\"UnicodeOnly\" BulletCharacterValue=\"8226\"/>\n\t\t\t<BulletsFont type=\"string\">$ID/</BulletsFont>\n\t\t\t<BulletsFontStyle type=\"enumeration\">Nothing</BulletsFontStyle>\n\t\t\t<BulletsCharacterStyle type=\"object\">CharacterStyle/$ID/[No character style]</BulletsCharacterStyle>\n\t\t\t<NumberingCharacterStyle type=\"object\">CharacterStyle/$ID/[No character style]</NumberingCharacterStyle>\n\t\t\t<AppliedNumberingList type=\"object\">NumberingList/$ID/[Default]</AppliedNumberingList>\n\t\t\t<NumberingFormat type=\"string\">1, 2, 3, 4...</NumberingFormat>\n\t\t\t<NumberingRestartPolicies RestartPolicy=\"AnyPreviousLevel\" LowerLevel=\"0\" UpperLevel=\"0\"/>\n\t\t</Properties>\n\t</TextDefault>\n\t<DictionaryPreference Composition=\"Both\" MergeUserDictionary=\"false\" RecomposeWhenChanged=\"true\"/>\n\t<StoryPreference OpticalMarginAlignment=\"false\" OpticalMarginSize=\"12\" FrameType=\"TextFrameType\" StoryOrientation=\"Horizontal\" StoryDirection=\"LeftToRightDirection\"/>\n\t<AnchoredObjectDefault AnchorContent=\"Unassigned\" InitialAnchorHeight=\"72\" InitialAnchorWidth=\"72\" AnchoredParagraphStyle=\"ParagraphStyle/$ID/[No paragraph style]\" AnchoredObjectStyle=\"ObjectStyle/$ID/[None]\"/>\n\t<AnchoredObjectSetting AnchoredPosition=\"InlinePosition\" SpineRelative=\"false\" LockPosition=\"false\" PinPosition=\"true\" AnchorPoint=\"BottomRightAnchor\" HorizontalAlignment=\"LeftAlign\" HorizontalReferencePoint=\"TextFrame\" VerticalAlignment=\"TopAlign\" VerticalReferencePoint=\"LineBaseline\" AnchorXoffset=\"0\" AnchorYoffset=\"0\" AnchorSpaceAbove=\"0\"/>\n\t<BaselineFrameGridOption UseCustomBaselineFrameGrid=\"false\" StartingOffsetForBaselineFrameGrid=\"0\" BaselineFrameGridRelativeOption=\"TopOfInset\" BaselineFrameGridIncrement=\"12\">\n\t\t<Properties>\n\t\t\t<BaselineFrameGridColor type=\"enumeration\">LightBlue</BaselineFrameGridColor>\n\t\t</Properties>\n\t</BaselineFrameGridOption>\n\t<FootnoteOption StartAt=\"1\" Prefix=\"\" Suffix=\"\" FootnoteTextStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\" FootnoteMarkerStyle=\"CharacterStyle/$ID/[No character style]\" SeparatorText=\"&#x9;\" SpaceBetween=\"0\" Spacer=\"0\" FootnoteFirstBaselineOffset=\"LeadingOffset\" FootnoteMinimumFirstBaselineOffset=\"0\" EosPlacement=\"false\" NoSplitting=\"false\" RuleOn=\"true\" RuleLineWeight=\"1\" RuleTint=\"100\" RuleGapTint=\"100\" RuleGapOverprint=\"false\" RuleOverprint=\"false\" RuleLeftIndent=\"0\" RuleWidth=\"72\" RuleOffset=\"0\" ContinuingRuleOn=\"true\" ContinuingRuleLineWeight=\"1\" ContinuingRuleTint=\"100\" ContinuingRuleGapTint=\"100\" ContinuingRuleOverprint=\"false\" ContinuingRuleGapOverprint=\"false\" ContinuingRuleLeftIndent=\"0\" ContinuingRuleWidth=\"288\" ContinuingRuleOffset=\"0\">\n\t\t<Properties>\n\t\t\t<FootnoteNumberingStyle type=\"enumeration\">Arabic</FootnoteNumberingStyle>\n\t\t\t<RestartNumbering type=\"enumeration\">DontRestart</RestartNumbering>\n\t\t\t<ShowPrefixSuffix type=\"enumeration\">NoPrefixSuffix</ShowPrefixSuffix>\n\t\t\t<MarkerPositioning type=\"enumeration\">SuperscriptMarker</MarkerPositioning>\n\t\t\t<RuleType type=\"object\">StrokeStyle/$ID/Solid</RuleType>\n\t\t\t<RuleColor type=\"object\">Color/Black</RuleColor>\n\t\t\t<RuleGapColor type=\"object\">Swatch/None</RuleGapColor>\n\t\t\t<ContinuingRuleType type=\"object\">StrokeStyle/$ID/Solid</ContinuingRuleType>\n\t\t\t<ContinuingRuleColor type=\"object\">Color/Black</ContinuingRuleColor>\n\t\t\t<ContinuingRuleGapColor type=\"object\">Swatch/None</ContinuingRuleGapColor>\n\t\t</Properties>\n\t</FootnoteOption>\n\t<TextWrapPreference Inverse=\"false\" ApplyToMasterPageOnly=\"false\" TextWrapSide=\"BothSides\" TextWrapMode=\"None\">\n\t\t<Properties>\n\t\t\t<TextWrapOffset Top=\"0\" Left=\"0\" Bottom=\"0\" Right=\"0\"/>\n\t\t</Properties>\n\t\t<ContourOption ContourType=\"SameAsClipping\" IncludeInsideEdges=\"false\" ContourPathName=\"$ID/\"/>\n\t</TextWrapPreference>\n\t<DocumentPreference PageHeight=\"759.6850393700788\" PageWidth=\"566.9291338582677\" PagesPerDocument=\"1\" FacingPages=\"true\" DocumentBleedTopOffset=\"0\" DocumentBleedBottomOffset=\"0\" DocumentBleedInsideOrLeftOffset=\"0\" DocumentBleedOutsideOrRightOffset=\"0\" DocumentBleedUniformSize=\"true\" SlugTopOffset=\"0\" SlugBottomOffset=\"0\" SlugInsideOrLeftOffset=\"0\" SlugRightOrOutsideOffset=\"0\" DocumentSlugUniformSize=\"false\" PreserveLayoutWhenShuffling=\"true\" AllowPageShuffle=\"true\" OverprintBlack=\"true\" ColumnGuideLocked=\"true\" Intent=\"PrintIntent\" PageBinding=\"LeftToRight\" ColumnDirection=\"Horizontal\" MasterTextFrame=\"false\" SnippetImportUsesOriginalLocation=\"false\">\n\t\t<Properties>\n\t\t\t<ColumnGuideColor type=\"enumeration\">Violet</ColumnGuideColor>\n\t\t\t<MarginGuideColor type=\"enumeration\">Magenta</MarginGuideColor>\n\t\t</Properties>\n\t</DocumentPreference>\n\t<GridPreference DocumentGridShown=\"false\" DocumentGridSnapto=\"false\" HorizontalGridlineDivision=\"72\" VerticalGridlineDivision=\"72\" HorizontalGridSubdivision=\"8\" VerticalGridSubdivision=\"8\" GridsInBack=\"true\" BaselineGridShown=\"false\" BaselineStart=\"36\" BaselineDivision=\"12\" BaselineViewThreshold=\"75\" BaselineGridRelativeOption=\"TopOfPageOfBaselineGridRelativeOption\">\n\t\t<Properties>\n\t\t\t<GridColor type=\"enumeration\">LightGray</GridColor>\n\t\t\t<BaselineColor type=\"enumeration\">LightBlue</BaselineColor>\n\t\t</Properties>\n\t</GridPreference>\n\t<GuidePreference GuidesInBack=\"false\" GuidesShown=\"true\" GuidesLocked=\"false\" GuidesSnapto=\"true\" RulerGuidesViewThreshold=\"5\">\n\t\t<Properties>\n\t\t\t<RulerGuidesColor type=\"enumeration\">Cyan</RulerGuidesColor>\n\t\t</Properties>\n\t</GuidePreference>\n\t<MarginPreference ColumnCount=\"1\" ColumnGutter=\"12\" Top=\"36\" Bottom=\"36\" Left=\"36\" Right=\"36\" ColumnDirection=\"Horizontal\"/>\n\t<PasteboardPreference PasteboardMargins=\"-1 72\" MinimumSpaceAboveAndBelow=\"72\">\n\t\t<Properties>\n\t\t\t<PreviewBackgroundColor type=\"enumeration\">LightGray</PreviewBackgroundColor>\n\t\t\t<BleedGuideColor type=\"enumeration\">Fiesta</BleedGuideColor>\n\t\t\t<SlugGuideColor type=\"enumeration\">GridBlue</SlugGuideColor>\n\t\t</Properties>\n\t</PasteboardPreference>\n\t<ViewPreference PointsPerInch=\"72\" HorizontalCustomPoints=\"12\" VerticalCustomPoints=\"12\" StrokeMeasurementUnits=\"Points\" GuideSnaptoZone=\"4\" CursorKeyIncrement=\"0.70866141732283\" HorizontalMeasurementUnits=\"Millimeters\" VerticalMeasurementUnits=\"Millimeters\" RulerOrigin=\"SpreadOrigin\" ShowRulers=\"true\" ShowFrameEdges=\"true\" LineMeasurementUnits=\"Points\" TypographicMeasurementUnits=\"Points\" TextSizeMeasurementUnits=\"Points\" PrintDialogMeasurementUnits=\"Millimeters\" ShowNotes=\"true\"/>\n\t<PrintPreference PrintFile=\"\" Copies=\"1\" Collating=\"false\" ReverseOrder=\"false\" Sequence=\"All\" PrintSpreads=\"false\" PrintMasterPages=\"false\" PrintNonprinting=\"false\" PrintBlankPages=\"false\" PrintGuidesGrids=\"false\" PaperOffset=\"0\" PaperGap=\"0\" PaperTransverse=\"false\" PrintPageOrientation=\"Portrait\" PagePosition=\"UpperLeft\" ScaleMode=\"ScaleWidthHeight\" ScaleWidth=\"100\" ScaleHeight=\"100\" ScaleProportional=\"true\" Thumbnails=\"false\" ThumbnailsPerPage=\"K1x2\" Tile=\"false\" TilingType=\"Auto\" TilingOverlap=\"108\" AllPrinterMarks=\"false\" CropMarks=\"false\" BleedMarks=\"false\" RegistrationMarks=\"false\" ColorBars=\"false\" PageInformationMarks=\"false\" MarkLineWeight=\"P25pt\" MarkOffset=\"6\" UseDocumentBleedToPrint=\"true\" BleedTop=\"0\" BleedBottom=\"0\" BleedInside=\"0\" BleedOutside=\"0\" IncludeSlugToPrint=\"false\" ColorOutput=\"CompositeCMYK\" TextAsBlack=\"false\" Trapping=\"Off\" Flip=\"None\" Negative=\"false\" CompositeAngle=\"45\" CompositeFrequency=\"70\" SimulateOverprint=\"false\" PrintCyan=\"true\" CyanAngle=\"75\" CyanFrequency=\"70\" PrintMagenta=\"true\" MagentaAngle=\"15\" MagentaFrequency=\"70\" PrintYellow=\"true\" YellowAngle=\"0\" YellowFrequency=\"70\" PrintBlack=\"true\" BlackAngle=\"45\" BlackFrequency=\"70\" SendImageData=\"OptimizedSubsampling\" FontDownloading=\"Complete\" DownloadPPDFonts=\"true\" PostScriptLevel=\"Level3\" DataFormat=\"ASCII\" SourceSpace=\"UseDocument\" Intent=\"AbsoluteColorimetric\" OPIImageReplacement=\"false\" OmitEPS=\"false\" OmitPDF=\"false\" OmitBitmaps=\"false\" FlattenerPresetName=\"$ID/kFlSt_MediumDefaultName\" IgnoreSpreadOverrides=\"false\" BleedChain=\"false\" PreserveColorNumbers=\"true\" BitmapPrinting=\"true\" BitmapResolution=\"300\" PrintLayers=\"VisiblePrintableLayers\" DeviceType=\"0\" PrintTo=\"0\" PPDFile=\"$ID//var/folders/db/dbAhoNpfGpGqKqIXCmETek+++TM/-Tmp-//4f4b6d77ba96e\" PrintToDisk=\"false\" PrintRecord=\"$ID/TkJSQwMAAABGZ1BNDxgAADw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi04Ij8+Cjwh&#xa;RE9DVFlQRSBwbGlzdCBQVUJMSUMgIi0vL0FwcGxlLy9EVEQgUExJU1QgMS4wLy9FTiIgImh0dHA6&#xa;Ly93d3cuYXBwbGUuY29tL0RURHMvUHJvcGVydHlMaXN0LTEuMC5kdGQiPgo8cGxpc3QgdmVyc2lv&#xa;bj0iMS4wIj4KPGRpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdlRm9ybWF0LlBNSG9yaXpv&#xa;bnRhbFJlczwva2V5PgoJPGRpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0&#xa;b3I8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJPGFycmF5PgoJCQk8ZGljdD4K&#xa;CQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VGb3JtYXQuUE1Ib3Jpem9udGFsUmVzPC9rZXk+&#xa;CgkJCQk8cmVhbD43MjwvcmVhbD4KCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5zdGF0&#xa;ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5&#xa;PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdC5QTU9yaWVudGF0aW9u&#xa;PC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5&#xa;PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdC5QTU9yaWVudGF0aW9uPC9rZXk+CgkJCQk8aW50&#xa;ZWdlcj4xPC9pbnRlZ2VyPgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxh&#xa;Zzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8&#xa;L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdlRm9ybWF0LlBNU2NhbGluZzwva2V5PgoJ&#xa;PGRpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQk8c3Ry&#xa;aW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50&#xa;aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJPGFycmF5PgoJCQk8ZGljdD4KCQkJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LlBhZ2VGb3JtYXQuUE1TY2FsaW5nPC9rZXk+CgkJCQk8cmVhbD4xPC9yZWFsPgoJ&#xa;CQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVn&#xa;ZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC5QYWdlRm9ybWF0LlBNVmVydGljYWxSZXM8L2tleT4KCTxkaWN0PgoJCTxrZXk+&#xa;Y29tLmFwcGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUu&#xa;am9idGlja2V0PC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJh&#xa;eTwva2V5PgoJCTxhcnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdl&#xa;Rm9ybWF0LlBNVmVydGljYWxSZXM8L2tleT4KCQkJCTxyZWFsPjcyPC9yZWFsPgoJCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50&#xa;ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmlu&#xa;dC5QYWdlRm9ybWF0LlBNVmVydGljYWxTY2FsaW5nPC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRp&#xa;Y2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJyYXk8L2tl&#xa;eT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1h&#xa;dC5QTVZlcnRpY2FsU2NhbGluZzwva2V5PgoJCQkJPHJlYWw+MTwvcmVhbD4KCQkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVn&#xa;ZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;c3ViVGlja2V0LnBhcGVyX2luZm9fdGlja2V0PC9rZXk+Cgk8ZGljdD4KCQk8a2V5PlBNUFBEUGFw&#xa;ZXJDb2RlTmFtZTwva2V5PgoJCTxkaWN0PgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQu&#xa;Y3JlYXRvcjwva2V5PgoJCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQkJ&#xa;PGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCQk8YXJyYXk+CgkJ&#xa;CQk8ZGljdD4KCQkJCQk8a2V5PlBNUFBEUGFwZXJDb2RlTmFtZTwva2V5PgoJCQkJCTxzdHJpbmc+&#xa;QTQ8L3N0cmluZz4KCQkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9r&#xa;ZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4KCQk8&#xa;L2RpY3Q+CgkJPGtleT5QTVRpb2dhUGFwZXJOYW1lPC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpv&#xa;YnRpY2tldDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5&#xa;PC9rZXk+CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+UE1UaW9nYVBhcGVyTmFtZTwv&#xa;a2V5PgoJCQkJCTxzdHJpbmc+aXNvLWE0PC9zdHJpbmc+CgkJCQkJPGtleT5jb20uYXBwbGUucHJp&#xa;bnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8&#xa;L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VG&#xa;b3JtYXQuUE1BZGp1c3RlZFBhZ2VSZWN0PC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tl&#xa;dDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+&#xa;CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VGb3Jt&#xa;YXQuUE1BZGp1c3RlZFBhZ2VSZWN0PC9rZXk+CgkJCQkJPGFycmF5PgoJCQkJCQk8aW50ZWdlcj4w&#xa;PC9pbnRlZ2VyPgoJCQkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJCQkJCQk8cmVhbD43ODM8L3Jl&#xa;YWw+CgkJCQkJCTxyZWFsPjU1OTwvcmVhbD4KCQkJCQk8L2FycmF5PgoJCQkJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCQk8aW50ZWdlcj4wPC9pbnRlZ2Vy&#xa;PgoJCQkJPC9kaWN0PgoJCQk8L2FycmF5PgoJCTwvZGljdD4KCQk8a2V5PmNvbS5hcHBsZS5wcmlu&#xa;dC5QYWdlRm9ybWF0LlBNQWRqdXN0ZWRQYXBlclJlY3Q8L2tleT4KCQk8ZGljdD4KCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJPHN0cmluZz5jb20uYXBwbGUu&#xa;am9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJy&#xa;YXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;UGFnZUZvcm1hdC5QTUFkanVzdGVkUGFwZXJSZWN0PC9rZXk+CgkJCQkJPGFycmF5PgoJCQkJCQk8&#xa;cmVhbD4tMTg8L3JlYWw+CgkJCQkJCTxyZWFsPi0xODwvcmVhbD4KCQkJCQkJPHJlYWw+ODI0PC9y&#xa;ZWFsPgoJCQkJCQk8cmVhbD41Nzc8L3JlYWw+CgkJCQkJPC9hcnJheT4KCQkJCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdl&#xa;cj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4KCQk8L2RpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJp&#xa;bnQuUGFwZXJJbmZvLlBNUGFwZXJOYW1lPC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tl&#xa;dDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+&#xa;CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5m&#xa;by5QTVBhcGVyTmFtZTwva2V5PgoJCQkJCTxzdHJpbmc+aXNvLWE0PC9zdHJpbmc+CgkJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxpbnRlZ2VyPjA8&#xa;L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LlBhcGVySW5mby5QTVVuYWRqdXN0ZWRQYWdlUmVjdDwva2V5PgoJCTxkaWN0PgoJ&#xa;CQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCQk8c3RyaW5nPmNv&#xa;bS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0&#xa;Lml0ZW1BcnJheTwva2V5PgoJCQk8YXJyYXk+CgkJCQk8ZGljdD4KCQkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC5QYXBlckluZm8uUE1VbmFkanVzdGVkUGFnZVJlY3Q8L2tleT4KCQkJCQk8YXJyYXk+&#xa;CgkJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJ&#xa;CQkJCTxyZWFsPjc4MzwvcmVhbD4KCQkJCQkJPHJlYWw+NTU5PC9yZWFsPgoJCQkJCTwvYXJyYXk+&#xa;CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxp&#xa;bnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxr&#xa;ZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5mby5QTVVuYWRqdXN0ZWRQYXBlclJlY3Q8L2tleT4K&#xa;CQk8ZGljdD4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJ&#xa;PHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnBy&#xa;aW50LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQuUGFwZXJJbmZvLlBNVW5hZGp1c3RlZFBhcGVyUmVjdDwva2V5PgoJ&#xa;CQkJCTxhcnJheT4KCQkJCQkJPHJlYWw+LTE4PC9yZWFsPgoJCQkJCQk8cmVhbD4tMTg8L3JlYWw+&#xa;CgkJCQkJCTxyZWFsPjgyNDwvcmVhbD4KCQkJCQkJPHJlYWw+NTc3PC9yZWFsPgoJCQkJCTwvYXJy&#xa;YXk+CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJ&#xa;CTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJ&#xa;CTxrZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5mby5wcGQuUE1QYXBlck5hbWU8L2tleT4KCQk8&#xa;ZGljdD4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJPHN0&#xa;cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQuUGFwZXJJbmZvLnBwZC5QTVBhcGVyTmFtZTwva2V5PgoJCQkJCTxzdHJp&#xa;bmc+QTQ8L3N0cmluZz4KCQkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFn&#xa;PC9rZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4K&#xa;CQk8L2RpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LkFQSVZlcnNpb248L2tleT4K&#xa;CQk8c3RyaW5nPjAwLjIwPC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnR5&#xa;cGU8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5wcmludC5QYXBlckluZm9UaWNrZXQ8L3N0cmlu&#xa;Zz4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5BUElWZXJzaW9uPC9rZXk+&#xa;Cgk8c3RyaW5nPjAwLjIwPC9zdHJpbmc+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQudHlw&#xa;ZTwva2V5PgoJPHN0cmluZz5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdFRpY2tldDwvc3RyaW5n&#xa;Pgo8L2RpY3Q+CjwvcGxpc3Q+CnRTUE0ZDgAAPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0i&#xa;VVRGLTgiPz4KPCFET0NUWVBFIHBsaXN0IFBVQkxJQyAiLS8vQXBwbGUvL0RURCBQTElTVCAxLjAv&#xa;L0VOIiAiaHR0cDovL3d3dy5hcHBsZS5jb20vRFREcy9Qcm9wZXJ0eUxpc3QtMS4wLmR0ZCI+Cjxw&#xa;bGlzdCB2ZXJzaW9uPSIxLjAiPgo8ZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LkRvY3VtZW50&#xa;VGlja2V0LlBNU3Bvb2xGb3JtYXQ8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJp&#xa;bmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJh&#xa;eT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5Eb2N1bWVudFRpY2tldC5QTVNw&#xa;b29sRm9ybWF0PC9rZXk+CgkJCQk8c3RyaW5nPmFwcGxpY2F0aW9uL3BkZjwvc3RyaW5nPgoJCQkJ&#xa;PGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+&#xa;MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC5Kb2JJbmZvLlBNSm9iTmFtZTwva2V5PgoJPGRpY3Q+CgkJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8&#xa;L3N0cmluZz4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJ&#xa;PGFycmF5PgoJCQk8ZGljdD4KCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LkpvYkluZm8uUE1Kb2JO&#xa;YW1lPC9rZXk+CgkJCQk8c3RyaW5nPlVudGl0bGVkPC9zdHJpbmc+CgkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJ&#xa;CQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlByaW50&#xa;U2V0dGluZ3MuUE1Db2xvclN5bmNQcm9maWxlSUQ8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlj&#xa;a2V0PC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5&#xa;PgoJCTxhcnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRp&#xa;bmdzLlBNQ29sb3JTeW5jUHJvZmlsZUlEPC9rZXk+CgkJCQk8aW50ZWdlcj4xMjk0PC9pbnRlZ2Vy&#xa;PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGlu&#xa;dGVnZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNQ29waWVzPC9rZXk+Cgk8ZGljdD4KCQk8a2V5&#xa;PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxl&#xa;LmpvYnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJy&#xa;YXk8L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUHJp&#xa;bnRTZXR0aW5ncy5QTUNvcGllczwva2V5PgoJCQkJPGludGVnZXI+MTwvaW50ZWdlcj4KCQkJCTxr&#xa;ZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8&#xa;L2ludGVnZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQuUHJpbnRTZXR0aW5ncy5QTUNvcHlDb2xsYXRlPC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpv&#xa;YnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJyYXk8&#xa;L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUHJpbnRT&#xa;ZXR0aW5ncy5QTUNvcHlDb2xsYXRlPC9rZXk+CgkJCQk8dHJ1ZS8+CgkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJ&#xa;CQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlByaW50&#xa;U2V0dGluZ3MuUE1GaXJzdFBhZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJp&#xa;bmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJh&#xa;eT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNRmly&#xa;c3RQYWdlPC9rZXk+CgkJCQk8aW50ZWdlcj4xPC9pbnRlZ2VyPgoJCQkJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJ&#xa;PC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNl&#xa;dHRpbmdzLlBNTGFzdFBhZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRp&#xa;Y2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+&#xa;CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJheT4K&#xa;CQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNTGFzdFBh&#xa;Z2U8L2tleT4KCQkJCTxpbnRlZ2VyPjIxNDc0ODM2NDc8L2ludGVnZXI+CgkJCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2Vy&#xa;PgoJCQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlBy&#xa;aW50U2V0dGluZ3MuUE1QYWdlUmFuZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnBy&#xa;aW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9z&#xa;dHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxh&#xa;cnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBN&#xa;UGFnZVJhbmdlPC9rZXk+CgkJCQk8YXJyYXk+CgkJCQkJPGludGVnZXI+MTwvaW50ZWdlcj4KCQkJ&#xa;CQk8aW50ZWdlcj4yMTQ3NDgzNjQ3PC9pbnRlZ2VyPgoJCQkJPC9hcnJheT4KCQkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVn&#xa;ZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;dGlja2V0LkFQSVZlcnNpb248L2tleT4KCTxzdHJpbmc+MDAuMjA8L3N0cmluZz4KCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC50eXBlPC9rZXk+Cgk8c3RyaW5nPmNvbS5hcHBsZS5wcmludC5Q&#xa;cmludFNldHRpbmdzVGlja2V0PC9zdHJpbmc+CjwvZGljdD4KPC9wbGlzdD4Kd1ZQTQEAAAAAdHJQ&#xa;TQsAAABYUlg5MjAxXzVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\" PrintResolution=\"72\" PaperSizeSelector=\"$ID/0ExtADNYcEFpc28tYTQAZWQgVGFibG9pZCAoMTIgeCAxOCIpAGriAgBg4QL2JIAACG7iAgAAgCoA&#xa;AAAAAMnNoADJzaBggs2gAMnNoGCCzaBggs2gYILNoGCCzaAAyc2gYILNoADJzaBggs2gYILNoLzk&#xa;mZoM/gAABAAAAAAAAAAAauICAGDhAgECAAAAcGkDAgAAAAFuaQN8A6uaBAAAAAAAAAABAAAAAAIA&#xa;AABg4QIAAAAADP4AAIAAAABggs2g6FVXAAAAAAAAAAAAAQAAAAcAAAAM/kAKKNf/vwEAAAAAAAAA&#xa;DP4AAPjX/78BAAAAONz/vwFuaQMBAgAAAHBpAwBqAAEEbmkDfQOrmgYAAAAAAAAAPnUBAFjX/78B&#xa;AAAAQMGFAOzX/79o1/+/Bm5pAwZuaQMAbmkDaNf/v2NohAB8Rp0q7Nf/vwAAAACs3P+/hmiEAGxG&#xa;nSqY1/+/vmiEAKjc/78HbmkDIEmdKuzX/78kooYAlViEALjX/7/ha4QAfbCEAJVYhAC41/+/2LmE&#xa;AOzX/78gSZ0q7Nf/v/I2lJpgLpagAAAAAAAAAABosYQAAAAAAOTX/79oGRQSyseEACBJnSok2P+/&#xa;+Nf/v3am8pYAAAAAAAAAAHjc/78COZSaZC6WoAAAAABI2P+/IcqEAEDAhQAgSZ0qJNj/v2ir8pZA&#xa;Zc6gAQAAAEE0AGxvaWRFeHRyYQBMZWdhbAAAAAAAAGAulqBcdE4DWNj/vwAAAAAgSZ0qWMCFAGAu&#xa;lqAAAAAAXMCFAAAAAAAkooYA8CiIAwAAAAAAAAAAAAAAAKFw4Y+gwIUADEKdKpjY/7+Fo4QAMF9O&#xa;A7S/BSqpVPOauLPzmgAAAAAAAAAAuNj/vy+FGACd3g0AAAAAAIAeAAAAAAAAAMANAAAAAADY2P+/&#xa;w8+EAAIAAADEWfKauLPzmqXOfgDcYZ0qJNn/v/jY/7/Dz4QAZMgFKjTZ/78I2f+/w8+EAEBinSpE&#xa;2f+/GNn/v8PPhABE2f+/VNn/vyjZ/7/Dz4QAQGKdKkBinSpo2f+/IcqEAEDAhQBAYp0qRNn/v/I2&#xa;lJobAAAAJGKdKjxinSoCOZSaXMCFAAAAAAAAAAAAAAAAAGTIBSpAwIUAAAAAAJ3KhAAkYp0qJGKd&#xa;KrjZ/798zIQAWMCFAEBinSqY2f+/w8+EAMTZGABYwIUAIGKdKhgAAAAkYp0qJGKdKujZ/78a8xgA&#xa;ZGKdKvTZ/7/I2f+/w8+EAPTZ/78AAAAA6Nn/v+b/gwBkYp0qZGKdKhja/78hyoQAQMCFAGRinSr4&#xa;2f+/haOEAIhinSo02v+/CNr/v8PPhAA02v+/AAAAABja/7+hhoYAiGKdKohinSpY2v+/IcqEAEDA&#xa;hQCIYp0qAAAAAACYgkAAAAAAAFCKQAAAAAAAAChAAAAAAAAAKEAAAAAAAAAoQAAAAAAAAChA\" PaperHeightRange=\"595 1295\" PaperWidthRange=\"295 907\" PaperOffsetRange=\"0 0\" SeparationScreening=\"$ID/kDefault\" CompositeScreening=\"$ID/kDefault\" SpotAngle=\"45\" SpotFrequency=\"70\">\n\t\t<Properties>\n\t\t\t<Printer type=\"string\">ColorQube 9201 &quot;XRX9201_5e&quot;</Printer>\n\t\t\t<PPD type=\"string\">Xerox ColorQube 9201</PPD>\n\t\t\t<PaperSize type=\"string\">A4</PaperSize>\n\t\t\t<PaperHeight type=\"enumeration\">Auto</PaperHeight>\n\t\t\t<PaperWidth type=\"enumeration\">Auto</PaperWidth>\n\t\t\t<MarkType type=\"enumeration\">Default</MarkType>\n\t\t\t<Screening type=\"enumeration\">Default</Screening>\n\t\t\t<Profile type=\"enumeration\">UseDocument</Profile>\n\t\t\t<CRD type=\"enumeration\">Default</CRD>\n\t\t\t<PageRange type=\"enumeration\">AllPages</PageRange>\n\t\t\t<PaperSizeRect Left=\"0\" Top=\"0\" Right=\"595\" Bottom=\"842\"/>\n\t\t\t<ImageablePaperSizeRect Left=\"12\" Top=\"12\" Right=\"583\" Bottom=\"830\"/>\n\t\t\t<ActivePrinterPreset type=\"enumeration\">Default</ActivePrinterPreset>\n\t\t</Properties>\n\t</PrintPreference>\n\t<PrintBookletOption BookletType=\"TwoUpSaddleStitch\" SpaceBetweenPages=\"0\" BleedBetweenPages=\"0\" Creep=\"0\" SignatureSize=\"SignatureSize4\" TopMargin=\"36\" BottomMargin=\"36\" LeftMargin=\"36\" RightMargin=\"36\" AutoAdjustMargins=\"true\" MarginsUniformSize=\"false\" PrintBlankPrinterSpreads=\"true\">\n\t\t<Properties>\n\t\t\t<PageRange type=\"enumeration\">AllPages</PageRange>\n\t\t</Properties>\n\t</PrintBookletOption>\n\t<PrintBookletPrintPreference PrinterList=\"\" PPDList=\"\" PaperSizeList=\"\" ScreeningList=\"\" PrintFile=\"\" Copies=\"1\" Collating=\"false\" ReverseOrder=\"false\" PrintNonprinting=\"false\" PrintBlankPages=\"false\" PrintGuidesGrids=\"false\" PaperOffset=\"0\" PaperGap=\"0\" PaperTransverse=\"false\" PrintPageOrientation=\"Portrait\" PagePosition=\"UpperLeft\" ScaleMode=\"ScaleWidthHeight\" ScaleWidth=\"100\" ScaleHeight=\"100\" ScaleProportional=\"true\" PrintLayers=\"VisiblePrintableLayers\" AllPrinterMarks=\"false\" CropMarks=\"false\" BleedMarks=\"false\" RegistrationMarks=\"false\" ColorBars=\"false\" PageInformationMarks=\"false\" MarkLineWeight=\"P25pt\" MarkOffset=\"6\" UseDocumentBleedToPrint=\"true\" BleedTop=\"0\" BleedBottom=\"0\" BleedInside=\"0\" BleedOutside=\"0\" BleedChain=\"false\" ColorOutput=\"CompositeCMYK\" TextAsBlack=\"false\" Trapping=\"Off\" Flip=\"None\" Negative=\"false\" CompositeAngle=\"45\" CompositeFrequency=\"70\" SimulateOverprint=\"false\" PrintCyan=\"true\" CyanAngle=\"75\" CyanFrequency=\"70\" PrintMagenta=\"true\" MagentaAngle=\"15\" MagentaFrequency=\"70\" PrintYellow=\"true\" YellowAngle=\"0\" YellowFrequency=\"70\" PrintBlack=\"true\" BlackAngle=\"45\" BlackFrequency=\"70\" SendImageData=\"OptimizedSubsampling\" FontDownloading=\"Complete\" DownloadPPDFonts=\"true\" PostScriptLevel=\"Level3\" DataFormat=\"ASCII\" SourceSpace=\"UseDocument\" Intent=\"AbsoluteColorimetric\" PreserveColorNumbers=\"true\" OPIImageReplacement=\"false\" OmitEPS=\"false\" OmitPDF=\"false\" OmitBitmaps=\"false\" FlattenerPresetName=\"$ID/kFlSt_MediumDefaultName\" IgnoreSpreadOverrides=\"false\" BitmapPrinting=\"true\" BitmapResolution=\"300\" DeviceType=\"0\" PrintTo=\"0\" PPDFile=\"$ID//var/folders/db/dbAhoNpfGpGqKqIXCmETek+++TM/-Tmp-//4f4b6d77ba96e\" PrintToDisk=\"false\" PrintRecord=\"$ID/TkJSQwMAAABGZ1BNDxgAADw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi04Ij8+Cjwh&#xa;RE9DVFlQRSBwbGlzdCBQVUJMSUMgIi0vL0FwcGxlLy9EVEQgUExJU1QgMS4wLy9FTiIgImh0dHA6&#xa;Ly93d3cuYXBwbGUuY29tL0RURHMvUHJvcGVydHlMaXN0LTEuMC5kdGQiPgo8cGxpc3QgdmVyc2lv&#xa;bj0iMS4wIj4KPGRpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdlRm9ybWF0LlBNSG9yaXpv&#xa;bnRhbFJlczwva2V5PgoJPGRpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0&#xa;b3I8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJPGFycmF5PgoJCQk8ZGljdD4K&#xa;CQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VGb3JtYXQuUE1Ib3Jpem9udGFsUmVzPC9rZXk+&#xa;CgkJCQk8cmVhbD43MjwvcmVhbD4KCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5zdGF0&#xa;ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5&#xa;PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdC5QTU9yaWVudGF0aW9u&#xa;PC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5&#xa;PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdC5QTU9yaWVudGF0aW9uPC9rZXk+CgkJCQk8aW50&#xa;ZWdlcj4xPC9pbnRlZ2VyPgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxh&#xa;Zzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8&#xa;L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdlRm9ybWF0LlBNU2NhbGluZzwva2V5PgoJ&#xa;PGRpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQk8c3Ry&#xa;aW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50&#xa;aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJPGFycmF5PgoJCQk8ZGljdD4KCQkJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LlBhZ2VGb3JtYXQuUE1TY2FsaW5nPC9rZXk+CgkJCQk8cmVhbD4xPC9yZWFsPgoJ&#xa;CQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVn&#xa;ZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC5QYWdlRm9ybWF0LlBNVmVydGljYWxSZXM8L2tleT4KCTxkaWN0PgoJCTxrZXk+&#xa;Y29tLmFwcGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUu&#xa;am9idGlja2V0PC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJh&#xa;eTwva2V5PgoJCTxhcnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QYWdl&#xa;Rm9ybWF0LlBNVmVydGljYWxSZXM8L2tleT4KCQkJCTxyZWFsPjcyPC9yZWFsPgoJCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50&#xa;ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmlu&#xa;dC5QYWdlRm9ybWF0LlBNVmVydGljYWxTY2FsaW5nPC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRp&#xa;Y2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJyYXk8L2tl&#xa;eT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1h&#xa;dC5QTVZlcnRpY2FsU2NhbGluZzwva2V5PgoJCQkJPHJlYWw+MTwvcmVhbD4KCQkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVn&#xa;ZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;c3ViVGlja2V0LnBhcGVyX2luZm9fdGlja2V0PC9rZXk+Cgk8ZGljdD4KCQk8a2V5PlBNUFBEUGFw&#xa;ZXJDb2RlTmFtZTwva2V5PgoJCTxkaWN0PgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQu&#xa;Y3JlYXRvcjwva2V5PgoJCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQkJ&#xa;PGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCQk8YXJyYXk+CgkJ&#xa;CQk8ZGljdD4KCQkJCQk8a2V5PlBNUFBEUGFwZXJDb2RlTmFtZTwva2V5PgoJCQkJCTxzdHJpbmc+&#xa;QTQ8L3N0cmluZz4KCQkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9r&#xa;ZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4KCQk8&#xa;L2RpY3Q+CgkJPGtleT5QTVRpb2dhUGFwZXJOYW1lPC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpv&#xa;YnRpY2tldDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5&#xa;PC9rZXk+CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+UE1UaW9nYVBhcGVyTmFtZTwv&#xa;a2V5PgoJCQkJCTxzdHJpbmc+aXNvLWE0PC9zdHJpbmc+CgkJCQkJPGtleT5jb20uYXBwbGUucHJp&#xa;bnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8&#xa;L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VG&#xa;b3JtYXQuUE1BZGp1c3RlZFBhZ2VSZWN0PC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tl&#xa;dDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+&#xa;CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhZ2VGb3Jt&#xa;YXQuUE1BZGp1c3RlZFBhZ2VSZWN0PC9rZXk+CgkJCQkJPGFycmF5PgoJCQkJCQk8aW50ZWdlcj4w&#xa;PC9pbnRlZ2VyPgoJCQkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJCQkJCQk8cmVhbD43ODM8L3Jl&#xa;YWw+CgkJCQkJCTxyZWFsPjU1OTwvcmVhbD4KCQkJCQk8L2FycmF5PgoJCQkJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCQk8aW50ZWdlcj4wPC9pbnRlZ2Vy&#xa;PgoJCQkJPC9kaWN0PgoJCQk8L2FycmF5PgoJCTwvZGljdD4KCQk8a2V5PmNvbS5hcHBsZS5wcmlu&#xa;dC5QYWdlRm9ybWF0LlBNQWRqdXN0ZWRQYXBlclJlY3Q8L2tleT4KCQk8ZGljdD4KCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJPHN0cmluZz5jb20uYXBwbGUu&#xa;am9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJy&#xa;YXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;UGFnZUZvcm1hdC5QTUFkanVzdGVkUGFwZXJSZWN0PC9rZXk+CgkJCQkJPGFycmF5PgoJCQkJCQk8&#xa;cmVhbD4tMTg8L3JlYWw+CgkJCQkJCTxyZWFsPi0xODwvcmVhbD4KCQkJCQkJPHJlYWw+ODI0PC9y&#xa;ZWFsPgoJCQkJCQk8cmVhbD41Nzc8L3JlYWw+CgkJCQkJPC9hcnJheT4KCQkJCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdl&#xa;cj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4KCQk8L2RpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJp&#xa;bnQuUGFwZXJJbmZvLlBNUGFwZXJOYW1lPC9rZXk+CgkJPGRpY3Q+CgkJCTxrZXk+Y29tLmFwcGxl&#xa;LnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJCTxzdHJpbmc+Y29tLmFwcGxlLmpvYnRpY2tl&#xa;dDwvc3RyaW5nPgoJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+&#xa;CgkJCTxhcnJheT4KCQkJCTxkaWN0PgoJCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5m&#xa;by5QTVBhcGVyTmFtZTwva2V5PgoJCQkJCTxzdHJpbmc+aXNvLWE0PC9zdHJpbmc+CgkJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxpbnRlZ2VyPjA8&#xa;L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LlBhcGVySW5mby5QTVVuYWRqdXN0ZWRQYWdlUmVjdDwva2V5PgoJCTxkaWN0PgoJ&#xa;CQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCQk8c3RyaW5nPmNv&#xa;bS5hcHBsZS5qb2J0aWNrZXQ8L3N0cmluZz4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0&#xa;Lml0ZW1BcnJheTwva2V5PgoJCQk8YXJyYXk+CgkJCQk8ZGljdD4KCQkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC5QYXBlckluZm8uUE1VbmFkanVzdGVkUGFnZVJlY3Q8L2tleT4KCQkJCQk8YXJyYXk+&#xa;CgkJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQkJCTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJ&#xa;CQkJCTxyZWFsPjc4MzwvcmVhbD4KCQkJCQkJPHJlYWw+NTU5PC9yZWFsPgoJCQkJCTwvYXJyYXk+&#xa;CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJCTxp&#xa;bnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJCTxr&#xa;ZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5mby5QTVVuYWRqdXN0ZWRQYXBlclJlY3Q8L2tleT4K&#xa;CQk8ZGljdD4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJ&#xa;PHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnBy&#xa;aW50LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtl&#xa;eT5jb20uYXBwbGUucHJpbnQuUGFwZXJJbmZvLlBNVW5hZGp1c3RlZFBhcGVyUmVjdDwva2V5PgoJ&#xa;CQkJCTxhcnJheT4KCQkJCQkJPHJlYWw+LTE4PC9yZWFsPgoJCQkJCQk8cmVhbD4tMTg8L3JlYWw+&#xa;CgkJCQkJCTxyZWFsPjgyNDwvcmVhbD4KCQkJCQkJPHJlYWw+NTc3PC9yZWFsPgoJCQkJCTwvYXJy&#xa;YXk+CgkJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJ&#xa;CTxpbnRlZ2VyPjA8L2ludGVnZXI+CgkJCQk8L2RpY3Q+CgkJCTwvYXJyYXk+CgkJPC9kaWN0PgoJ&#xa;CTxrZXk+Y29tLmFwcGxlLnByaW50LlBhcGVySW5mby5wcGQuUE1QYXBlck5hbWU8L2tleT4KCQk8&#xa;ZGljdD4KCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQkJPHN0&#xa;cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+CgkJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5pdGVtQXJyYXk8L2tleT4KCQkJPGFycmF5PgoJCQkJPGRpY3Q+CgkJCQkJPGtleT5j&#xa;b20uYXBwbGUucHJpbnQuUGFwZXJJbmZvLnBwZC5QTVBhcGVyTmFtZTwva2V5PgoJCQkJCTxzdHJp&#xa;bmc+QTQ8L3N0cmluZz4KCQkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFn&#xa;PC9rZXk+CgkJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJCTwvZGljdD4KCQkJPC9hcnJheT4K&#xa;CQk8L2RpY3Q+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LkFQSVZlcnNpb248L2tleT4K&#xa;CQk8c3RyaW5nPjAwLjIwPC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnR5&#xa;cGU8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5wcmludC5QYXBlckluZm9UaWNrZXQ8L3N0cmlu&#xa;Zz4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5BUElWZXJzaW9uPC9rZXk+&#xa;Cgk8c3RyaW5nPjAwLjIwPC9zdHJpbmc+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQudHlw&#xa;ZTwva2V5PgoJPHN0cmluZz5jb20uYXBwbGUucHJpbnQuUGFnZUZvcm1hdFRpY2tldDwvc3RyaW5n&#xa;Pgo8L2RpY3Q+CjwvcGxpc3Q+CnRTUE0ZDgAAPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0i&#xa;VVRGLTgiPz4KPCFET0NUWVBFIHBsaXN0IFBVQkxJQyAiLS8vQXBwbGUvL0RURCBQTElTVCAxLjAv&#xa;L0VOIiAiaHR0cDovL3d3dy5hcHBsZS5jb20vRFREcy9Qcm9wZXJ0eUxpc3QtMS4wLmR0ZCI+Cjxw&#xa;bGlzdCB2ZXJzaW9uPSIxLjAiPgo8ZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LkRvY3VtZW50&#xa;VGlja2V0LlBNU3Bvb2xGb3JtYXQ8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJp&#xa;bmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJh&#xa;eT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5Eb2N1bWVudFRpY2tldC5QTVNw&#xa;b29sRm9ybWF0PC9rZXk+CgkJCQk8c3RyaW5nPmFwcGxpY2F0aW9uL3BkZjwvc3RyaW5nPgoJCQkJ&#xa;PGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+&#xa;MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC5Kb2JJbmZvLlBNSm9iTmFtZTwva2V5PgoJPGRpY3Q+CgkJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQudGlja2V0LmNyZWF0b3I8L2tleT4KCQk8c3RyaW5nPmNvbS5hcHBsZS5qb2J0aWNrZXQ8&#xa;L3N0cmluZz4KCQk8a2V5PmNvbS5hcHBsZS5wcmludC50aWNrZXQuaXRlbUFycmF5PC9rZXk+CgkJ&#xa;PGFycmF5PgoJCQk8ZGljdD4KCQkJCTxrZXk+Y29tLmFwcGxlLnByaW50LkpvYkluZm8uUE1Kb2JO&#xa;YW1lPC9rZXk+CgkJCQk8c3RyaW5nPlVudGl0bGVkPC9zdHJpbmc+CgkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJ&#xa;CQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlByaW50&#xa;U2V0dGluZ3MuUE1Db2xvclN5bmNQcm9maWxlSUQ8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFw&#xa;cGxlLnByaW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlj&#xa;a2V0PC9zdHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5&#xa;PgoJCTxhcnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRp&#xa;bmdzLlBNQ29sb3JTeW5jUHJvZmlsZUlEPC9rZXk+CgkJCQk8aW50ZWdlcj4xMjk0PC9pbnRlZ2Vy&#xa;PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGlu&#xa;dGVnZXI+MDwvaW50ZWdlcj4KCQkJPC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNQ29waWVzPC9rZXk+Cgk8ZGljdD4KCQk8a2V5&#xa;PmNvbS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxl&#xa;LmpvYnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJy&#xa;YXk8L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUHJp&#xa;bnRTZXR0aW5ncy5QTUNvcGllczwva2V5PgoJCQkJPGludGVnZXI+MTwvaW50ZWdlcj4KCQkJCTxr&#xa;ZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8&#xa;L2ludGVnZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQuUHJpbnRTZXR0aW5ncy5QTUNvcHlDb2xsYXRlPC9rZXk+Cgk8ZGljdD4KCQk8a2V5PmNv&#xa;bS5hcHBsZS5wcmludC50aWNrZXQuY3JlYXRvcjwva2V5PgoJCTxzdHJpbmc+Y29tLmFwcGxlLmpv&#xa;YnRpY2tldDwvc3RyaW5nPgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRpY2tldC5pdGVtQXJyYXk8&#xa;L2tleT4KCQk8YXJyYXk+CgkJCTxkaWN0PgoJCQkJPGtleT5jb20uYXBwbGUucHJpbnQuUHJpbnRT&#xa;ZXR0aW5ncy5QTUNvcHlDb2xsYXRlPC9rZXk+CgkJCQk8dHJ1ZS8+CgkJCQk8a2V5PmNvbS5hcHBs&#xa;ZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2VyPgoJ&#xa;CQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlByaW50&#xa;U2V0dGluZ3MuUE1GaXJzdFBhZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50&#xa;LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJp&#xa;bmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJh&#xa;eT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNRmly&#xa;c3RQYWdlPC9rZXk+CgkJCQk8aW50ZWdlcj4xPC9pbnRlZ2VyPgoJCQkJPGtleT5jb20uYXBwbGUu&#xa;cHJpbnQudGlja2V0LnN0YXRlRmxhZzwva2V5PgoJCQkJPGludGVnZXI+MDwvaW50ZWdlcj4KCQkJ&#xa;PC9kaWN0PgoJCTwvYXJyYXk+Cgk8L2RpY3Q+Cgk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNl&#xa;dHRpbmdzLlBNTGFzdFBhZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnByaW50LnRp&#xa;Y2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9zdHJpbmc+&#xa;CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxhcnJheT4K&#xa;CQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBNTGFzdFBh&#xa;Z2U8L2tleT4KCQkJCTxpbnRlZ2VyPjIxNDc0ODM2NDc8L2ludGVnZXI+CgkJCQk8a2V5PmNvbS5h&#xa;cHBsZS5wcmludC50aWNrZXQuc3RhdGVGbGFnPC9rZXk+CgkJCQk8aW50ZWdlcj4wPC9pbnRlZ2Vy&#xa;PgoJCQk8L2RpY3Q+CgkJPC9hcnJheT4KCTwvZGljdD4KCTxrZXk+Y29tLmFwcGxlLnByaW50LlBy&#xa;aW50U2V0dGluZ3MuUE1QYWdlUmFuZ2U8L2tleT4KCTxkaWN0PgoJCTxrZXk+Y29tLmFwcGxlLnBy&#xa;aW50LnRpY2tldC5jcmVhdG9yPC9rZXk+CgkJPHN0cmluZz5jb20uYXBwbGUuam9idGlja2V0PC9z&#xa;dHJpbmc+CgkJPGtleT5jb20uYXBwbGUucHJpbnQudGlja2V0Lml0ZW1BcnJheTwva2V5PgoJCTxh&#xa;cnJheT4KCQkJPGRpY3Q+CgkJCQk8a2V5PmNvbS5hcHBsZS5wcmludC5QcmludFNldHRpbmdzLlBN&#xa;UGFnZVJhbmdlPC9rZXk+CgkJCQk8YXJyYXk+CgkJCQkJPGludGVnZXI+MTwvaW50ZWdlcj4KCQkJ&#xa;CQk8aW50ZWdlcj4yMTQ3NDgzNjQ3PC9pbnRlZ2VyPgoJCQkJPC9hcnJheT4KCQkJCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC5zdGF0ZUZsYWc8L2tleT4KCQkJCTxpbnRlZ2VyPjA8L2ludGVn&#xa;ZXI+CgkJCTwvZGljdD4KCQk8L2FycmF5PgoJPC9kaWN0PgoJPGtleT5jb20uYXBwbGUucHJpbnQu&#xa;dGlja2V0LkFQSVZlcnNpb248L2tleT4KCTxzdHJpbmc+MDAuMjA8L3N0cmluZz4KCTxrZXk+Y29t&#xa;LmFwcGxlLnByaW50LnRpY2tldC50eXBlPC9rZXk+Cgk8c3RyaW5nPmNvbS5hcHBsZS5wcmludC5Q&#xa;cmludFNldHRpbmdzVGlja2V0PC9zdHJpbmc+CjwvZGljdD4KPC9wbGlzdD4Kd1ZQTQEAAAAAdHJQ&#xa;TQsAAABYUlg5MjAxXzVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#xa;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\" PrintResolution=\"72\" PaperSizeSelector=\"$ID/0ExtADNYcEFpc28tYTQAZWQgVGFibG9pZCAoMTIgeCAxOCIpAGriAgBg4QL2JIAACG7iAgAAgCoA&#xa;AAAAAMnNoADJzaBggs2gAMnNoGCCzaBggs2gYILNoGCCzaAAyc2gYILNoADJzaBggs2gYILNoLzk&#xa;mZoM/gAABAAAAAAAAAAAauICAGDhAgECAAAAcGkDAgAAAAFuaQN8A6uaBAAAAAAAAAABAAAAAAIA&#xa;AABg4QIAAAAADP4AAIAAAABggs2g6FVXAAAAAAAAAAAAAQAAAAcAAAAM/kAKKNf/vwEAAAAAAAAA&#xa;DP4AAPjX/78BAAAAONz/vwFuaQMBAgAAAHBpAwBqAAEEbmkDfQOrmgYAAAAAAAAAPnUBAFjX/78B&#xa;AAAAQMGFAOzX/79o1/+/Bm5pAwZuaQMAbmkDaNf/v2NohAB8Rp0q7Nf/vwAAAACs3P+/hmiEAGxG&#xa;nSqY1/+/vmiEAKjc/78HbmkDIEmdKuzX/78kooYAlViEALjX/7/ha4QAfbCEAJVYhAC41/+/2LmE&#xa;AOzX/78gSZ0q7Nf/v/I2lJpgLpagAAAAAAAAAABosYQAAAAAAOTX/79oGRQSyseEACBJnSok2P+/&#xa;+Nf/v3am8pYAAAAAAAAAAHjc/78COZSaZC6WoAAAAABI2P+/IcqEAEDAhQAgSZ0qJNj/v2ir8pZA&#xa;Zc6gAQAAAEE0AGxvaWRFeHRyYQBMZWdhbAAAAAAAAGAulqBcdE4DWNj/vwAAAAAgSZ0qWMCFAGAu&#xa;lqAAAAAAXMCFAAAAAAAkooYA8CiIAwAAAAAAAAAAAAAAAKFw4Y+gwIUADEKdKpjY/7+Fo4QAMF9O&#xa;A7S/BSqpVPOauLPzmgAAAAAAAAAAuNj/vy+FGACd3g0AAAAAAIAeAAAAAAAAAMANAAAAAADY2P+/&#xa;w8+EAAIAAADEWfKauLPzmqXOfgDcYZ0qJNn/v/jY/7/Dz4QAZMgFKjTZ/78I2f+/w8+EAEBinSpE&#xa;2f+/GNn/v8PPhABE2f+/VNn/vyjZ/7/Dz4QAQGKdKkBinSpo2f+/IcqEAEDAhQBAYp0qRNn/v/I2&#xa;lJobAAAAJGKdKjxinSoCOZSaXMCFAAAAAAAAAAAAAAAAAGTIBSpAwIUAAAAAAJ3KhAAkYp0qJGKd&#xa;KrjZ/798zIQAWMCFAEBinSqY2f+/w8+EAMTZGABYwIUAIGKdKhgAAAAkYp0qJGKdKujZ/78a8xgA&#xa;ZGKdKvTZ/7/I2f+/w8+EAPTZ/78AAAAA6Nn/v+b/gwBkYp0qZGKdKhja/78hyoQAQMCFAGRinSr4&#xa;2f+/haOEAIhinSo02v+/CNr/v8PPhAA02v+/AAAAABja/7+hhoYAiGKdKohinSpY2v+/IcqEAEDA&#xa;hQCIYp0qAAAAAACYgkAAAAAAAFCKQAAAAAAAAChAAAAAAAAAKEAAAAAAAAAoQAAAAAAAAChA\" PaperHeightRange=\"595 1295\" PaperWidthRange=\"295 907\" PaperOffsetRange=\"0 0\" SeparationScreening=\"$ID/kDefault\" CompositeScreening=\"$ID/kDefault\" SpotAngle=\"45\" SpotFrequency=\"70\">\n\t\t<Properties>\n\t\t\t<Printer type=\"string\">ColorQube 9201 &quot;XRX9201_5e&quot;</Printer>\n\t\t\t<PPD type=\"string\">Xerox ColorQube 9201</PPD>\n\t\t\t<PaperSize type=\"string\">A4</PaperSize>\n\t\t\t<PaperHeight type=\"enumeration\">Auto</PaperHeight>\n\t\t\t<PaperWidth type=\"enumeration\">Auto</PaperWidth>\n\t\t\t<MarkType type=\"enumeration\">Default</MarkType>\n\t\t\t<Screening type=\"enumeration\">Default</Screening>\n\t\t\t<Profile type=\"enumeration\">UseDocument</Profile>\n\t\t\t<CRD type=\"enumeration\">Default</CRD>\n\t\t\t<ActivePrinterPreset type=\"enumeration\">Default</ActivePrinterPreset>\n\t\t\t<PaperSizeRect Left=\"0\" Top=\"0\" Right=\"595\" Bottom=\"842\"/>\n\t\t\t<ImageablePaperSizeRect Left=\"12\" Top=\"12\" Right=\"583\" Bottom=\"830\"/>\n\t\t</Properties>\n\t</PrintBookletPrintPreference>\n\t<IndexOptions Title=\"Index\" TitleStyle=\"ParagraphStyle/$ID/[No paragraph style]\" ReplaceExistingIndex=\"true\" IncludeBookDocuments=\"false\" IncludeHiddenEntries=\"false\" IndexFormat=\"NestedFormat\" IncludeSectionHeadings=\"true\" IncludeEmptyIndexSections=\"false\" Level1Style=\"ParagraphStyle/$ID/[No paragraph style]\" Level2Style=\"ParagraphStyle/$ID/[No paragraph style]\" Level3Style=\"ParagraphStyle/$ID/[No paragraph style]\" Level4Style=\"ParagraphStyle/$ID/[No paragraph style]\" SectionHeadingStyle=\"ParagraphStyle/$ID/[No paragraph style]\" PageNumberStyle=\"CharacterStyle/$ID/[No character style]\" CrossReferenceStyle=\"CharacterStyle/$ID/[No character style]\" CrossReferenceTopicStyle=\"CharacterStyle/$ID/[No character style]\" FollowingTopicSeparator=\"  \" BetweenEntriesSeparator=\"; \" PageRangeSeparator=\"^=\" BetweenPageNumbersSeparator=\", \" BeforeCrossReferenceSeparator=\". \" EntryEndSeparator=\"\"/>\n\t<IndexHeaderSetting HeaderSetName=\"$ID/\" HeaderSetLanguage=\"256\" IndexHeaderSetHandler=\"77882\" IndexHeaderSetGroupValue=\"0\" IndexHeaderSetGroupOptionValue=\"0\">\n\t\t<Properties>\n\t\t\t<ListOfIndexHeaderGroup>\n\t\t\t\t<IndexHeaderGroupType InternalName=\"kIndexGroup_Symbol\" UIString=\"$ID/kIndexGroup_Symbol\" DocumentString=\"$ID/\" Visibility=\"false\">\n\t\t\t\t\t<SectionHeaderArray>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_Symbol\" Language=\"256\"/>\n\t\t\t\t\t</SectionHeaderArray>\n\t\t\t\t</IndexHeaderGroupType>\n\t\t\t\t<IndexHeaderGroupType InternalName=\"$ID/IDX_Basic\" UIString=\"$ID/kIndexGroup_Alphabet\" DocumentString=\"$ID/\" Visibility=\"false\">\n\t\t\t\t\t<SectionHeaderArray>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/A\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_A\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/B\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_B\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/C\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_C\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/D\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_D\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/E\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_E\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/F\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_F\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/G\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_G\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/H\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_H\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/I\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_I\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/J\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_J\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/K\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_K\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/L\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_L\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/M\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_M\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/N\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_N\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/O\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_O\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/P\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_P\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/Q\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_Q\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/R\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_R\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/S\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_S\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/T\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_T\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/U\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_U\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/V\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_V\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/W\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_W\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/X\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_X\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/Y\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_Y\" Language=\"256\"/>\n\t\t\t\t\t\t<SectionHeaderType SortingHeaderString=\"$ID/Z\" DocumentHeaderString=\"$ID/\" UIHeaderString=\"$ID/kIndexSection_Z\" Language=\"256\"/>\n\t\t\t\t\t</SectionHeaderArray>\n\t\t\t\t</IndexHeaderGroupType>\n\t\t\t</ListOfIndexHeaderGroup>\n\t\t</Properties>\n\t</IndexHeaderSetting>\n\t<PageItemDefault TopLeftCornerOption=\"None\" TopRightCornerOption=\"None\" BottomLeftCornerOption=\"None\" BottomRightCornerOption=\"None\" TopLeftCornerRadius=\"12\" TopRightCornerRadius=\"12\" BottomLeftCornerRadius=\"12\" BottomRightCornerRadius=\"12\" AppliedGraphicObjectStyle=\"ObjectStyle/$ID/[Normal Graphics Frame]\" AppliedTextObjectStyle=\"ObjectStyle/$ID/[Normal Text Frame]\" AppliedGridObjectStyle=\"ObjectStyle/$ID/[Normal Grid]\" CornerOption=\"None\" CornerRadius=\"12\" FillColor=\"Swatch/None\" FillTint=\"-1\" StrokeWeight=\"1\" MiterLimit=\"4\" EndCap=\"ButtEndCap\" EndJoin=\"MiterEndJoin\" StrokeType=\"StrokeStyle/$ID/Solid\" LeftLineEnd=\"None\" RightLineEnd=\"None\" StrokeColor=\"Swatch/None\" StrokeTint=\"-1\" GradientFillAngle=\"0\" GradientStrokeAngle=\"0\" GapColor=\"Swatch/None\" GapTint=\"-1\" StrokeAlignment=\"CenterAlignment\" Nonprinting=\"false\">\n\t</PageItemDefault>\n\t<FrameFittingOption AutoFit=\"false\" LeftCrop=\"0\" TopCrop=\"0\" RightCrop=\"0\" BottomCrop=\"0\" FittingOnEmptyFrame=\"None\" FittingAlignment=\"TopLeftAnchor\"/>\n\t<ButtonPreference Name=\"\"/>\n\t<TinDocumentDataObject>\n\t\t<Properties>\n\t\t\t<GaijiRefMaps><![CDATA[/////wAAAAAAAAAA]]></GaijiRefMaps>\n\t\t</Properties>\n\t</TinDocumentDataObject>\n\t<LayoutGridDataInformation FontStyle=\"Regular\" PointSize=\"12\" CharacterAki=\"0\" LineAki=\"9\" HorizontalScale=\"100\" VerticalScale=\"100\">\n\t\t<Properties>\n\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t</Properties>\n\t</LayoutGridDataInformation>\n\t<StoryGridDataInformation FontStyle=\"Regular\" PointSize=\"12\" CharacterAki=\"0\" LineAki=\"9\" HorizontalScale=\"100\" VerticalScale=\"100\" LineAlignment=\"LeftOrTopLineJustify\" GridAlignment=\"AlignEmCenter\" CharacterAlignment=\"AlignEmCenter\" GridView=\"GridViewEnum\" CharacterCountLocation=\"BottomAlign\" CharacterCountSize=\"9.21259842519685\">\n\t\t<Properties>\n\t\t\t<AppliedFont type=\"string\">Minion Pro</AppliedFont>\n\t\t</Properties>\n\t</StoryGridDataInformation>\n\t<CjkGridPreference ShowAllLayoutGrids=\"false\" ShowAllFrameGrids=\"true\" MinimumScale=\"50\" SnapToLayoutGrid=\"false\" ColorEveryNthCell=\"10\" SingleLineColorMode=\"true\" ICFMode=\"false\" UseCircularCells=\"false\" ShowCharacterCount=\"true\">\n\t\t<Properties>\n\t\t\t<LayoutGridColorIndex type=\"enumeration\">GridGreen</LayoutGridColorIndex>\n\t\t</Properties>\n\t</CjkGridPreference>\n\t<MojikumiUiPreference MojikumiUiSettings=\"16383\"/>\n\t<ChapterNumberPreference ChapterNumber=\"1\" ChapterNumberSource=\"ContinueFromPreviousDocument\">\n\t\t<Properties>\n\t\t\t<ChapterNumberFormat type=\"string\">1, 2, 3, 4...</ChapterNumberFormat>\n\t\t</Properties>\n\t</ChapterNumberPreference>\n\t<DataMergeOption FittingOption=\"Proportional\" CenterImage=\"false\" LinkImages=\"true\" RemoveBlankLines=\"false\" CreateNewDocument=\"false\" DocumentSize=\"50\"/>\n\t<LayoutAdjustmentPreference EnableLayoutAdjustment=\"false\" SnapZone=\"0.70866141732283\" AllowGraphicsToResize=\"true\" AllowRulerGuidesToMove=\"true\" IgnoreRulerGuideAlignments=\"false\" IgnoreObjectOrLayerLocks=\"true\"/>\n\t<EPubExportPreference IncludeDocumentMetadata=\"true\" EpubPublisher=\"\" Id=\"\" ExportOrder=\"LayoutOrder\" EpubCover=\"FirstPage\" CoverImageFile=\"\" BulletExportOption=\"UnorderedList\" NumberedListExportOption=\"OrderedList\" LeftMargin=\"0.5\" RightMargin=\"0.5\" TopMargin=\"0.5\" BottomMargin=\"0.5\" MarginUnit=\"CssEm\" ViewDocumentAfterExport=\"true\" ImageExportResolution=\"Ppi150\" CustomImageSizeOption=\"SizeFixed\" PreserveLayoutAppearence=\"true\" ImageAlignment=\"AlignCenter\" ImageSpaceBefore=\"0\" ImageSpaceAfter=\"0\" SpaceUnit=\"CssEm\" ApplyImageAlignmentToAnchoredObjectSettings=\"false\" UseImagePageBreak=\"false\" ImagePageBreak=\"PageBreakBefore\" ImageConversion=\"Automatic\" GIFOptionsPalette=\"AdaptivePalette\" GIFOptionsInterlaced=\"false\" JPEGOptionsQuality=\"High\" JPEGOptionsFormat=\"ProgressiveEncoding\" Level=\"5\" IgnoreObjectConversionSettings=\"false\" Format=\"true\" UseTocStyle=\"false\" TocStyleName=\"$ID/DefaultTOCStyleName\" BreakDocument=\"false\" ParagraphStyleName=\"$ID/NormalParagraphStyle\" FootnoteFollowParagraph=\"false\" StripSoftReturn=\"false\" CSSExportOption=\"EmbeddedCSS\" IncludeCSSDefinition=\"true\" PreserveLocalOverride=\"true\" EmbedFont=\"true\" ExternalCSSPath=\"template.css\"/>\n\t<HTMLExportPreference ExportSelection=\"true\" ExportOrder=\"LayoutOrder\" BulletExportOption=\"UnorderedList\" NumberedListExportOption=\"OrderedList\" LeftMargin=\"0\" RightMargin=\"0\" TopMargin=\"0\" BottomMargin=\"0\" MarginUnit=\"CssPixel\" ViewDocumentAfterExport=\"true\" ImageExportOption=\"OptimizedImage\" ImageExportResolution=\"Ppi150\" CustomImageSizeOption=\"SizeFixed\" PreserveLayoutAppearence=\"false\" ImageAlignment=\"AlignCenter\" ImageSpaceBefore=\"0\" ImageSpaceAfter=\"0\" SpaceUnit=\"CssEm\" ApplyImageAlignmentToAnchoredObjectSettings=\"false\" ImageConversion=\"Automatic\" GIFOptionsPalette=\"AdaptivePalette\" GIFOptionsInterlaced=\"false\" JPEGOptionsQuality=\"High\" JPEGOptionsFormat=\"ProgressiveEncoding\" Level=\"5\" IgnoreObjectConversionSettings=\"false\" ServerPath=\"\" ImageExtension=\".jpg\" CSSExportOption=\"EmbeddedCSS\" IncludeCSSDefinition=\"true\" PreserveLocalOverride=\"true\" ExternalCSSPath=\"\" LinkToJavascript=\"false\" JavascriptURL=\"\"/>\n</idPkg:Preferences>",
  "XML/Tags.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:Tags xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<XMLTag Self=\"XMLTag/advertise\" Name=\"advertise\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Green</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/article\" Name=\"article\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Red</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/content\" Name=\"content\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Magenta</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/description\" Name=\"description\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Gray</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/illustration\" Name=\"illustration\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Cyan</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/Root\" Name=\"Root\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">LightBlue</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/Story\" Name=\"Story\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">BrickRed</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/subtitle\" Name=\"subtitle\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Yellow</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n\t<XMLTag Self=\"XMLTag/title\" Name=\"title\">\n\t\t<Properties>\n\t\t\t<TagColor type=\"enumeration\">Blue</TagColor>\n\t\t</Properties>\n\t</XMLTag>\n</idPkg:Tags>",
  "XML/BackingStory.xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<idPkg:BackingStory xmlns:idPkg=\"http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging\" DOMVersion=\"7.5\">\n\t<XmlStory Self=\"u9c\" AppliedTOCStyle=\"n\" TrackChanges=\"false\" StoryTitle=\"$ID/\" AppliedNamedGrid=\"n\">\n\t\t<ParagraphStyleRange AppliedParagraphStyle=\"ParagraphStyle/$ID/NormalParagraphStyle\">\n\t\t\t<CharacterStyleRange AppliedCharacterStyle=\"CharacterStyle/$ID/[No character style]\">\n\t\t\t\t<XMLElement Self=\"di2\" MarkupTag=\"XMLTag/Root\">\n\t\t\t\t\t<XMLElement Self=\"di2i3\" MarkupTag=\"XMLTag/article\" XMLContent=\"u102\"/>\n\t\t\t\t\t<XMLElement Self=\"di2i4\" MarkupTag=\"XMLTag/article\" XMLContent=\"udb\"/>\n\t\t\t\t\t<XMLElement Self=\"di2i5\" MarkupTag=\"XMLTag/article\" XMLContent=\"udd\"/>\n\t\t\t\t\t<XMLElement Self=\"di2i6\" MarkupTag=\"XMLTag/advertise\" XMLContent=\"udf\"/>\n\t\t\t\t</XMLElement>\n\t\t\t\t<Content>\ufeff</Content>\n\t\t\t</CharacterStyleRange>\n\t\t</ParagraphStyleRange>\n\t</XmlStory>\n</idPkg:BackingStory>"
};

  var STORAGE_KEY = "proposal-bot-full-service-drafts-v2";
  var LAST_DRAFT_KEY = "proposal-bot-full-service-last-draft-v2";
  var THEME_SELECTION_KEY = "proposal-bot-full-service-theme-selections-v1";
  var THEME_SESSION_KEY = "proposal-bot-full-service-current-theme-v1";
  var SAVED_TEXT_LIBRARY_KEY = "proposal-bot-saved-section-text-library-v1";
  var DELIVERABLE_LIBRARY_KEY = "proposal-bot-deliverable-library-v1";
  var CUSTOM_TEMPLATE_KEY = "proposal-bot-custom-proposal-types-v1";
  var GENERAL_CONDITIONS_RATE_DEFAULTS_KEY = "proposal-bot-general-conditions-rate-defaults-v1";
  var PROCESS_FIXED_HEADING = "Our Design Team";
  var PROCESS_SCOPE_FIXED_HEADING = "Scope of Work / Basic Services";
  var PHASE_SCOPE_FIXED_HEADING = "In coordination with the AOR, this phase includes the following:";
  var PROJECT_SUMMARY_FIXED_HEADING = "Project Summary";
  var DEFAULT_GENERAL_CONDITIONS_HOURLY_RATES = [
    { label: "Principal", amount: "375" },
    { label: "Project Manager", amount: "275" },
    { label: "Senior Architect", amount: "250" },
    { label: "Junior Architect", amount: "180" },
    { label: "BIM Support", amount: "160" },
    { label: "Administrative", amount: "110" }
  ];
  var DEFAULT_GENERAL_CONDITIONS_TEXT = [
    "1. All work performed by MA will be paid in full and on schedule, regardless of if the project is capitalized or not, the property is acquired or not, and regardless of if the project moves forward or not.",
    "2. If there is a delay of more than 180 calendar days between the delivery of the Conceptual Design and the notice to proceed with the rest of the scope, fees may need to be adjusted.",
    "3. Fees for Additional Services will be billed on an hourly basis according to the following hourly billing rates:",
    "",
    "Additional Service fees will increase 10% annually each during the duration of SD, DD and CD. Add Service fees will remain fixed for the duration of the CA phase, at the updated rate charged when CA starts.",
    "4. All payments are due 30 days upon receipt of invoice. Payments due to MA and unpaid under this agreement shall bear interest at the rate of 1% per month beginning 60 days from the date of invoice. Payments due to M+A and unpaid under this agreement shall be cause for suspension of work.",
    "5. MA regards any services beyond the Basic Architectural Services as additional services, of which the following are examples:",
    "- Detailed initial programming",
    "- Revisions when inconsistent with approvals or instructions previously given.",
    "- As-built drawings",
    "- Graphics and signage design",
    "- Lighting design",
    "- LEED Certification",
    "- Extensive community-city hall presentations and negotiations beyond three sessions.",
    "- Program changes beyond 75% SD and during and after Design Development",
    "- Coordination of commercial renders beyond what is listed above.",
    "- Coordination of physical model, if required",
    "- Other scope not included in the proposal",
    "6. Owner Provided Services",
    "The Owner will provide the following owner services:",
    "- Boundary, Tree, Utility and Topographic Survey",
    "- Geotechnical Investigation and Report",
    "- Environmental Assessment / Survey and Remediation",
    "- All Consultants, including but not limited to: Architect of Record, Structural, MEP, Interior Design, Civil, Preconstruction Services, Building Envelope, Lighting, Landscape, Graphic, Acoustical, Lighting, etc.",
    "7. Reimbursable Expenses",
    "MA regards the following as reimbursable expenses, which will be charged with a 1.1 administrative multiplier:",
    "- Travel and transportation as required by project duties.",
    "- Communication, deliveries, postage and handling",
    "- All reprographic expenses including plotting, photocopy copies and faxes",
    "- Renderings, models or mockups requested by the Owner.",
    "8. Fees assume current MA insurance limits. If additional insurance is requested, Owner will need to pay the difference in premiums, assuming additional insurance is available.",
    "9. Project Restarting",
    "Excluding the Conceptual Design phase, in case the project is stopped for a continuous period of sixty (60) natural days or more, M+A will have the right to charge a restarting fee and a period of two weeks to reassemble the project team. Before restarting, all fees for previously executed work need to be paid.",
    "10. Fees do not include any consultants and do not include design of any leasable areas, amenity and common area interiors, etc.",
    "11. Design will be documented in Revit without additional charges."
  ].join("\n\n");
  var DEFAULT_COMPENSATION_FEE_NOTES_TEXT = [
    "1. Please note that no fees for consultants are included in this proposal. M+A Fees only.",
    "2. Fees are valid for 90 days.",
    "3. Fees will be billed monthly according to advance of work.",
    "4. Fees include CA site visits twice monthly for 16 months. In case construction lasts longer or more visits are required, additional fees will need to be negotiated.",
    "5. The above fees apply when MA is commissioned the full design architect role for SD, DD, CD and CA scopes.",
    "6. If after Schematic Design the project is continued by another architect, a disengagement fee will be due. This fee will be 20% of the Conceptual and Schematic Design fees.",
    "7. If the program increases by more than 5%, fees may require adjustments.",
    "8. Depending on the magnitude, additional changes during DD may require additional fees."
  ].join("\n");
  var DEFAULT_COMPENSATION_FEE_NOTES_REFERENCE = "Please see the General Conditions page for the terms of this proposal.";
  var PHOTO_DB_NAME = "proposal-bot-photo-library-v1";
  var PHOTO_STORE_NAME = "photos";
  var PHOTO_PAN_SCALE = 1.1;
  var photoFrameResizeSession = null;
  var activeTab = "info";
  var activeSectionId = "intro";
  var isDirty = false;
  var photoSelectionsChanged = false;
  var autoSaveTimer = null;
  var sharedDrafts = Object.create(null);
  var sharedRevisions = Object.create(null);
  var sharedSaveChains = {};
  var sharedPendingSaves = 0;
  var sharedSaveError = "";
  var sharedConflictIds = {};
  var sharedReady = false;
  var projectImageSyncPromise = null;
  var photoLibraryTypologyFilter = "all";
  var photoThumbnailObserver = null;
  var photoThumbnailQueue = [];
  var activePhotoThumbnailJobs = 0;
  var photoThumbnailGeneration = 0;
  var photoThumbnailCache = new Map();
  var activePhotoPanKey = "";
  var photoPanSession = null;
  var photoLibraryDragSession = null;

  var themes = [
    {
      id: "maOg",
      label: "M+A OG",
      note: "The original portrait proposal layout."
    },
    {
      id: "modernLandscape",
      label: "Modern Landscape",
      note: "A wide, editorial layout inspired by architectural presentation boards."
    },
    {
      id: "northlinePortrait",
      label: "Modern Portrait",
      note: "A tall, image-forward proposal style with bold condensed titles and boxed section numbers."
    }
  ];

  var templates = [
    {
      id: "fullService",
      label: "Full Service | Office/Retail",
      note: "Full architectural design proposal based on the Full Service Example PDF."
    },
    {
      id: "marketingPackage",
      label: "Marketing Package",
      note: "Placeholder template for a future marketing-scope proposal."
    },
    {
      id: "schematicOnly",
      label: "Schematic Only",
      note: "Placeholder template for a future schematic-design-only proposal."
    },
    {
      id: "asr",
      label: "ASR",
      note: "Project Summary, Design Schedule, Compensation, Thank You, and Signature only.",
      defaultsSaved: true,
      sectionInclusion: {
        projectSummary: true,
        ourQualifications: false,
        ourTeam: false,
        process: false,
        conceptDesignPage: false,
        schematicDesignPage: false,
        designDevelopmentPage: false,
        constructionDocumentsPage: false,
        biddingConstructionAdministration: false,
        designSchedulePage: true,
        consultantsPage: false,
        compensationPage: true,
        proceedingWithConfidence: true,
        signature: true,
        generalConditionsPage: false,
        attachmentsPage: false
      },
      sectionOverrides: {},
      sectionTitleOverrides: {},
      phaseLabels: {}
    }
  ];

  function availableTemplates() {
    return templates.concat(readCustomTemplates());
  }

  function readCustomTemplates() {
    try {
      var stored = JSON.parse(localStorage.getItem(CUSTOM_TEMPLATE_KEY) || "[]");
      if (!Array.isArray(stored)) {
        return [];
      }
      return stored.map(normalizeCustomTemplate).filter(function (item) {
        return item.id && item.label;
      });
    } catch (error) {
      return [];
    }
  }

  function normalizeCustomTemplate(item) {
    var source = item && typeof item === "object" ? item : {};
    var hasDefaults = source.defaultsSaved === true ||
      (source.sectionInclusion && typeof source.sectionInclusion === "object") ||
      (source.sectionOverrides && typeof source.sectionOverrides === "object") ||
      (source.sectionTitleOverrides && typeof source.sectionTitleOverrides === "object") ||
      (source.phaseLabels && typeof source.phaseLabels === "object");
    return {
      id: String(source.id || "").trim(),
      label: String(source.label || "").trim(),
      note: String(source.note || "Custom proposal type"),
      defaultsSaved: !!hasDefaults,
      sectionInclusion: hasDefaults ? normalizeSectionInclusion(source.sectionInclusion) : null,
      sectionOverrides: hasDefaults ? normalizeProposalTypeText(source.sectionOverrides) : {},
      sectionTitleOverrides: hasDefaults ? normalizeSectionTitleOverrides(source.sectionTitleOverrides) : {},
      phaseLabels: hasDefaults ? normalizePhaseLabels(source.phaseLabels) : {}
    };
  }

  function normalizeProposalTypeText(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    sectionDefinitions.forEach(function (section) {
      if (Object.prototype.hasOwnProperty.call(source, section.id)) {
        normalized[section.id] = section.id === "process"
          ? stripProcessFixedHeading(source[section.id])
          : String(source[section.id] || "");
      }
    });
    return normalized;
  }

  function writeCustomTemplates(list) {
    try {
      localStorage.setItem(CUSTOM_TEMPLATE_KEY, JSON.stringify(list || []));
      return true;
    } catch (error) {
      console.error("Could not save custom proposal types", error);
      return false;
    }
  }

  function createTemplateId(label) {
    var base = String(label || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || ("proposal-type-" + Date.now());
    var existing = availableTemplates().map(function (item) {
      return item.id;
    });
    var candidate = base;
    var suffix = 2;
    while (existing.indexOf(candidate) >= 0) {
      candidate = base + "-" + suffix;
      suffix += 1;
    }
    return candidate;
  }

  function findTemplateById(templateId) {
    return availableTemplates().find(function (item) {
      return item.id === templateId;
    }) || null;
  }

  function isCustomTemplateId(templateId) {
    return readCustomTemplates().some(function (item) {
      return item.id === templateId;
    });
  }

  function captureProposalTypeDefaults(id, label, note) {
    var textDefaults = {};
    sectionDefinitions.forEach(function (section) {
      textDefaults[section.id] = String(getSectionText(section) || "");
    });
    return {
      id: id,
      label: label,
      note: note || "Saved Subject selections and default section text",
      defaultsSaved: true,
      sectionInclusion: normalizeSectionInclusion(proposal.sectionInclusion),
      sectionOverrides: textDefaults,
      sectionTitleOverrides: normalizeSectionTitleOverrides(proposal.sectionTitleOverrides),
      phaseLabels: normalizePhaseLabels(proposal.phaseLabels)
    };
  }

  function applyProposalType(template) {
    if (!template) {
      return;
    }
    proposal.templateId = template.id;
    if (template.defaultsSaved) {
      proposal.sectionInclusion = normalizeSectionInclusion(template.sectionInclusion);
      proposal.sectionOverrides = normalizeProposalTypeText(template.sectionOverrides);
      proposal.sectionTitleOverrides = normalizeSectionTitleOverrides(template.sectionTitleOverrides);
      proposal.phaseLabels = normalizePhaseLabels(template.phaseLabels);
      delete proposal.projectSummarySections;
    }
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function mergeCustomTemplateLists(target, source) {
    var merged = {};
    (Array.isArray(target) ? target : []).concat(Array.isArray(source) ? source : []).forEach(function (item) {
      var normalized = normalizeCustomTemplate(item);
      if (normalized.id && normalized.label) {
        merged[normalized.id] = normalized;
      }
    });
    return Object.keys(merged).map(function (id) {
      return merged[id];
    });
  }
  var defaultPhotoTypologies = ["Unassigned", "MF Low", "MF High", "Office", "Retail", "Hospitality", "Master Plan"];
  var defaultPhaseDeliverables = {
    conceptDesign: [
      "Context plan",
      "Ground level Site Plan",
      "Typical building plan",
      "Building sections",
      "Elevations w/ preliminary materials",
      "Massing diagrams / White Box 3Ds",
      "Area charts",
      "In-House renderings"
    ],
    schematicDesign: [
      "Architectural Site Plan",
      "Programmatic and Area Analysis Sheets",
      "Code Analysis Sheets (by AOR)",
      "Building Plans including ground, amenity and typical floors",
      "Main Exterior Elevations w/ preliminary materials",
      "Roof Plans",
      "Building Sections",
      "Study 3D Renders",
      "Preliminary BOMA calculations, by AOR"
    ],
    designDevelopment: [
      "Architectural Site Plan",
      "Programmatic and Area Analysis Sheets",
      "Code Analysis Sheets, by AOR",
      "BOMA Calculations, by AOR",
      "Building Plans including ground, amenities, and typical floors.",
      "Coordination with structural drawings identifying the structural systems for the project",
      "Coordination with MEP drawings identifying the HVAC, electrical and plumbing systems",
      "Exterior Elevations",
      "Lobby Plans and Key Elevations",
      "Restroom Plans and Key Elevations",
      "Coordination of Amenity Plans (if applicable)",
      "Roof Plans",
      "Building Sections",
      "Wall sections. With AOR",
      "Outline Material and Finish Schedules",
      "LEED and Environmental coordination.",
      "Study 3D Renders",
      "Coordination of up to 4 (four) commercial renders (if selected)"
    ]
  };

  var sectionDefinitions = [
    { id: "intro", title: "Intro", source: "written", photoType: "context", generator: generateIntro },
    { id: "projectDescription", title: "Project Description", source: "written", photoType: "context", generator: generateProjectDescription },
    { id: "basicOwnerRequirements", title: "Basic owner requirements", source: "written-list", photoType: "program", generator: generateBasicOwnerRequirements },
    { id: "ownerProvidedInfo", title: "Owner provided info", source: "written-list", photoType: "documents", generator: generateOwnerProvidedInfo },
    { id: "ourDesign", title: "Our Design", source: "pdf", photoType: "design", text: [
      "PROCESS:",
      "",
      "Our Design Team",
      "",
      "One of the firm’s principals is always in charge of our projects, ensuring that our clients and projects always have top level of attention that is required.",
      "",
      "Our firm has a good understanding of the multifamily developer’s concerns regarding good design, budgets, etc. Within these parameters, our experience allows us to bring innovative solutions not only to the overall design of the building, but also to our approach to unit design. We have the knowhow and expertise to design the next generation of multifamily buildings within your framework and cost.",
      "",
      "For this project, we will serve as Design Architect with an Architect of Record (AOR) of your choice. As referenced in this RFP we are including AOR fee projections from House Robertson Architects.",
      "",
      "As Design Architects for this project, we will coordinate closely with the AOR as well as with the other participating consultants. It is our understanding that a General Contractor with whom the intent is to negotiate a construction contract will be selected for pre-design services, including detailed pricing information that will be made available to the Design Team at the milestones defined in the Project Schedule."
    ].join("\n") },
    { id: "scopeBasicServices", title: "Scope of Work / Basic Services", source: "pdf", photoType: "scope", text: [
      "This proposal is made with Munoz + Albin Architecture & Planning Inc. (M+A) as the Design Architect. No AOR or other consultants are included in this proposal. MA and the other consultants will work under contract with the AOR.",
      "",
      "Prior to starting the design process, in conjunction with MA, the Owner will define any issues such as percentage of balconies desired, as well as types of interior solutions preferred such as laundry, kitchen, bathroom types and number of fixtures, etc. M+A scope includes unit design: layouts, RCPs, typical bathroom and kitchen design. Interior design of public spaces will be provided by the interior designer."
    ].join("\n") },
    { id: "maAssumptions", title: "MA Assumptions", source: "written-list", photoType: "program", generator: generateAssumptions },
    { id: "conceptDesign", title: "Concept Design", source: "pdf", photoType: "concept", text: [
      "Conceptual Design",
      "",
      "In coordination with the AOR, our pre-design phase focuses on site planning, zoning and code analysis, program development, access and circulation concepts, preliminary consultant coordination, and alignment with project budget and cost expectations.",
      "",
      "MA will study various site test fit options for the program. Corresponding massing options will be studied and evaluated. At the end of the Conceptual Design scope, an overall scheme will be generated which will be the basis of design.",
      "",
      "Deliverables for this phase include:",
      "• Context plan",
      "• Ground level Site Plan",
      "• Typical building plan with units shown as blocks. No interior unit layout included at this phase",
      "• Typical parking level plan",
      "• Elevations of 2 main facades indicating materials",
      "• Building sections",
      "• Massing diagrams / White Box 3Ds",
      "• In-house renders",
      "• Area charts"
    ].join("\n") },
    { id: "schematicDesign", title: "Schematic Design", source: "pdf", photoType: "schematic", text: [
      "Schematic Design",
      "",
      "Based on the Owner’s approval of the concept phase, MA will produce documents to complete the Schematic Design scope. MA will further develop massing and façade solutions that will serve as the basis of design for the building.",
      "",
      "Schematic Design studies will consist of the drawings and documents listed below:",
      "",
      "In coordination with the AOR, this phase includes the following:",
      "• Site and area analysis to confirm design parameters.",
      "• Coordination with local planning, building code, life safety and zoning requirements.",
      "• Parking, loading and service requirements.",
      "• Building core, elevator and circulation analysis.",
      "• Exterior skin and design systems and materials.",
      "• Coordination with the civil engineer and other consultants.",
      "• Evaluation of structural and MEP building systems.",
      "• Presentations and meetings by-weekly with consultants and client",
      "• Meetings with the contractor to establish construction budgets for design.",
      "• Landscape and interior design coordination.",
      "• Program and unit plan development.",
      "",
      "Deliverables for this phase include:",
      "• Architectural Site Plan",
      "• Programmatic and Area Analysis Sheets",
      "• Code Analysis Sheets (by AOR)",
      "• Building Plans including ground, parking, amenity and typical floors",
      "• Unit Plans (6 unit types)",
      "• Main Exterior Elevations with Materials noted",
      "• Roof Plans",
      "• Building Sections",
      "• Illustrated 3D vignettes of key details",
      "• In-house Renders"
    ].join("\n") },
    { id: "designDevelopment", title: "Design Development", source: "pdf", photoType: "design", text: [
      "Design Development",
      "",
      "Our design development phase is based on the approved schematic design documents and approved preliminary budget by the General Contractor. This phase includes identification of structural, mechanical and electrical systems for pricing purposes.",
      "",
      "In coordination with the AOR, this phase includes the following:",
      "• Site and area analysis to confirm design parameters.",
      "• Coordination with local planning, building code, life safety and zoning requirements.",
      "• Parking, loading and service requirements.",
      "• Building core, elevator and circulation analysis.",
      "• Exterior skin and design systems and materials.",
      "• Coordination with consultants: Civil, Structural, MEP, Landscape, Interior Designers, etc.",
      "• Presentations and OAC meetings as required.",
      "• Specialty consultant engagement including waterproofing, accessibility, façade cleaning and maintenance, hardware, elevator, low voltage and others. By AOR.",
      "• Continued program and unit plan development.",
      "• Plans, elevations, sections and other drawings as necessary to illustrate the final design of the buildings.",
      "• Meetings and coordination with the contractor to ensure the design is within budget as the design is developed.",
      "",
      "Deliverables for this phase include:",
      "• Architectural Site Plan",
      "• Programmatic and Area Analysis Sheets",
      "• Code Analysis Sheets. By AOR",
      "• Building Plans including ground, parking, amenities, and typical floors.",
      "• Coordination with structural drawings identifying the structural systems for the project",
      "• Coordination with MEP drawings identifying the HVAC, electrical and plumbing spatial requirements",
      "• All Unit Plans and mix including unit RCP’s",
      "• Design of 6 typical units’ kitchens and bathrooms",
      "• Exterior Elevations with Materials",
      "• Coordination of Amenity Plans (by Interior Designer)",
      "• Wind tunnel analysis may be required at this stage.",
      "• Roof Plans",
      "• Building Sections",
      "• Schematic Wall Sections",
      "• Illustrated 3D vignettes with plans, sections, elevations and 3D elements",
      "• Outline Material and Finish Schedules",
      "• LEED and Environmental coordination (by AOR)",
      "• Façade cleaning and maintenance coordination",
      "• In-house 3D Renders",
      "• Coordination of up to 6 (six) commercial renders"
    ].join("\n") },
    { id: "constructionDocuments", title: "Construction Documents", source: "pdf", photoType: "documents", text: "Based on the Owner’s approvals of the Design Development documents and of the updated preliminary pricing package (by general contractor), M+A will assist the AOR with architectural design issues that need to be addressed during this phase. M+A will assist the AOR in setting forth in detail the quality level of the materials and systems and other requirements for the construction of the building. Permitting will be done by the AOR." },
    { id: "biddingNegotiation", title: "Bidding and Negotiation", source: "pdf", photoType: "documents", text: "M+A understands that the Owner will negotiate the construction contract with a general contractor that will provide pre-construction services including pricing information during the various phases of the project development." },
    { id: "constructionAdministration", title: "Construction Administration", source: "pdf", photoType: "construction", text: [
      "M+A shall review the contractor submittals such as shop drawings relevant to building design, product data, and samples and visit the construction site once monthly (structure) and twice monthly (finishes) only for the limited purpose of checking for conformance with information given and compliance with the design concept and aesthetic intent of the project.",
      "",
      "This phase includes the following:",
      "• Additional supplementary or clarification drawings as necessary.",
      "• In-house review and approval of shop drawings for compliance with aesthetic intent.",
      "• Response to RFI’s from the field.",
      "• Submittal review and approval."
    ].join("\n") },
    { id: "designSchedule", title: "Design Schedule", source: "editable-data", photoType: "schedule", generator: generateDesignSchedule },
    { id: "consultants", title: "Consultants", source: "editable-data", photoType: "consultants", generator: generateConsultants },
    { id: "compensation", title: "Compensation", source: "editable-data", photoType: "fees", generator: generateCompensation },
    { id: "feeSchedule", title: "Fee Schedule", source: "uploaded", photoType: "fees", generator: generateFeeSchedule },
    { id: "feeNotes", title: "Fee Notes", source: "pdf", photoType: "fees", text: [
      "1. Fees to be billed monthly according to project advancement.",
      "2. A retainer of $20,000.00 upon commission to be amortized through schematic design.",
      "3. Please note that no fees for consultants are included in this proposal.",
      "4. Fees are valid for 90 days.",
      "5. Fees include CA site visits monthly during construction of structure and twice a month during selection of finishes for 36 months. In case construction lasts longer or more visits are required, additional fees will need to be negotiated.",
      "6. The above fees apply when MA is commissioned to complete the full design architect role for SD, DD, CD and CA scopes.",
      "7. If the program increases by more than 5%, fees may require adjustments.",
      "8. Depending on the magnitude, additional changes during DD may require additional fees."
    ].join("\n") },
    { id: "ending", title: "Ending paragraph", source: "written", photoType: "context", generator: generateEnding },
    { id: "attachments", title: "Attachments", source: "placeholder", photoType: "documents", generator: generateAttachments }
  ];

  var proposalPageGroups = [
    { photoType: "context", sections: ["intro", "projectDescription"] },
    { photoType: "program", sections: ["basicOwnerRequirements", "ownerProvidedInfo"] },
    { photoType: "design", sections: ["ourDesign"] },
    { photoType: "scope", sections: ["scopeBasicServices", "maAssumptions"] },
    { photoType: "concept", sections: ["conceptDesign"] },
    { photoType: "schematic", sections: [{ id: "schematicDesign", part: "scope" }] },
    { photoType: "schematic", sections: [{ id: "schematicDesign", part: "deliverables" }, { id: "designDevelopment", part: "scopeIntro" }] },
    { photoType: "design", sections: [{ id: "designDevelopment", part: "scopeList" }] },
    { photoType: "design", sections: [{ id: "designDevelopment", part: "deliverablesA" }] },
    { photoType: "design", sections: [{ id: "designDevelopment", part: "deliverablesB" }] },
    { photoType: "construction", sections: ["constructionDocuments", "biddingNegotiation", "constructionAdministration"] },
    { photoType: "schedule", sections: ["designSchedule"] },
    { photoType: "consultants", sections: ["consultants"] },
    { photoType: "fees", sections: ["compensation", "feeSchedule", "feeNotes"] },
    { photoType: "documents", sections: ["ending", "attachments"] }
  ];

  var scheduleFieldDefs = [
    { path: "schedule.concept", label: "Concept Design", aliases: ["concept design", "conceptual design", "concept", "pre design", "pre-design", "project kickoff", "kickoff", "programming"] },
    { path: "schedule.schematic", label: "Schematic Design", aliases: ["schematic design", "schematic", "sd"] },
    { path: "schedule.designDevelopment", label: "Design Development", aliases: ["design development", "dd"] },
    { path: "schedule.valueEngineeringStudy", label: "Value Engineering Study", aliases: ["value engineering study", "value engineering", "ve study", "ve"] },
    { path: "schedule.constructionDocuments", label: "Construction Documents", aliases: ["construction documents", "construction document", "cds", "cd"] },
    { path: "schedule.bidding", label: "Bidding", aliases: ["bidding and negotiation", "bidding negotiation", "bidding", "negotiation", "bidding permitting", "permitting"] },
    { path: "schedule.permitIfc", label: "Permit and IFC", aliases: ["permit and ifc", "permit ifc", "permit", "ifc", "permit set", "issue for construction"] },
    { path: "schedule.constructionAdministration", label: "Construction Administration", aliases: ["construction administration", "construction admin", "ca", "construction observation", "ongoing", "through closeout", "closeout"] }
  ];

  var compensationFieldDefs = [
    { path: "compensation.amount", label: "Total fee", aliases: ["total fee", "total", "lump sum", "fee"] },
    { path: "compensation.concept", label: "Conceptual Design", aliases: ["conceptual design", "concept design", "concept"] },
    { path: "compensation.schematic", label: "Schematic Design", aliases: ["schematic design", "schematic", "sd"] },
    { path: "compensation.designDevelopment", label: "Design Development", aliases: ["design development", "dd"] },
    { path: "compensation.constructionDocuments", label: "Construction Documents", aliases: ["construction documents", "construction document", "cds", "cd"] },
    { path: "compensation.bid", label: "Bid", aliases: ["bid", "bidding", "bidding and negotiation", "negotiation"] },
    { path: "compensation.constructionObservation", label: "Construction Administration", aliases: ["construction administration", "construction admin", "construction observation", "cons obs", "cons.obs", "ca"] }
  ];

  var els = {};
  var proposal = createDefaultProposal();

  document.addEventListener("DOMContentLoaded", async function () {
    els.nav = document.getElementById("section-nav");
    els.editor = document.getElementById("editor-panel");
    els.preview = document.getElementById("proposal-preview");
    els.heading = document.getElementById("proposal-heading");
    els.status = document.getElementById("draft-status");
    els.draftSelect = document.getElementById("draft-select");
    els.renameDraft = document.getElementById("rename-draft");
    els.deleteDraft = document.getElementById("delete-draft");
    els.refreshDrafts = document.getElementById("refresh-drafts");
    els.importBackupInput = document.getElementById("import-backup-input");
    els.appShell = document.querySelector(".app-shell");
    els.workspace = document.querySelector(".workspace");
    els.tabs = Array.from(document.querySelectorAll(".tab"));

    els.status.textContent = "Loading shared projects...";
    try {
      await loadSharedDrafts();
      await migrateBrowserDrafts();
    } catch (error) {
      console.error("Could not load shared projects", error);
      els.status.textContent = "Shared projects unavailable";
      window.alert("Shared projects could not be loaded. Check the server or shared data folder, then reload this page.");
      return;
    }
    // Pagination measures text, so load both body weights before the first layout.
    if (document.fonts) {
      await Promise.all([
        document.fonts.load('400 16px "Source Sans 3"'),
        document.fonts.load('700 16px "Source Sans 3"')
      ]).catch(function (error) {
        console.error("Could not load proposal fonts", error);
      });
    }
    sharedReady = true;
    bindActions();
    loadInitialDraft();
    hydrateProposalPhotos(function () {
      syncProjectImageFolder(function () {
        renderAll();
      });
    });
  });

  function bindActions() {
    window.addEventListener("beforeunload", function () {
      if (isDirty) saveCurrentDraft();
    });
    window.addEventListener("pagehide", function () {
      if (isDirty) saveCurrentDraft();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        if (isDirty) saveCurrentDraft();
      }
    });
    els.refreshDrafts.addEventListener("click", refreshSharedDrafts);
    window.addEventListener("focus", function () {
      if (!isDirty && !sharedPendingSaves) refreshSharedDrafts();
    });

    document.getElementById("new-proposal").addEventListener("click", async function () {
      var currentId = proposal.meta.id;
      if (isDirty) saveCurrentDraft();
      if (sharedSaveChains[currentId]) await sharedSaveChains[currentId];
      if (sharedSaveError) {
        window.alert("The current project has not been saved to the shared folder. Retry Save before starting a new project.");
        return;
      }
      proposal = createDefaultProposal();
      proposal.savedSectionInputs = migrateSavedTextFromDrafts();
      activeTab = "info";
      activeSectionId = defaultActiveSectionId();
      isDirty = true;
      saveCurrentDraft();
      syncProjectImageFolder(function () {
        renderAll();
      });
    });

    document.getElementById("save-proposal").addEventListener("click", function () {
      saveCurrentDraft();
      renderDraftSelect();
    });

    document.getElementById("export-json").addEventListener("click", function () {
      saveCurrentDraft();
      downloadText(filenameBase() + "-data.json", JSON.stringify(proposal, null, 2), "application/json");
    });

    document.getElementById("export-pdf").addEventListener("click", async function () {
      saveCurrentDraft();
      await printProposalPdf();
    });

    document.getElementById("export-word").addEventListener("click", function () {
      saveCurrentDraft();
      downloadBlob(filenameBase() + "-word.doc", buildWordHtmlBlob(), "application/msword");
    });

    document.getElementById("export-indesign").addEventListener("click", function () {
      saveCurrentDraft();
      exportInDesignFile();
    });

    document.getElementById("backup-app").addEventListener("click", function () {
      saveCurrentDraft();
      backupAppData();
    });

    document.getElementById("import-backup").addEventListener("click", function () {
      openBackupImport();
    });

    if (els.importBackupInput) {
      els.importBackupInput.addEventListener("change", function (event) {
        var file = event.target.files && event.target.files[0];
        if (file) {
          importBackupFromFile(file);
        }
        event.target.value = "";
      });
    }

    document.getElementById("toggle-preview").addEventListener("click", function (event) {
      var isWide = els.workspace.classList.toggle("preview-wide");
      els.appShell.classList.toggle("preview-wide-shell", isWide);
      event.currentTarget.textContent = isWide ? "Editor" : "Wide";
    });

    els.tabs.forEach(function (button) {
      button.addEventListener("click", function () {
        activeTab = button.dataset.tab;
        saveCurrentDraft();
        renderAll();
      });
    });

    els.draftSelect.addEventListener("change", async function (event) {
      var selectedId = event.target.value;
      var currentId = proposal.meta.id;
      if (isDirty) saveCurrentDraft();
      if (sharedSaveChains[currentId]) await sharedSaveChains[currentId];
      if (sharedSaveError) {
        event.target.value = currentId;
        window.alert("The current project has not been saved to the shared folder. Retry Save before opening another project.");
        return;
      }
      var drafts = readDrafts();
      if (drafts[selectedId]) {
        proposal = normalizeProposal(drafts[selectedId]);
        restoreRememberedTheme();
        proposal.savedSectionInputs = migrateSavedTextFromDrafts();
        try { localStorage.setItem(LAST_DRAFT_KEY, proposal.meta.id); } catch (error) {}
        activeTab = proposal.meta.activeTab || "info";
        activeSectionId = validSectionId(proposal.meta.activeSectionId) ? proposal.meta.activeSectionId : defaultActiveSectionId();
        isDirty = false;
        hydrateProposalPhotos(function () {
          syncProjectImageFolder(function () {
            renderAll();
          });
        });
      }
    });

    els.renameDraft.addEventListener("click", renameSelectedDraft);
    els.deleteDraft.addEventListener("click", deleteSelectedDraft);

    els.preview.addEventListener("click", function (event) {
      var button = event.target.closest("[data-photo-action]");
      if (!button) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (button.dataset.photoAction === "hand") {
        togglePreviewPhotoPan(button.dataset.photoKey, button.closest(".editable-photo-slot"));
        return;
      }
      adjustPreviewPhoto(button.dataset.photoKey, button.dataset.photoType, button.dataset.photoAction);
    });

    els.preview.addEventListener("input", function (event) {
      var control = event.target.closest("[data-photo-scale]");
      if (control) setPreviewPhotoScale(control, false);
    });

    els.preview.addEventListener("change", function (event) {
      var control = event.target.closest("[data-photo-scale]");
      if (control) {
        setPreviewPhotoScale(control, true);
        return;
      }
      var select = event.target.closest("[data-photo-choice]");
      if (!select) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      choosePreviewPhoto(select.dataset.photoKey, select.dataset.photoType, select.value);
    });

    els.editor.addEventListener("pointerdown", beginPhotoLibraryDrag);
    document.addEventListener("pointermove", movePhotoLibraryDrag);
    document.addEventListener("pointerup", endPhotoLibraryDrag);
    document.addEventListener("pointercancel", cancelPhotoLibraryDrag);

    els.preview.addEventListener("dragover", function (event) {
      var slot = event.target.closest(".editable-photo-slot");
      if (!slot || !photoSlotControl(slot) || !hasProposalPhotoDrag(event.dataTransfer)) {
        return;
      }
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      clearPreviewPhotoDropTargets(slot);
      slot.classList.add("is-photo-drop-target");
    });

    els.preview.addEventListener("dragleave", function (event) {
      var slot = event.target.closest(".editable-photo-slot");
      if (slot && (!event.relatedTarget || !slot.contains(event.relatedTarget))) {
        slot.classList.remove("is-photo-drop-target");
      }
    });

    els.preview.addEventListener("drop", function (event) {
      var slot = event.target.closest(".editable-photo-slot");
      var control = photoSlotControl(slot);
      var photoId = proposalPhotoIdFromTransfer(event.dataTransfer);
      if (!slot || !control || !photoId) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      clearPreviewPhotoDropState();
      choosePreviewPhoto(control.dataset.photoKey, control.dataset.photoType, photoId);
      flashStatus("Photo replaced. Choose Hand to reposition it.");
    });

    ProposalTextFlow.install(els.preview, {
      settings: function () { return proposal.textFrameBottoms || {}; },
      commit: function (settings) {
        proposal.textFrameBottoms = settings;
        markDirty();
        renderPreview();
        saveCurrentDraft();
      }
    });
    els.preview.addEventListener("pointerdown", beginPreviewPhotoFrameResize);
    els.preview.addEventListener("keydown", keyPreviewPhotoFrameResize);
    document.addEventListener("pointermove", movePreviewPhotoFrameResize);
    document.addEventListener("pointerup", endPreviewPhotoFrameResize);
    document.addEventListener("pointercancel", cancelPreviewPhotoFrameResize);
    els.preview.addEventListener("lostpointercapture", endPreviewPhotoFrameResize);
    els.preview.addEventListener("pointerdown", beginPreviewPhotoPan);
    els.preview.addEventListener("pointermove", movePreviewPhotoPan);
    els.preview.addEventListener("pointerup", endPreviewPhotoPan);
    els.preview.addEventListener("pointercancel", endPreviewPhotoPan);
    els.preview.addEventListener("lostpointercapture", endPreviewPhotoPan);
  }

  async function printProposalPdf() {
    flashStatus("Preparing PDF...");
    await waitForProposalPrintAssets();
    await new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(resolve);
      });
    });
    window.print();
    flashStatus("PDF ready to save.");
  }

  async function waitForProposalPrintAssets() {
    var waits = [];
    if (document.fonts && document.fonts.ready) {
      waits.push(document.fonts.ready.catch(function () {}));
    }
    document.querySelectorAll(".proposal-document img").forEach(function (image) {
      image.loading = "eager";
      if (image.complete) {
        if (typeof image.decode === "function") {
          waits.push(image.decode().catch(function () {}));
        }
        return;
      }
      waits.push(new Promise(function (resolve) {
        var timeout = window.setTimeout(resolve, 5000);
        function finish() {
          window.clearTimeout(timeout);
          resolve();
        }
        image.addEventListener("load", finish, { once: true });
        image.addEventListener("error", finish, { once: true });
      }));
    });
    await Promise.all(waits);
  }

  function createDefaultProposal() {
    var today = new Date().toISOString().slice(0, 10);
    return normalizeProposal({
      meta: {
        id: "draft-" + Date.now(),
        createdAt: today,
        updatedAt: today,
        samplePhotosSeeded: true
      },
      customCover: {
        enabled: false,
        name: "",
        dataUrl: "",
        stored: false,
        orientation: ""
      },
      customCompensation: {
        enabled: false,
        name: "",
        dataUrl: "",
        stored: false,
        orientation: ""
      },
      templateId: "fullService",
      themeId: "maOg",
      project: {
        proposalDate: today,
        projectName: "S. Post Oak Multifamily Development",
        projectLocation: "S. Post Oak Lane and S. Wynden Drive, Houston",
        clientCompany: "BuildPro Construction / Captiva Development",
        clientContact: "Mr. Richard Osika",
        clientTitle: "Managing Member",
        clientAddress: "299 Market St.\nSaddle Brook, NJ 07663",
        program: "High-rise multifamily residential development with podium configuration, approximately 300 residential units, structured parking, and interior and exterior amenity spaces.",
        scopeOfWork: "Architectural Design services for a landmark multifamily residential tower, including design architect services through concept, schematic design, design development, construction documents support, bidding coordination, and construction administration.",
        siteDescription: "approximately 2-acre site located at the intersection of S. Post Oak Lane and S. Wynden Drive",
        designIntent: "timeless architectural character, a strong amenity-driven experience, and a cohesive residential environment that supports a range of lifestyles while establishing a clear identity within the neighborhood",
        ownerRequirements: [
          "Multifamily residential tower with podium configuration",
          "300 total residential units",
          "Average unit size of 1,400 square feet",
          "Primary focus on one and two-bedroom units, with select three-bedroom units",
          "Parking ratio of approximately 1.8 cars per unit with structured parking garage sized at approximately 425 square feet per car",
          "Approximately 40 stories in height",
          "Strong emphasis on interior and exterior amenity spaces. Interior amenities of approximately 20,000 SF",
          "Exterior amenity area of 15,000 square feet",
          "Architectural character preference toward a timeless design approach"
        ].join("\n"),
        ownerProvidedInfo: [
          "Targeted demographics",
          "Targeted Unit Mix",
          "Targeted average Unit size",
          "Target approximation of Residential gross SF",
          "Target gross SF of Amenity Space, interior and exterior",
          "Target range of Construction Budget"
        ].join("\n"),
        summaryDeliverables: "",
        showSummaryDeliverables: false,
        maAssumptions: [
          "300 Units at 1,400 SF average unit size",
          "420,000 NRA",
          "No Retail",
          "5,000 SF for lobby",
          "20,000 SF of interior amenities",
          "15,000 SF of exterior amenity deck",
          "Parking at 1.8 per unit = 540 cars"
        ].join("\n"),
        photoTypologies: ""
      },
      schedule: {
        concept: "8 weeks",
        schematic: "12 weeks",
        designDevelopment: "16 weeks",
        valueEngineeringStudy: "",
        constructionDocuments: "TBD by AOR",
        bidding: "TBD by AOR",
        permitIfc: "TBD by AOR",
        constructionAdministration: "36 months (estimated)"
      },
      consultants: [
        { name: "Structural", group: "Primary", included: true },
        { name: "MEP", group: "Primary", included: true },
        { name: "Landscape Architecture", group: "Primary", included: true },
        { name: "Interior Design", group: "Primary", included: true },
        { name: "Elevator Consultant", group: "Secondary", included: true },
        { name: "Envelope and Waterproofing", group: "Secondary", included: true },
        { name: "Lighting", group: "Secondary", included: true },
        { name: "Accessibility", group: "Secondary", included: true },
        { name: "Specifications", group: "Secondary", included: true },
        { name: "Door Hardware", group: "Secondary", included: true },
        { name: "Acoustical", group: "Secondary", included: true },
        { name: "Wind Tunnel", group: "Secondary", included: true },
        { name: "LEED and Sustainability", group: "Secondary", included: true },
        { name: "Façade Maintenance and Cleaning", group: "Secondary", included: true },
        { name: "Civil", group: "Owner coordinated", included: true },
        { name: "Graphics and Signage Consultant", group: "Owner coordinated", included: true },
        { name: "Geotech Consultant", group: "Owner coordinated", included: true },
        { name: "Security / AV Consultant", group: "Owner coordinated", included: true },
        { name: "Survey with Topo", group: "Owner coordinated", included: true }
      ],
      compensation: {
        amount: "1,379,550.00",
        amountWords: "One million, three hundred seventy-nine thousand, five hundred and fifty and 00/100",
        concept: "137,955",
        schematic: "383,208",
        designDevelopment: "551,820",
        constructionDocuments: "91,970",
        bid: "",
        constructionObservation: "214,597",
        showFeeNotes: true,
        feeNotesText: DEFAULT_COMPENSATION_FEE_NOTES_TEXT,
        feeNotesReference: DEFAULT_COMPENSATION_FEE_NOTES_REFERENCE
      },
      feeSchedule: {
        name: "",
        dataUrl: ""
      },
      photoSelections: {},
      scheduleImport: {
        name: "",
        dataUrl: "",
        text: ""
      },
      compensationImport: {
        name: "",
        dataUrl: "",
        text: ""
      },
      sectionOverrides: {},
      photos: defaultPhotos(),
      attachments: [
        { title: "Attachment A", note: "Plot Survey placeholder" },
        { title: "Attachment B", note: "Architect of Record Fees placeholder" },
        { title: "Attachment C", note: "General Conditions placeholder" },
        { title: "Attachment D", note: "Proposed Project Schedule placeholder" },
        { title: "Attachment E", note: "Certificate of Insurance placeholder" }
      ]
    });
  }

  function normalizeProposal(value) {
    var base = value || {};
    base.meta = base.meta || {};
    base.project = base.project || {};
    base.schedule = base.schedule || {};
    base.scheduleImport = base.scheduleImport || {};
    base.compensation = base.compensation || {};
    base.compensationImport = base.compensationImport || {};
    base.feeSchedule = base.feeSchedule || {};
    base.sectionOverrides = base.sectionOverrides || {};
    base.photoSelections = base.photoSelections || {};
    base.photoFrameHeights = normalizePhotoFrameHeights(base.photoFrameHeights);
    base.textFrameBottoms = ProposalTextFlow.normalize(base.textFrameBottoms);
    base.photos = Array.isArray(base.photos) ? base.photos : [];
    if (base.photos.some(function (photo) { return photo.sample; })) {
      base.meta.samplePhotosSeeded = true;
    }
    if (!base.meta.samplePhotosSeeded && !base.photos.length) {
      base.photos = defaultPhotos();
      base.meta.samplePhotosSeeded = true;
    }
    base.consultants = Array.isArray(base.consultants) ? base.consultants : [];
    base.attachments = Array.isArray(base.attachments) ? base.attachments : [];
    if (!base.templateId) {
      base.templateId = "fullService";
    }
    base.themeId = normalizeThemeId(base.themeId || base.meta.themeId);
    base.meta.themeId = base.themeId;
    if (base.project.photoTypologies === "") {
      base.project.photoTypologies = defaultPhotoTypologies.slice().join(", ");
    }
    if (Array.isArray(base.project.photoTypologies)) {
      base.project.photoTypologies = base.project.photoTypologies.join(", ");
    }
    base.project.photoTypologies = parsePhotoTypologies(base.project.photoTypologies).join(", ");
    base.photos.forEach(function (photo) {
      if (!hasPhotoTypology(photo.typology)) {
        photo.typology = defaultPhotoTypologies[0];
      }
    });
    return base;
  }

  function defaultPhotos() {
    var base = "assets/default-photos/";
    return [
      { id: "sample-context-01", name: "Full Service sample context 01", dataUrl: base + "context-01.jpg", typology: "context", included: true, sample: true },
      { id: "sample-context-02", name: "Full Service sample context 02", dataUrl: base + "context-02.jpg", typology: "context", included: true, sample: true },
      { id: "sample-program-01", name: "Full Service sample program 01", dataUrl: base + "program-01.jpg", typology: "program", included: true, sample: true },
      { id: "sample-design-01", name: "Full Service sample design 01", dataUrl: base + "design-01.jpg", typology: "design", included: true, sample: true },
      { id: "sample-scope-01", name: "Full Service sample scope 01", dataUrl: base + "scope-01.jpg", typology: "scope", included: true, sample: true },
      { id: "sample-concept-01", name: "Full Service sample concept 01", dataUrl: base + "concept-01.jpg", typology: "concept", included: true, sample: true }
    ];
  }

  function renderAll() {
    renderTabs();
    renderDraftSelect();
    renderNav();
    renderEditor();
    renderPreview();
    updateHeader();
  }

  function renderTabs() {
    els.tabs.forEach(function (button) {
      button.classList.toggle("active", button.dataset.tab === activeTab);
    });
  }

  function renderNav() {
    if (!validSectionId(activeSectionId)) {
      activeSectionId = defaultActiveSectionId();
      saveCurrentDraft();
    }
    els.nav.innerHTML = "";
    sectionDefinitions.forEach(function (section, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "step-button" + (section.id === activeSectionId ? " active" : "");
      button.innerHTML = '<span class="step-number">' + (index + 1) + '</span><span class="step-label">' + escapeHtml(section.title) + "</span>";
      button.addEventListener("click", function () {
        activeTab = "sections";
        activeSectionId = section.id;
        saveCurrentDraft();
        renderAll();
      });
      els.nav.appendChild(button);
    });
  }

  function renderEditor() {
    if (activeTab !== "photos") {
      resetPhotoLibraryThumbnailLoading();
    }
    if (activeTab === "notes") {
      renderNotesPanel();
    } else if (activeTab === "photos") {
      renderPhotosPanel();
    } else if (activeTab === "sections") {
      renderSectionsPanel();
    } else {
      renderInfoPanel();
    }
  }

  function renderInfoPanel() {
    els.editor.innerHTML = "";

    var templateCard = panelCard("Proposal Type", "Choose the structure for this proposal.");
    var templateGrid = document.createElement("div");
    templateGrid.className = "template-grid";
    templates.forEach(function (template) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "template-button" + (proposal.templateId === template.id ? " active" : "");
      button.innerHTML = "<strong>" + escapeHtml(template.label) + "</strong><span>" + escapeHtml(template.note) + "</span>";
      button.addEventListener("click", function () {
        proposal.templateId = template.id;
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      templateGrid.appendChild(button);
    });
    templateCard.appendChild(templateGrid);
    els.editor.appendChild(templateCard);

    var themeCard = panelCard("Theme", "Choose the visual layout for this proposal.");
    var themeGrid = document.createElement("div");
    themeGrid.className = "template-grid theme-grid";
    themes.forEach(function (theme) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "template-button theme-button" + (proposal.themeId === theme.id ? " active" : "");
      button.innerHTML = "<strong>" + escapeHtml(theme.label) + "</strong><span>" + escapeHtml(theme.note) + "</span>";
      button.addEventListener("click", function () {
        setProposalTheme(theme.id);
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      themeGrid.appendChild(button);
    });
    themeCard.appendChild(themeGrid);
    els.editor.appendChild(themeCard);

    var projectInfoCard = fieldsCard("Project Information", [
      fieldDef("project.projectName", "Project name"),
      fieldDef("project.proposalDate", "Proposal date", "date"),
      fieldDef("project.projectLocation", "Project location"),
      fieldDef("project.clientCompany", "Client / owner"),
      fieldDef("project.clientContact", "Client contact"),
      fieldDef("project.clientTitle", "Client title"),
      fieldDef("project.clientAddress", "Client address", "textarea", true)
    ]);
    projectInfoCard.querySelector(".field-grid").appendChild(renderProjectPhotoTypologyField());
    els.editor.appendChild(projectInfoCard);
    renderClientLogosCard();

    renderDesignScheduleCard();

    renderCompensationCard();

    renderConsultantsCard();
    renderFeeScheduleCard();
  }

  function renderProjectPhotoTypologyField() {
    var wrap = document.createElement("div");
    wrap.className = "field full";
    var label = document.createElement("label");
    label.textContent = "Photo typologies to include";
    wrap.appendChild(label);

    var selected = parsePhotoTypologies(proposal.project.photoTypologies);
    var options = availablePhotoTypologies();
    var visibleSelection = selected.filter(function (item) {
      return options.map(normalizeTypology).indexOf(normalizeTypology(item)) >= 0;
    });
    var list = document.createElement("div");
    list.className = "typology-options";
    options.forEach(function (option) {
      var optionKey = normalizeTypology(option);
      var row = document.createElement("label");
      row.className = "typology-option";
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = visibleSelection.indexOf(optionKey) >= 0;
      checkbox.addEventListener("change", function () {
        var current = Array.from(list.querySelectorAll(".typology-option input:checked")).map(function (input) {
          return input.value;
        });
        proposal.project.photoTypologies = current.join(", ");
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      checkbox.value = optionKey;
      row.appendChild(checkbox);
      row.appendChild(document.createTextNode(formatTypologyLabel(option)));
      list.appendChild(row);
    });
    wrap.appendChild(list);
    return wrap;
  }

  function renderConsultantsCard() {
    var card = panelCard("Consultants", "Toggle consultants in or out for this proposal.");
    var list = document.createElement("div");
    list.className = "option-list";
    proposal.consultants.forEach(function (consultant, index) {
      var row = document.createElement("button");
      row.type = "button";
      row.className = "option-row" + (consultant.included ? " active" : "");
      row.innerHTML = "<strong>" + escapeHtml(consultant.name) + "</strong><span>" + escapeHtml(consultant.group) + (consultant.included ? " - included" : " - excluded") + "</span>";
      row.addEventListener("click", function () {
        proposal.consultants[index].included = !proposal.consultants[index].included;
        markDirty();
        renderAll();
      });
      list.appendChild(row);
    });
    card.appendChild(list);
    els.editor.appendChild(card);
  }

  function renderDesignScheduleCard() {
    var card = panelCard("Design Schedule", "Type durations manually, or drop/paste a schedule image to read it.");
    var grid = document.createElement("div");
    grid.className = "field-grid";
    scheduleFieldDefs.forEach(function (field) {
      grid.appendChild(renderField(field));
    });
    card.appendChild(grid);

    var tools = document.createElement("div");
    tools.className = "schedule-import";

    var drop = document.createElement("div");
    drop.className = "drop-zone schedule-drop-zone";
    drop.tabIndex = 0;
    drop.innerHTML = '<strong>' + (proposal.scheduleImport.name ? escapeHtml(proposal.scheduleImport.name) : "Drop or paste schedule image") + '</strong><span>' + (proposal.scheduleImport.name ? "Reading this image can update the fields above." : "Click this area, then paste an image from your clipboard, or drag one in.") + '</span>';
    bindScheduleImageDropZone(drop);

    var imageWrap = document.createElement("div");
    imageWrap.className = "schedule-image-preview";
    if (proposal.scheduleImport.dataUrl) {
      imageWrap.innerHTML = '<img src="' + proposal.scheduleImport.dataUrl + '" alt="Imported schedule image">';
    } else {
      imageWrap.innerHTML = "<span>No schedule image yet</span>";
    }

    var textWrap = document.createElement("div");
    textWrap.className = "schedule-import-text";
    var label = document.createElement("label");
    label.setAttribute("for", "schedule-import-text");
    label.textContent = "Recognized schedule text";
    var textarea = document.createElement("textarea");
    textarea.id = "schedule-import-text";
    textarea.value = proposal.scheduleImport.text || "";
    textarea.placeholder = "Recognized schedule text will appear here. You can also paste text from a schedule and apply it.";
    textarea.addEventListener("input", function () {
      proposal.scheduleImport.text = textarea.value;
      markDirty();
    });
    var actions = document.createElement("div");
    actions.className = "schedule-import-actions";
    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = "image/*";
    upload.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) {
        importScheduleImage(file, drop);
      }
    });
    var apply = document.createElement("button");
    apply.type = "button";
    apply.className = "secondary compact";
    apply.textContent = "Apply Text";
    apply.addEventListener("click", function () {
      applyScheduleText(textarea.value, "No matching schedule rows were found.");
    });
    var clear = document.createElement("button");
    clear.type = "button";
    clear.className = "danger compact";
    clear.textContent = "Clear Image";
    clear.addEventListener("click", function () {
      proposal.scheduleImport = { name: "", dataUrl: "", text: "" };
      markDirty();
      renderAll();
    });
    actions.appendChild(upload);
    actions.appendChild(apply);
    actions.appendChild(clear);
    textWrap.appendChild(label);
    textWrap.appendChild(textarea);
    textWrap.appendChild(actions);

    tools.appendChild(drop);
    tools.appendChild(imageWrap);
    tools.appendChild(textWrap);
    card.appendChild(tools);
    els.editor.appendChild(card);
  }

  function renderCompensationCard() {
    var card = panelCard("Compensation", "Type amounts manually, or drop/paste a compensation image to read the fee breakdown.");
    var grid = document.createElement("div");
    grid.className = "field-grid";
    [
      fieldDef("compensation.amount", "Total fee"),
      fieldDef("compensation.amountWords", "Amount in words", "textarea", true),
      fieldDef("compensation.concept", "Conceptual Design"),
      fieldDef("compensation.schematic", "Schematic Design"),
      fieldDef("compensation.designDevelopment", "Design Development"),
      fieldDef("compensation.constructionDocuments", "Construction Documents"),
      fieldDef("compensation.bid", "Bid"),
      fieldDef("compensation.constructionObservation", "Construction Administration")
    ].forEach(function (field) {
      grid.appendChild(renderField(field));
    });
    card.appendChild(grid);

    var tools = document.createElement("div");
    tools.className = "schedule-import";

    var drop = document.createElement("div");
    drop.className = "drop-zone compensation-drop-zone";
    drop.tabIndex = 0;
    drop.innerHTML = '<strong>' + (proposal.compensationImport.name ? escapeHtml(proposal.compensationImport.name) : "Drop or paste compensation image") + '</strong><span>' + (proposal.compensationImport.name ? "Reading this image can update the compensation fields above." : "Click this area, then paste an image from your clipboard, or drag one in.") + '</span>';
    bindCompensationImageDropZone(drop);

    var imageWrap = document.createElement("div");
    imageWrap.className = "schedule-image-preview";
    if (proposal.compensationImport.dataUrl) {
      imageWrap.innerHTML = '<img src="' + proposal.compensationImport.dataUrl + '" alt="Imported compensation image">';
    } else {
      imageWrap.innerHTML = "<span>No compensation image yet</span>";
    }

    var textWrap = document.createElement("div");
    textWrap.className = "schedule-import-text";
    var label = document.createElement("label");
    label.setAttribute("for", "compensation-import-text");
    label.textContent = "Recognized compensation text";
    var textarea = document.createElement("textarea");
    textarea.id = "compensation-import-text";
    textarea.value = proposal.compensationImport.text || "";
    textarea.placeholder = "Recognized compensation text will appear here. You can also paste text from a fee image and apply it.";
    textarea.addEventListener("input", function () {
      proposal.compensationImport.text = textarea.value;
      markDirty();
    });
    var actions = document.createElement("div");
    actions.className = "schedule-import-actions";
    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = "image/*";
    upload.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) {
        importCompensationImage(file, drop);
      }
    });
    var apply = document.createElement("button");
    apply.type = "button";
    apply.className = "secondary compact";
    apply.textContent = "Apply Text";
    apply.addEventListener("click", function () {
      applyCompensationText(textarea.value, "No matching compensation amounts were found.");
    });
    var clear = document.createElement("button");
    clear.type = "button";
    clear.className = "danger compact";
    clear.textContent = "Clear Image";
    clear.addEventListener("click", function () {
      proposal.compensationImport = { name: "", dataUrl: "", text: "" };
      markDirty();
      renderAll();
    });
    actions.appendChild(upload);
    actions.appendChild(apply);
    actions.appendChild(clear);
    textWrap.appendChild(label);
    textWrap.appendChild(textarea);
    textWrap.appendChild(actions);

    tools.appendChild(drop);
    tools.appendChild(imageWrap);
    tools.appendChild(textWrap);
    card.appendChild(tools);
    els.editor.appendChild(card);
  }

  function bindScheduleImageDropZone(drop) {
    drop.addEventListener("dragover", function (event) {
      event.preventDefault();
      drop.classList.add("drag-over");
    });
    drop.addEventListener("dragleave", function () {
      drop.classList.remove("drag-over");
    });
    drop.addEventListener("drop", function (event) {
      event.preventDefault();
      drop.classList.remove("drag-over");
      var file = event.dataTransfer.files && Array.from(event.dataTransfer.files).find(function (item) {
        return /^image\//.test(item.type);
      });
      if (file) {
        importScheduleImage(file, drop);
      }
    });
    drop.addEventListener("paste", function (event) {
      var items = Array.from((event.clipboardData && event.clipboardData.items) || []);
      var imageItem = items.find(function (item) { return /^image\//.test(item.type); });
      if (imageItem) {
        event.preventDefault();
        importScheduleImage(imageItem.getAsFile(), drop);
      }
    });
    drop.addEventListener("click", function () {
      drop.focus();
    });
  }

  function bindCompensationImageDropZone(drop) {
    drop.addEventListener("dragover", function (event) {
      event.preventDefault();
      drop.classList.add("drag-over");
    });
    drop.addEventListener("dragleave", function () {
      drop.classList.remove("drag-over");
    });
    drop.addEventListener("drop", function (event) {
      event.preventDefault();
      drop.classList.remove("drag-over");
      var file = event.dataTransfer.files && Array.from(event.dataTransfer.files).find(function (item) {
        return /^image\//.test(item.type);
      });
      if (file) {
        importCompensationImage(file, drop);
      }
    });
    drop.addEventListener("paste", function (event) {
      var items = Array.from((event.clipboardData && event.clipboardData.items) || []);
      var imageItem = items.find(function (item) { return /^image\//.test(item.type); });
      if (imageItem) {
        event.preventDefault();
        importCompensationImage(imageItem.getAsFile(), drop);
      }
    });
    drop.addEventListener("click", function () {
      drop.focus();
    });
  }

  function renderFeeScheduleCard() {
    var card = panelCard("Fee Schedule", "Drag and drop a fee schedule image or PDF here.");
    var drop = document.createElement("div");
    drop.className = "drop-zone";
    drop.innerHTML = "<strong>" + (proposal.feeSchedule.name ? escapeHtml(proposal.feeSchedule.name) : "Drop fee schedule here") + "</strong><span>" + (proposal.feeSchedule.name ? "This file will appear in the Fee Schedule section." : "Supports images or PDFs stored in this draft.") + "</span>";
    drop.addEventListener("dragover", function (event) {
      event.preventDefault();
      drop.classList.add("drag-over");
    });
    drop.addEventListener("dragleave", function () {
      drop.classList.remove("drag-over");
    });
    drop.addEventListener("drop", function (event) {
      event.preventDefault();
      drop.classList.remove("drag-over");
      var file = event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) {
        readFileAsDataUrl(file, function (dataUrl) {
          proposal.feeSchedule = { name: file.name, dataUrl: dataUrl };
          markDirty();
          renderAll();
        });
      }
    });
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,.pdf";
    input.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) {
        readFileAsDataUrl(file, function (dataUrl) {
          proposal.feeSchedule = { name: file.name, dataUrl: dataUrl };
          markDirty();
          renderAll();
        });
      }
    });
    card.appendChild(drop);
    card.appendChild(input);
    els.editor.appendChild(card);
  }

  function renderSectionsPanel() {
    els.editor.innerHTML = "";
    var section = sectionDefinitions.find(function (item) { return item.id === activeSectionId; }) || sectionDefinitions[0];
    var generated = getSectionText(section);
    var card = document.createElement("section");
    card.className = "section-editor";
    card.innerHTML = '<div class="section-editor-head"><div><p class="eyebrow">Section</p><h3>' + escapeHtml(section.title) + '</h3></div><div class="section-meta"><span class="pill">' + escapeHtml(section.source) + '</span><span class="pill">photo: ' + escapeHtml(section.photoType) + '</span></div></div>';
    var textarea = document.createElement("textarea");
    textarea.value = generated;
    textarea.addEventListener("input", function () {
      proposal.sectionOverrides[section.id] = textarea.value;
      markDirty();
      renderPreview();
    });
    var reset = document.createElement("button");
    reset.type = "button";
    reset.className = "secondary compact";
    reset.textContent = "Reset to generated";
    reset.addEventListener("click", function () {
      delete proposal.sectionOverrides[section.id];
      markDirty();
      renderAll();
    });
    card.appendChild(textarea);
    card.appendChild(reset);
    els.editor.appendChild(card);
  }

  function renderPhotosPanel() {
    resetPhotoLibraryThumbnailLoading();
    els.editor.innerHTML = "";
    var uploadCard = panelCard("Photo Library", "Upload photos, assign typologies, and mark which images can be used in the proposal. Drag any included photo onto a photo frame in the preview to replace it.");
    var folderNote = document.createElement("p");
    folderNote.className = "field-help";
    folderNote.textContent = "Folder sync: shared Project Images library";
    uploadCard.appendChild(folderNote);
    var refreshFolder = document.createElement("button");
    refreshFolder.type = "button";
    refreshFolder.className = "secondary compact";
    refreshFolder.textContent = "Refresh Folder";
    refreshFolder.addEventListener("click", function () {
      syncProjectImageFolder(function (changed) {
        if (!changed) {
          flashStatus("Project Images folder is up to date.");
        }
        renderAll();
      }, { force: true });
    });
    uploadCard.appendChild(refreshFolder);
    var libraryFilter = document.createElement("div");
    libraryFilter.className = "field photo-library-filter";
    var libraryFilterLabel = document.createElement("label");
    libraryFilterLabel.htmlFor = "photo-library-typology-filter";
    libraryFilterLabel.textContent = "Show typology";
    var libraryFilterSelect = document.createElement("select");
    libraryFilterSelect.id = "photo-library-typology-filter";
    var allTypologiesOption = document.createElement("option");
    allTypologiesOption.value = "all";
    allTypologiesOption.textContent = "All typologies";
    libraryFilterSelect.appendChild(allTypologiesOption);
    availablePhotoTypologies().forEach(function (typology) {
      var option = document.createElement("option");
      option.value = normalizeTypology(typology);
      option.textContent = formatTypologyLabel(typology);
      libraryFilterSelect.appendChild(option);
    });
    if (!Array.from(libraryFilterSelect.options).some(function (option) { return option.value === photoLibraryTypologyFilter; })) {
      photoLibraryTypologyFilter = "all";
    }
    libraryFilterSelect.value = photoLibraryTypologyFilter;
    libraryFilterSelect.addEventListener("change", function () {
      photoLibraryTypologyFilter = libraryFilterSelect.value || "all";
      renderPhotosPanel();
    });
    libraryFilter.appendChild(libraryFilterLabel);
    libraryFilter.appendChild(libraryFilterSelect);
    uploadCard.appendChild(libraryFilter);
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.addEventListener("change", function (event) {
      var files = Array.from(event.target.files || []);
      files.forEach(function (file) {
        readPhotoFileAsDataUrl(file, function (dataUrl) {
          var photo = {
            id: "photo-" + Date.now() + "-" + Math.round(Math.random() * 100000),
            name: file.name,
            dataUrl: dataUrl,
            typology: defaultPhotoTypologies[0],
            included: true
          };
          proposal.photos.push(photo);
          markDirty();
          renderAll();
          storePhotoData(photo, function (stored) {
            photo.stored = stored;
            saveCurrentDraft();
            renderAll();
          });
        });
      });
      event.target.value = "";
    });
    uploadCard.appendChild(input);
    els.editor.appendChild(uploadCard);
    syncProjectImageFolder(function (changed) {
      if (changed && activeTab === "photos") {
        renderAll();
      }
    });

    var gridCard = panelCard("Uploaded Photos", "Typologies are used to randomly choose left-side page images.");
    var grid = document.createElement("div");
    grid.className = "photo-typology-groups";
    if (!proposal.photos.length) {
      grid.innerHTML = '<div class="attachment-placeholder">No photos uploaded yet.</div>';
    }
    availablePhotoTypologies().forEach(function (typology) {
      var typeKey = normalizeTypology(typology);
      if (photoLibraryTypologyFilter !== "all" && typeKey !== photoLibraryTypologyFilter) {
        return;
      }
      var photosForType = proposal.photos.map(function (photo, index) {
        return { photo: photo, index: index };
      }).filter(function (item) {
        return normalizeTypology(item.photo.typology) === typeKey;
      });
      if (!photosForType.length && typeKey !== normalizeTypology(defaultPhotoTypologies[0])) {
        return;
      }
      var group = document.createElement("section");
      group.className = "photo-typology-group";
      group.innerHTML = '<div class="photo-typology-heading"><h4>' + escapeHtml(typology) + '</h4><span>' + photosForType.length + ' photo' + (photosForType.length === 1 ? "" : "s") + '</span></div>';
      var photoGrid = document.createElement("div");
      photoGrid.className = "photo-grid";
      if (!photosForType.length) {
        photoGrid.innerHTML = '<div class="attachment-placeholder">New uploaded images will appear here first.</div>';
      }
      photosForType.forEach(function (item) {
        var photo = item.photo;
        var index = item.index;
        var card = document.createElement("article");
        card.className = "photo-card";
        if (photo.dataUrl) {
          var thumbnail = photoLibraryThumbnailImage(photo);
          var canPlacePhoto = isPhotoAvailableForManualPlacement(photo);
          thumbnail.draggable = false;
          thumbnail.dataset.photoLibraryId = canPlacePhoto ? photo.id : "";
          thumbnail.classList.toggle("photo-thumb-draggable", canPlacePhoto);
          thumbnail.title = canPlacePhoto
            ? "Drag onto a photo frame in the proposal preview"
            : "Mark this photo Included before placing it";
          card.appendChild(thumbnail);
        } else {
          card.innerHTML = '<div class="photo-thumb photo-missing">Photo loading</div>';
        }
        var typeField = document.createElement("div");
        typeField.className = "field";
        typeField.innerHTML = '<label>Typology</label>';
        var typeInput = document.createElement("select");
        availablePhotoTypologies().forEach(function (optionTypology) {
          var option = document.createElement("option");
          option.value = normalizeTypology(optionTypology);
          option.textContent = formatTypologyLabel(optionTypology);
          typeInput.appendChild(option);
        });
        typeInput.value = hasPhotoTypology(photo.typology) ? normalizeTypology(photo.typology) : normalizeTypology(defaultPhotoTypologies[0]);
        typeInput.addEventListener("change", function () {
          proposal.photos[index].typology = typeInput.value;
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        typeField.appendChild(typeInput);
        var includeField = document.createElement("div");
        includeField.className = "field";
        var includeButton = document.createElement("button");
        includeButton.type = "button";
        includeButton.className = "secondary compact";
        includeButton.textContent = photo.included ? "Included" : "Excluded";
        includeButton.addEventListener("click", function () {
          proposal.photos[index].included = !proposal.photos[index].included;
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        includeField.appendChild(includeButton);
        var actions = document.createElement("div");
        actions.className = "photo-actions";
        var remove = document.createElement("button");
        remove.type = "button";
        remove.className = "danger compact";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
          deletePhotoData(proposal.photos[index].id);
          proposal.photos.splice(index, 1);
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        actions.appendChild(remove);
        card.appendChild(typeField);
        card.appendChild(includeField);
        card.appendChild(actions);
        photoGrid.appendChild(card);
      });
      group.appendChild(photoGrid);
      grid.appendChild(group);
    });
    gridCard.appendChild(grid);
    els.editor.appendChild(gridCard);
    activatePhotoLibraryThumbnailLoading();
  }

  function resetPhotoLibraryThumbnailLoading() {
    photoThumbnailGeneration += 1;
    photoThumbnailQueue = [];
    if (photoThumbnailObserver) {
      photoThumbnailObserver.disconnect();
      photoThumbnailObserver = null;
    }
  }

  function photoLibraryThumbnailImage(photo) {
    var image = document.createElement("img");
    image.className = "photo-thumb photo-thumb-loading";
    image.alt = photo.name || "Photo library image";
    image.title = photo.name || formatTypologyLabel(photo.typology) || "Uploaded image";
    image.width = 320;
    image.height = 240;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    var cacheKey = photoLibraryThumbnailCacheKey(photo);
    var cached = photoThumbnailCache.get(cacheKey);
    if (cached) {
      image.src = cached;
      image.classList.remove("photo-thumb-loading");
      return image;
    }
    var generation = photoThumbnailGeneration;
    image._photoThumbnailTask = { image: image, photo: photo, cacheKey: cacheKey, generation: generation };
    return image;
  }

  function activatePhotoLibraryThumbnailLoading() {
    var pendingImages = Array.from(els.editor.querySelectorAll("img.photo-thumb-loading")).filter(function (image) {
      return !!image._photoThumbnailTask;
    });
    if (!pendingImages.length) {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      pendingImages.forEach(function (image) {
        var task = image._photoThumbnailTask;
        delete image._photoThumbnailTask;
        enqueuePhotoLibraryThumbnail(task);
      });
      return;
    }
    photoThumbnailObserver = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        photoThumbnailObserver.unobserve(entry.target);
        var task = entry.target._photoThumbnailTask;
        delete entry.target._photoThumbnailTask;
        if (task) {
          enqueuePhotoLibraryThumbnail(task);
        }
      });
    }, { root: els.editor, rootMargin: "420px 0px" });
    pendingImages.forEach(function (image) {
      photoThumbnailObserver.observe(image);
    });
  }

  function photoLibraryThumbnailCacheKey(photo) {
    return [photo.id || photo.name || "photo", photo.sourceUpdatedAt || "", String(photo.dataUrl || "").length].join("|");
  }

  function enqueuePhotoLibraryThumbnail(task) {
    photoThumbnailQueue.push(task);
    pumpPhotoLibraryThumbnailQueue();
  }

  function pumpPhotoLibraryThumbnailQueue() {
    while (activePhotoThumbnailJobs < 3 && photoThumbnailQueue.length) {
      var task = photoThumbnailQueue.shift();
      if (!task || task.generation !== photoThumbnailGeneration || !task.image.isConnected) {
        continue;
      }
      activePhotoThumbnailJobs += 1;
      startPhotoLibraryThumbnailTask(task);
    }
  }

  function startPhotoLibraryThumbnailTask(task) {
    createPhotoLibraryThumbnail(task.photo, function (thumbnailUrl) {
      if (thumbnailUrl) {
        rememberPhotoLibraryThumbnail(task.cacheKey, thumbnailUrl);
      }
      if (task.generation === photoThumbnailGeneration && task.image.isConnected && thumbnailUrl) {
        task.image.src = thumbnailUrl;
        task.image.classList.remove("photo-thumb-loading");
      }
      activePhotoThumbnailJobs -= 1;
      pumpPhotoLibraryThumbnailQueue();
    });
  }

  function createPhotoLibraryThumbnail(photo, callback) {
    var source = photo && photo.dataUrl;
    if (!source) {
      callback("");
      return;
    }
    var fullImage = new Image();
    fullImage.decoding = "async";
    fullImage.onload = function () {
      try {
        var maxWidth = 320;
        var maxHeight = 240;
        var width = Math.max(1, fullImage.naturalWidth || fullImage.width || maxWidth);
        var height = Math.max(1, fullImage.naturalHeight || fullImage.height || maxHeight);
        var scale = Math.min(1, maxWidth / width, maxHeight / height);
        var canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        var context = canvas.getContext("2d");
        context.fillStyle = "#d9d3c8";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "medium";
        context.drawImage(fullImage, 0, 0, canvas.width, canvas.height);
        callback(canvas.toDataURL("image/jpeg", 0.56));
      } catch (error) {
        callback(source);
      }
    };
    fullImage.onerror = function () {
      callback(source);
    };
    fullImage.src = source;
  }

  function rememberPhotoLibraryThumbnail(cacheKey, thumbnailUrl) {
    if (!cacheKey || !thumbnailUrl) {
      return;
    }
    if (photoThumbnailCache.has(cacheKey)) {
      photoThumbnailCache.delete(cacheKey);
    }
    photoThumbnailCache.set(cacheKey, thumbnailUrl);
    while (photoThumbnailCache.size > 160) {
      photoThumbnailCache.delete(photoThumbnailCache.keys().next().value);
    }
  }

  function fieldsCard(title, fields) {
    var card = panelCard(title, "");
    var grid = document.createElement("div");
    grid.className = "field-grid";
    fields.forEach(function (field) {
      grid.appendChild(renderField(field));
    });
    card.appendChild(grid);
    return card;
  }

  function panelCard(title, subtitle) {
    var card = document.createElement("section");
    card.className = "panel-card";
    card.innerHTML = '<div class="panel-head"><div><p class="eyebrow">' + escapeHtml(title) + '</p>' + (subtitle ? '<h3>' + escapeHtml(subtitle) + '</h3>' : "") + "</div></div>";
    return card;
  }

  function fieldDef(path, label, type, full, placeholder) {
    return { path: path, label: label, type: type || "text", full: !!full, placeholder: placeholder || "" };
  }

  function renderField(field) {
    var wrap = document.createElement("div");
    wrap.className = "field" + (field.full || field.type === "textarea" ? " full" : "");
    var id = "field-" + field.path.replace(/\./g, "-");
    var label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = field.label;
    wrap.appendChild(label);
    var input = field.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
    input.id = id;
    if (input.tagName === "INPUT") {
      input.type = field.type === "date" ? "date" : "text";
    }
    input.value = getValue(proposal, field.path) || "";
    input.addEventListener("input", function () {
      setValue(proposal, field.path, input.value);
      if (field.path === "compensation.amount") {
        proposal.compensation.amountWords = compensationAmountToWords(input.value);
        var wordsInput = document.getElementById("field-compensation-amountWords");
        if (wordsInput) {
          wordsInput.value = proposal.compensation.amountWords;
        }
      }
      if (shouldRefreshGeneratedCopy(field.path)) {
        clearGeneratedCopy();
      }
      markDirty();
      renderPreview();
      updateHeader();
    });
    wrap.appendChild(input);
    return wrap;
  }

  function shouldRefreshGeneratedCopy(path) {
    return /^project\./.test(path) && path !== "project.photoTypologies";
  }

  function clearGeneratedCopy() {
    // Keep user-selected and edited section text intact when project info changes.
  }

  function renderPreview() {
    els.preview.classList.toggle("theme-modern-landscape", currentThemeId() === "modernLandscape");
    els.preview.classList.toggle("theme-northline-portrait", currentThemeId() === "northlinePortrait");
    document.body.classList.toggle("printing-modern-landscape", currentThemeId() === "modernLandscape");
    document.body.classList.toggle("printing-northline-portrait", currentThemeId() === "northlinePortrait");
    ensurePrintPageSize();
    photoSelectionsChanged = false;
    els.preview.innerHTML = renderProposalPages();
    if (photoSelectionsChanged && canSavePhotoSelectionsNow()) {
      saveCurrentDraft();
      photoSelectionsChanged = false;
    }
  }

  function renderProposalPages() {
    if (currentThemeId() === "modernLandscape") {
      return renderModernLandscapePages();
    }
    if (currentThemeId() === "northlinePortrait") {
      return renderNorthlinePortraitPages();
    }
    return proposalPageGroups.map(function (group, index) {
      return renderProposalPage(group, index + 1);
    }).join("");
  }

  function renderNorthlinePortraitPages() {
    var pageModels = buildStructuredPageModels();
    var pages = [renderSelectedCoverPage(renderNorthlineCoverPage()), renderNorthlineTableOfContentsPage(pageModels)];
    pageModels.forEach(function (page, index) {
      pages.push(renderSelectedCompensationPage(page, renderNorthlineModelPage(page, index + 2)));
    });
    return pages.join("");
  }

  function coverTextHtml(value, fallback) {
    var text = String(value || "").trim() || fallback;
    return escapeHtml(text).replace(/\r?\n/g, "<br>");
  }

  function renderNorthlineCoverPage() {
    var p = proposal.project || {};
    var photos = choosePagePhotos("context", "northline-cover", ["main"]);
    return '<article class="proposal-page northline-page northline-cover" data-section="cover intro">' +
      '<div class="northline-inner">' +
      '<section class="northline-cover-title">' +
      '<h1>' + coverTextHtml(p.coverTitle, "ARCHITECTURAL PROPOSAL") + '</h1>' +
      '<p>' + coverTextHtml(p.coverSubtitle, "REQUEST FOR PROPOSAL") + '</p>' +
      '</section>' +
      renderNorthlinePhoto(photos[0], "context", "northline-cover-image", photoSlotKey("northline-cover", "main", "context")) +
      '<footer class="northline-cover-footer">' +
      '<div class="northline-cover-project"><strong>' + escapeHtml(p.projectName || "Project Title") + '</strong>' + renderNorthlineClientLogoMarkup() + '<span>' + escapeHtml(p.clientCompany || "Client Name") + '</span><span>Date Submitted &nbsp; ' + escapeHtml(formatDate(p.proposalDate)) + '</span></div>' +
      '<div class="northline-cover-brand"><img class="northline-cover-brand-logo" src="' + escapeHtml(logoAssetSrc()) + '" alt="Munoz Albin logo"></div>' +
      '</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlineClientLogoMarkup() {
    var logos = proposal.project && Array.isArray(proposal.project.clientLogos) ? proposal.project.clientLogos.filter(function (logo) {
      return logo && logo.dataUrl;
    }) : [];
    if (!logos.length) {
      return "";
    }
    return '<div class="northline-client-logos">' + logos.map(function (logo, index) {
      var fallbackName = "Client logo " + (index + 1);
      return '<img class="northline-client-logo" src="' + escapeHtml(logo.dataUrl) + '" alt="' + escapeHtml(logo.name || fallbackName) + '" title="' + escapeHtml(logo.name || fallbackName) + '">';
    }).join("") + '</div>';
  }

  function renderNorthlineTableOfContentsPage(pageModels) {
    var photoType = "context";
    var photo = choosePagePhotos(photoType, "northline-toc", ["main"])[0];
    if (!photo) {
      photoType = "design";
      photo = choosePagePhotos(photoType, "northline-toc", ["main"])[0];
    }
    var seen = {};
    var entries = pageModels.map(function (page) {
      return { title: pageDisplayTitle(page) };
    }).filter(function (entry) {
      var key = normalizeTypology(entry.title);
      if (seen[key]) {
        return false;
      }
      seen[key] = true;
      return true;
    });
    return '<article class="proposal-page northline-page northline-toc-page" data-section="Contents">' +
      '<div class="northline-inner">' +
      renderNorthlinePhoto(photo, photoType, "northline-toc-photo", photoSlotKey("northline-toc", "main", photoType)) +
      '<section class="northline-toc-overlay">' +
      '<h2>Contents</h2>' +
      '<div class="northline-toc-list">' + entries.map(function (entry, index) {
        return '<div class="northline-toc-row"><span>' + escapeHtml(twoDigit(index + 1)) + '</span><strong>' + escapeHtml(entry.title) + '</strong></div>';
      }).join("") + '</div>' +
      '</section>' +
      '<footer class="northline-toc-footer">Munoz + Albin / 01</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlineModelPage(page, pageNumber) {
    if (page.attachmentPage) {
      return renderAttachmentProposalPage(page, pageNumber, "northlinePortrait");
    }
    if (page.landscapePhoto) {
      return renderNorthlineLandscapeModelPage(page, pageNumber);
    }
    if (page.header === "Our Team") {
      return renderNorthlineTeamPage(page, pageNumber);
    }
    if (page.header === "Our Qualifications") {
      return renderNorthlineQualificationsPage(page, pageNumber);
    }
    var photoType = page.photoType || "context";
    var pageKey = "northline-" + page.key;
    var photos = choosePagePhotos(photoType, pageKey, ["main"]);
    return '<article class="proposal-page northline-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="northline-inner">' +
      '<div class="northline-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="northline-flow-column">' +
      '<section class="northline-title">' +
      '<h2>' + escapeHtml(formattedPageHeaderTitle(pageDisplayTitle(page))) + '</h2>' +
      (page.subtitle ? '<p>' + escapeHtml(page.subtitle) + '</p>' : '') +
      '</section>' +
      '<section class="northline-content northline-content-model">' +
      '<div class="doc-copy">' + page.content() + '</div>' +
      '</section>' +
      '</section>' +
      '<aside class="northline-image-rail">' +
      renderNorthlinePhoto(photos[0], photoType, "northline-photo-main", photoSlotKey(pageKey, "main", photoType)) +
      '</aside>' +
      '<footer class="northline-footer">Munoz + Albin Architecture / 713.532.1110 / munozalbin.com</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlineLandscapeModelPage(page, pageNumber) {
    var photoType = page.photoType || "context";
    var pageKey = "northline-" + page.key + "-landscape";
    var photo = choosePagePhotos(photoType, pageKey, ["main"])[0];
    return '<article class="proposal-page northline-page northline-landscape-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + landscapePhotoPageStyle(pageKey, photoType) + '>' +
      '<div class="northline-inner">' +
      '<div class="northline-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="northline-flow-column northline-landscape-flow-column">' +
      '<section class="northline-title">' +
      '<h2>' + escapeHtml(formattedPageHeaderTitle(pageDisplayTitle(page))) + '</h2>' +
      (page.subtitle ? '<p>' + escapeHtml(page.subtitle) + '</p>' : '') +
      '</section>' +
      '<section class="northline-content northline-landscape-content">' +
      '<div class="doc-copy">' + page.content() + '</div>' +
      '</section>' +
      '</section>' +
      renderLandscapePagePhoto(photo, photoType, pageKey, "northline-landscape-photo northline-photo") +
      '</div>' +
      '</article>';
  }

  function renderNorthlineQualificationsPage(page, pageNumber) {
    var photoType = page.photoType || "design";
    var pageKey = "northline-" + page.key;
    var photos = choosePagePhotos(photoType, pageKey, ["main"]);
    var stats = proposal.qualifications.stats.filter(function (item) {
      return item && item.included !== false && (item.value || item.label || item.detail);
    }).slice(0, 6);
    return '<article class="proposal-page northline-page northline-qualifications-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="northline-inner">' +
      '<div class="northline-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="northline-flow-column northline-qualifications-flow-column">' +
      '<section class="northline-title northline-qualifications-title">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '</section>' +
      '<section class="northline-qualification-list">' + stats.map(function (stat) {
        return '<div class="northline-qualification-item"><strong>' + escapeHtml(stat.value) + '</strong><span>' + escapeHtml(stat.label || stat.detail || "") + '</span></div>';
      }).join("") + '</section>' +
      '</section>' +
      '<aside class="northline-image-rail">' +
      renderNorthlinePhoto(photos[0], photoType, "northline-photo-main", photoSlotKey(pageKey, "main", photoType)) +
      '</aside>' +
      '<footer class="northline-footer">Munoz + Albin Architecture / 713.532.1110 / munozalbin.com</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlineTeamPage(page, pageNumber) {
    var pageKey = "northline-" + page.key;
    var heroPhoto = choosePagePhotos("context", pageKey + "-hero", ["main"])[0] || choosePagePhotos("design", pageKey + "-hero", ["main"])[0];
    var members = selectedTeamMembers();
    return '<article class="proposal-page northline-page northline-team-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="northline-inner">' +
      '<div class="northline-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="northline-flow-column northline-team-flow-column">' +
      '<section class="northline-title northline-team-title">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '</section>' +
      '<section class="northline-team-list">' + members.map(function (member) {
        var photoMarkup = member.photoDataUrl
          ? '<img class="' + teamHeadshotClass("northline-team-person-photo") + '" src="' + member.photoDataUrl + '" alt="' + escapeHtml(member.name || "Team member") + '">'
          : '<div class="' + teamHeadshotClass("northline-team-person-photo northline-team-placeholder") + '">' + escapeHtml(initialsFromName(member.name || "Team Member")) + '</div>';
        return '<div class="northline-team-row">' + photoMarkup + '<div class="northline-team-person-copy"><strong>' + escapeHtml(member.name || "Team Member") + '</strong><span>' + escapeHtml(member.title || "") + '</span><p>' + escapeHtml(member.description || "") + '</p></div></div>';
      }).join("") + '</section>' +
      '</section>' +
      '<aside class="northline-image-rail northline-team-hero">' +
      renderNorthlinePhoto(heroPhoto, heroPhoto ? "context" : "design", "northline-photo-main", photoSlotKey(pageKey + "-hero", "main", heroPhoto ? "context" : "design")) +
      '</aside>' +
      '<footer class="northline-footer">Munoz + Albin Architecture / 713.532.1110 / munozalbin.com</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlinePortraitPage(group, sectionNumber) {
    var sections = group.sections.map(resolvePageSection).filter(Boolean);
    var sectionIds = sections.map(function (section) { return section.id; }).join(" ");
    var photoType = group.photoType || (sections[0] && sections[0].photoType) || "context";
    var pageKey = "northline-" + sectionNumber;
    var photos = choosePagePhotos(photoType, pageKey, ["main"]);
    var title = northlinePageTitle(sections, group, sectionNumber);
    return '<article class="proposal-page northline-page" data-section="' + escapeHtml(sectionIds) + '">' +
      '<div class="northline-inner">' +
      '<div class="northline-number">' + escapeHtml(twoDigit(sectionNumber)) + '</div>' +
      '<section class="northline-title">' +
      '<h2>' + escapeHtml(title) + '</h2>' +
      '</section>' +
      '<section class="northline-content">' +
      sections.map(renderNorthlineSectionBlock).join("") +
      '</section>' +
      '<aside class="northline-image-rail">' +
      renderNorthlinePhoto(photos[0], photoType, "northline-photo-main", photoSlotKey(pageKey, "main", photoType)) +
      '</aside>' +
      '<footer class="northline-footer">Munoz + Albin Architecture / 713.532.1110 / munozalbin.com</footer>' +
      '</div>' +
      '</article>';
  }

  function renderNorthlineSectionBlock(section) {
    return '<div class="northline-section-block proposal-section-' + escapeHtml(section.id) + '">' +
      (section.title ? '<h3>' + escapeHtml(section.title) + '</h3>' : "") +
      '<div class="doc-copy">' + renderSectionContent(section) + '</div>' +
      '</div>';
  }

  function renderNorthlinePhoto(photo, type, className, slotKey) {
    if (photo) {
      return '<figure class="' + className + ' northline-photo editable-photo-slot">' + renderEditablePhotoImage(photo, type, slotKey) + '</figure>';
    }
    return '<figure class="' + className + ' northline-photo photo-placeholder"><span>' + escapeHtml(type || "project") + '<br>photo</span></figure>';
  }

  function initialsFromName(value) {
    return String(value || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (part) { return part.charAt(0); })
      .join("")
      .toUpperCase() || "TM";
  }

  function northlinePageTitle(sections, group, sectionNumber) {
    if (sectionNumber === 1) {
      return "Project Summary";
    }
    var section = sections.find(function (item) { return item.title; });
    return section ? section.title.replace(/\s*\/\s*/g, " / ") : (group.photoType ? group.photoType.charAt(0).toUpperCase() + group.photoType.slice(1) : "Proposal");
  }

  function renderModernLandscapePages() {
    var pages = [renderSelectedCoverPage(renderModernCoverPage())];
    buildStructuredPageModels().forEach(function (page, index) {
      pages.push(renderSelectedCompensationPage(page, renderModernModelPage(page, index + 1)));
    });
    return pages.join("");
  }

  function renderModernCoverPage() {
    var photos = choosePagePhotos("context", "modern-cover", ["main"]);
    var p = proposal.project || {};
    return '<article class="proposal-page modern-page modern-cover" data-section="cover intro">' +
      '<div class="modern-inner">' +
      renderModernPhoto(photos[0], "context", "modern-cover-photo", photoSlotKey("modern-cover", "main", "context")) +
      '<div class="modern-cover-project">' + escapeHtml(p.projectName || "New Proposal") + '</div>' +
      '<div class="modern-cover-date">' + escapeHtml(formatDate(p.proposalDate)) + '</div>' +
      '<section class="modern-cover-copy">' +
      '<h1>' + coverTextHtml(p.coverTitle, "Proposal") + '</h1>' +
      '<p class="modern-kicker">' + coverTextHtml(p.coverSubtitle, "Architectural Design Services") + '</p>' +
      '<div class="modern-rule"></div>' +
      '</section>' +
      '<div class="modern-cover-submitted"><span>Submitted by</span><strong>MUNOZ + ALBIN</strong></div>' +
      '<div class="modern-cover-discipline"><span>Prepared for</span><strong>' + escapeHtml(p.clientCompany || "Client") + '</strong></div>' +
      '</div>' +
      '</article>';
  }

  function renderModernLandscapePage(group, pageNumber, marker) {
    var sections = group.sections.map(resolvePageSection).filter(Boolean);
    var sectionIds = sections.map(function (section) { return section.id; }).join(" ");
    var photoType = group.photoType || (sections[0] && sections[0].photoType) || "context";
    var pageKey = "modern-" + pageNumber;
    var photos = choosePagePhotos(photoType, pageKey, ["main"]);
    var title = modernPageTitle(sections, group, pageNumber);
    return '<article class="proposal-page modern-page" data-section="' + escapeHtml(sectionIds) + '">' +
      '<div class="modern-inner">' +
      '<aside class="modern-page-title ' + modernTitleSizeClass(title) + (marker ? " modern-title-has-marker" : " modern-title-no-marker") + '">' +
      (marker ? '<span class="modern-page-number">' + escapeHtml(marker) + '</span>' : "") +
      '<div class="modern-title-rule"></div>' +
      '<h2>' + escapeHtml(title) + '</h2>' +
      '<p>' + escapeHtml(modernPageDeck(sections, group)) + '</p>' +
      '</aside>' +
      '<section class="modern-content">' +
      sections.map(renderModernSectionBlock).join("") +
      '</section>' +
      '<aside class="modern-visuals">' +
      renderModernPhoto(photos[0], photoType, "modern-photo-main", photoSlotKey(pageKey, "main", photoType)) +
      '</aside>' +
      '<footer class="modern-footer"><span>235 W 25th Street, Houston, Texas 77008</span><span>713.532.1110 / munozalbin.com</span></footer>' +
      '</div>' +
      '</article>';
  }

  function modernSectionStartMarker(group, seenSections, markerNumber) {
    var startsNewSection = group.sections.some(function (entry) {
      return !seenSections[modernGroupEntryId(entry)];
    });
    return startsNewSection ? twoDigit(markerNumber + 1) : "";
  }

  function rememberModernGroupSections(group, seenSections) {
    group.sections.forEach(function (entry) {
      seenSections[modernGroupEntryId(entry)] = true;
    });
  }

  function modernGroupEntryId(entry) {
    return typeof entry === "string" ? entry : entry.id;
  }

  function renderModernSectionBlock(section) {
    return '<div class="modern-section-block proposal-section-' + escapeHtml(section.id) + '">' +
      (section.title ? '<h3>' + escapeHtml(section.title) + '</h3>' : "") +
      '<div class="doc-copy">' + renderSectionContent(section) + '</div>' +
      '</div>';
  }

  function renderModernPhoto(photo, type, className, slotKey) {
    if (photo) {
      return '<figure class="' + className + ' modern-photo editable-photo-slot">' + renderEditablePhotoImage(photo, type, slotKey) + '</figure>';
    }
    return '<figure class="' + className + ' modern-photo photo-placeholder"><span>' + escapeHtml(type || "project") + '<br>photo</span></figure>';
  }

  function modernPageTitle(sections, group, pageNumber) {
    if (pageNumber === 2) {
      return "Project Overview";
    }
    var section = sections.find(function (item) { return item.title; });
    if (section) {
      return section.title.replace(/\s*\/\s*/g, " / ");
    }
    return group.photoType ? group.photoType.charAt(0).toUpperCase() + group.photoType.slice(1) : "Proposal";
  }

  function modernTitleSizeClass(title) {
    var normalized = String(title || "").replace(/\s+/g, " ").trim();
    if (normalized.length >= 28) {
      return "modern-title-xlong";
    }
    if (normalized.length >= 20) {
      return "modern-title-long";
    }
    return "modern-title-standard";
  }

  function modernPageDeck(sections, group) {
    var names = sections.map(function (section) {
      var source = findSection(section.originalId || section.id.replace(/-.+$/, ""));
      return section.title || (source ? source.title : "");
    }).filter(Boolean);
    if (names.length > 1) {
      return names.join(" / ");
    }
    return group.photoType ? "Proposal content organized around " + group.photoType + "." : "Proposal content.";
  }

  function renderProposalPage(group, pageNumber) {
    var sections = group.sections.map(resolvePageSection).filter(Boolean);
    var sectionIds = sections.map(function (section) { return section.id; }).join(" ");
    var isIntro = sections.some(function (section) { return section.id === "intro"; });
    var photoType = group.photoType || (sections[0] && sections[0].photoType) || "context";
    var pageKey = "ma-" + pageNumber;
    var photos = choosePagePhotos(photoType, pageKey, ["top", "bottom"]);
    return '<article class="proposal-page' + (isIntro ? " is-intro-page" : "") + '" data-section="' + escapeHtml(sectionIds) + '">' +
      '<div class="page-inner">' +
      '<div class="body-page-number">' + escapeHtml(pageNumber) + '</div>' +
      '<aside class="photo-rail">' +
      renderPhotoSlot(photos[0], photoType, "top", photoSlotKey(pageKey, "top", photoType)) +
      renderPhotoSlot(photos[1], photoType, "bottom", photoSlotKey(pageKey, "bottom", photoType)) +
      '</aside>' +
      '<section class="page-content">' +
      (isIntro ? '<img class="proposal-logo" src="' + escapeHtml(logoAssetSrc()) + '" alt="Munoz Albin logo">' : '') +
      sections.map(renderSectionBlock).join("") +
      '</section>' +
      '<footer class="proposal-footer"><div>235 W 25th Street &#9642; Houston, Texas 77008</div><div>Tel: 713.532.1110 &#9642; www.munozalbin.com</div></footer>' +
      '</div>' +
      '</article>';
  }

  function findSection(id) {
    return sectionDefinitions.find(function (section) {
      return section.id === id;
    });
  }

  function resolvePageSection(entry) {
    if (typeof entry === "string") {
      return findSection(entry);
    }
    var section = findSection(entry.id);
    if (!section || !entry.part) {
      return section;
    }
    return {
      id: section.id + "-" + entry.part,
      originalId: section.id,
      title: entry.part === "scope" ? section.title : "",
      source: section.source,
      photoType: section.photoType,
      virtualText: sectionTextPart(section, entry.part)
    };
  }

  function sectionTextPart(section, part) {
    var lines = String(getSectionSourceText(section)).split(/\r?\n/);
    var deliverablesIndex = lines.findIndex(function (line) {
      return normalizeTitle(line) === "deliverables for this phase include";
    });
    if (deliverablesIndex < 0) {
      return lines.join("\n");
    }
    if (part === "scope") {
      return lines.slice(0, deliverablesIndex).join("\n");
    }
    if (section.id === "schematicDesign" && part === "deliverables") {
      return lines.slice(deliverablesIndex).join("\n");
    }
    if (section.id === "designDevelopment" && part === "scopeIntro") {
      return lines.slice(0, 4).join("\n");
    }
    if (section.id === "designDevelopment" && part === "scopeList") {
      return lines.slice(4, deliverablesIndex).join("\n");
    }
    if (section.id === "designDevelopment" && part === "deliverablesA") {
      return lines.slice(deliverablesIndex, deliverablesIndex + 12).join("\n");
    }
    if (section.id === "designDevelopment" && part === "deliverablesB") {
      return lines.slice(deliverablesIndex + 12).join("\n");
    }
    return lines.slice(deliverablesIndex).join("\n");
  }

  function renderSectionBlock(section) {
    return '<div class="proposal-section-block proposal-section-' + escapeHtml(section.id) + '">' +
      renderInlineSectionTitle(section) +
      '<div class="doc-copy">' + renderSectionContent(section) + '</div>' +
      '</div>';
  }

  function renderInlineSectionTitle(section) {
    if (!section.title) {
      return "";
    }
    var quietSections = {
      intro: true,
      basicOwnerRequirements: true,
      ownerProvidedInfo: true,
      maAssumptions: true,
      ourDesign: true,
      ending: true
    };
    if (quietSections[section.id]) {
      return "";
    }
    var firstLine = cleanLines(String(getSectionText(section) || "").split(/\r?\n/))[0] || "";
    var first = normalizeTitle(firstLine);
    var title = normalizeTitle(section.title);
    if (first.indexOf(title) >= 0 || title.indexOf(first) >= 0 || (section.id === "conceptDesign" && first.indexOf("conceptual design") >= 0)) {
      return "";
    }
    return '<h2 class="inline-section-title">' + escapeHtml(section.title) + '</h2>';
  }

  function renderPhotoSlot(photo, type, position, slotKey) {
    if (photo) {
      return '<figure class="photo-slot photo-slot-' + position + ' editable-photo-slot">' + renderEditablePhotoImage(photo, type, slotKey) + '</figure>';
    }
    return '<figure class="photo-slot photo-slot-' + position + ' photo-placeholder"><span>' + escapeHtml(type) + '<br>photo</span></figure>';
  }

  function renderSectionContent(section) {
    if (section.virtualText !== undefined) {
      return textToHtmlContinuous(section.virtualText);
    }
    if (section.id === "designSchedule") {
      return renderScheduleTable();
    }
    if (section.id === "consultants") {
      return renderConsultantsHtml();
    }
    if (section.id === "compensation") {
      return renderCompensationHtml();
    }
    if (section.id === "feeSchedule") {
      return renderFeeScheduleHtml();
    }
    if (section.id === "attachments") {
      return proposal.attachments.map(function (item) {
        return '<div class="attachment-placeholder"><strong>' + escapeHtml(item.title) + '</strong>' + (item.subtitle ? '<span class="attachment-placeholder-subtitle">' + escapeHtml(item.subtitle) + '</span>' : '') + (item.note ? '<br>' + escapeHtml(item.note) : '') + "</div>";
      }).join("");
    }
    return textToHtmlContinuous(getSectionText(section));
  }

  function getSectionText(section) {
    if (section.virtualText !== undefined) {
      return section.virtualText;
    }
    if (section.id === "generalConditionsPage") {
      return normalizeGeneralConditions(proposal.generalConditions).text;
    }
    if (Object.prototype.hasOwnProperty.call(proposal.sectionOverrides, section.id)) {
      return proposal.sectionOverrides[section.id];
    }
    if (section.generator) {
      return section.generator();
    }
    return generateContextualSectionText(section);
  }

  function getSectionSourceText(section) {
    if (Object.prototype.hasOwnProperty.call(proposal.sectionOverrides, section.id)) {
      return proposal.sectionOverrides[section.id];
    }
    if (section.generator) {
      return section.generator();
    }
    return generateContextualSectionText(section);
  }

  function generateContextualSectionText(section) {
    var c = projectContext();
    switch (section.id) {
      case "ourDesign":
        return [
          "PROCESS:",
          "",
          "Our Design Team",
          "",
          "One of the firm's principals is always in charge of our projects, ensuring that " + c.clientReference + " and the project team receive the level of attention required for " + c.projectReference + ".",
          "",
          "Our firm has a strong understanding of the design, budget, schedule, entitlement, and coordination concerns that shape " + c.projectTypePlural + ". Within these parameters, our experience allows us to bring thoughtful solutions not only to the overall character of the building, but also to the organization of the program, arrival sequence, amenity experience, unit planning, and long-term value of the development.",
          "",
          "For this project, M+A will serve as Design Architect for " + c.projectName + ". We will work with the Owner, the Architect of Record, and the consultant team to establish a clear design direction that responds to " + c.location + ", the stated program, and the project goals described in this proposal.",
          "",
          "As Design Architects for this project, we will coordinate closely with the AOR as well as with the other participating consultants. It is our understanding that a General Contractor may be selected for pre-design services, including detailed pricing information that will be made available to the Design Team at the milestones defined in the Project Schedule."
        ].join("\n");
      case "scopeBasicServices":
        return [
          "This proposal is made with Munoz + Albin Architecture & Planning Inc. (M+A) as the Design Architect for " + c.projectName + ". The proposed services are organized around " + c.scopeSummary + ". No AOR or other consultants are included in this proposal unless specifically noted. M+A and the other consultants will work under contract with the AOR or Owner as directed.",
          "",
          "Prior to starting the design process, in conjunction with M+A, the Owner will confirm the key project parameters including program, target unit mix, desired amenity strategy, parking approach, budget expectations, schedule priorities, and any preferences that may affect the architectural direction. M+A's scope includes design leadership for the overall architectural concept, planning approach, massing, exterior character, amenity planning coordination, typical unit layout strategy, and design coordination through the phases described below."
        ].join("\n");
      case "conceptDesign":
        return [
          "Conceptual Design",
          "",
          "In coordination with the AOR, our pre-design phase will focus on site planning, zoning and code analysis, program development, access and circulation concepts, preliminary consultant coordination, and alignment with project budget and cost expectations for " + c.projectName + ".",
          "",
          "M+A will study site test-fit options for " + c.programSummary + ". Corresponding massing options will be studied and evaluated against the Owner's goals, the project location, the desired design character, and the anticipated construction framework. At the end of the Conceptual Design scope, an overall scheme will be generated which will be the basis of design.",
          "",
          "Deliverables for this phase include:",
          "- Context plan",
          "- Ground level site plan",
          "- Typical building plan with program areas shown diagrammatically",
          "- Typical parking level plan, if applicable",
          "- Elevations of two main facades indicating preliminary material direction",
          "- Building sections",
          "- Massing diagrams / white box 3Ds",
          "- In-house renders",
          "- Area charts"
        ].join("\n");
      case "schematicDesign":
        return [
          "Schematic Design",
          "",
          "Based on the Owner's approval of the concept phase, M+A will produce documents to complete the Schematic Design scope for " + c.projectName + ". M+A will further develop massing, facade direction, planning organization, and design systems that will serve as the basis of design for the project.",
          "",
          "Schematic Design studies will consist of the drawings and documents listed below:",
          "",
          "In coordination with the AOR, this phase includes the following:",
          "- Site and area analysis to confirm design parameters.",
          "- Coordination with local planning, building code, life safety and zoning requirements.",
          "- Parking, loading and service requirements, as applicable to the program.",
          "- Building core, elevator and circulation analysis.",
          "- Exterior skin, design systems, and preliminary materials.",
          "- Coordination with civil engineer and other consultants.",
          "- Evaluation of structural and MEP building systems.",
          "- Presentations and meetings with consultants and client.",
          "- Meetings with the contractor to align design direction with construction budget.",
          "- Landscape and interior design coordination.",
          "- Program and plan development based on the approved concept direction.",
          "",
          "Deliverables for this phase include:",
          "- Architectural site plan",
          "- Programmatic and area analysis sheets",
          "- Code analysis sheets by AOR",
          "- Building plans including ground level, parking, amenity, and typical levels as applicable",
          "- Representative unit or program plans",
          "- Main exterior elevations with materials noted",
          "- Roof plans",
          "- Building sections",
          "- Illustrated 3D vignettes of key design areas",
          "- In-house renders"
        ].join("\n");
      case "designDevelopment":
        return [
          "Design Development",
          "",
          "Our design development phase is based on the approved schematic design documents and the updated preliminary budget provided by the General Contractor. This phase includes continued development of the architectural design for " + c.projectName + " and identification of structural, mechanical, electrical, envelope, and material systems for pricing and coordination purposes.",
          "",
          "In coordination with the AOR, this phase includes the following:",
          "- Site and area analysis to confirm design parameters.",
          "- Coordination with local planning, building code, life safety and zoning requirements.",
          "- Parking, loading and service requirements.",
          "- Building core, elevator and circulation analysis.",
          "- Exterior skin, design systems, and materials.",
          "- Coordination with consultants including civil, structural, MEP, landscape, interior design, and other specialty disciplines.",
          "- Presentations and OAC meetings as required.",
          "- Specialty consultant engagement including waterproofing, accessibility, facade cleaning and maintenance, hardware, elevator, low voltage, and others by AOR.",
          "- Continued program and plan development.",
          "- Plans, elevations, sections, and other drawings as necessary to illustrate the final design of the project.",
          "- Meetings and coordination with the contractor to confirm that the design direction remains aligned with the project budget as the design is developed.",
          "",
          "Deliverables for this phase include:",
          "- Architectural site plan",
          "- Programmatic and area analysis sheets",
          "- Code analysis sheets by AOR",
          "- Building plans including ground, parking, amenities, and typical floors as applicable",
          "- Coordination with structural drawings identifying the structural systems for the project",
          "- Coordination with MEP drawings identifying HVAC, electrical, and plumbing spatial requirements",
          "- Unit plans, program plans, and mix information as applicable",
          "- Typical kitchen, bathroom, or program-area planning studies as required by the project type",
          "- Exterior elevations with materials",
          "- Coordination of amenity plans by interior designer",
          "- Wind tunnel analysis may be required at this stage",
          "- Roof plans",
          "- Building sections",
          "- Schematic wall sections",
          "- Illustrated 3D vignettes with plans, sections, elevations, and 3D elements",
          "- Outline material and finish schedules",
          "- LEED and environmental coordination by AOR",
          "- Facade cleaning and maintenance coordination",
          "- In-house 3D renders",
          "- Coordination of up to six commercial renders"
        ].join("\n");
      case "constructionDocuments":
        return "Based on the Owner's approvals of the Design Development documents and updated preliminary pricing package by the General Contractor, M+A will assist the AOR with architectural design issues that need to be addressed during the Construction Documents phase for " + c.projectName + ". M+A will assist the AOR in setting forth the quality level of materials, systems, and other design requirements for the construction of the project. Permitting will be completed by the AOR.";
      case "biddingNegotiation":
        return "M+A understands that the Owner will negotiate the construction contract with a general contractor that can provide pre-construction services and pricing information during the various phases of project development. M+A will support design-related coordination and clarification as needed so that pricing and scope decisions remain aligned with the approved design intent for " + c.projectName + ".";
      case "constructionAdministration":
        return [
          "M+A shall review contractor submittals such as shop drawings relevant to building design, product data, and samples, and visit the construction site at intervals appropriate to the scope of work for the limited purpose of checking for conformance with information given and compliance with the design concept and aesthetic intent of " + c.projectName + ".",
          "",
          "This phase includes the following:",
          "- Additional supplementary or clarification drawings as necessary.",
          "- In-house review and approval of shop drawings for compliance with aesthetic intent.",
          "- Responses to RFIs from the field.",
          "- Submittal review and approval."
        ].join("\n");
      case "feeNotes":
        return [
          "1. Fees to be billed monthly according to project advancement.",
          "2. A retainer of $20,000.00 upon commission is to be amortized through schematic design unless otherwise agreed.",
          "3. Please note that no fees for consultants are included in this proposal unless specifically listed in the consultant section.",
          "4. Fees are valid for 90 days.",
          "5. Fees include construction administration site visits based on the service assumptions identified for " + c.projectName + ". If construction lasts longer, the program changes materially, or additional visits are required, additional fees will need to be negotiated.",
          "6. The above fees apply when M+A is commissioned to complete the design architect role for the scopes described in this proposal.",
          "7. If the program, scope, schedule, or level of service increases materially, fees may require adjustment.",
          "8. Depending on magnitude, additional changes during design development or later phases may require additional fees."
        ].join("\n");
      default:
        return section.text || "";
    }
  }

  function projectContext() {
    var p = proposal.project || {};
    var program = compactSentence(p.program, "the proposed development");
    var scope = compactSentence(p.scopeOfWork, "architectural design services");
    var ownerRequirements = [];
    var maAssumptions = [];
    var projectName = p.projectName || "the project";
    var location = p.projectLocation || p.siteDescription || "the project site";
    var site = p.siteDescription || location;
    var clientCompany = p.clientCompany || "the Owner";
    var projectType = inferProjectType(program + " " + projectName);
    return {
      projectName: projectName,
      location: location,
      site: site,
      clientCompany: clientCompany,
      clientReference: clientCompany === "the Owner" ? "the Owner" : clientCompany,
      projectReference: projectName === "the project" ? "this project" : projectName,
      projectType: projectType,
      projectTypePlural: pluralProjectType(projectType),
      programSummary: lowerFirst(program),
      scopeSummary: lowerFirst(scope),
      programNotes: splitProgramNotes(p.program),
      ownerRequirements: ownerRequirements,
      ownerRequirementSummary: summarizeList(ownerRequirements, "the Owner's stated project requirements"),
      maAssumptions: maAssumptions,
      maAssumptionSummary: summarizeList(maAssumptions, "the assumptions listed in the Project Information"),
      designIntent: inferDesignIntent(program, scope)
    };
  }

  function inferProjectType(text) {
    var value = String(text || "").toLowerCase();
    if (value.indexOf("multifamily") >= 0 || value.indexOf("residential") >= 0 || value.indexOf("apartment") >= 0) {
      return "residential development";
    }
    if (value.indexOf("hotel") >= 0 || value.indexOf("hospitality") >= 0) {
      return "hospitality project";
    }
    if (value.indexOf("office") >= 0) {
      return "commercial office project";
    }
    if (value.indexOf("retail") >= 0 || value.indexOf("mixed-use") >= 0 || value.indexOf("mixed use") >= 0) {
      return "mixed-use project";
    }
    return "architectural project";
  }

  function inferDesignIntent(program, scope) {
    var text = String(program || "") + " " + String(scope || "");
    var value = text.toLowerCase();
    if (value.indexOf("office") >= 0 || value.indexOf("retail") >= 0 || value.indexOf("mixed-use") >= 0 || value.indexOf("mixed use") >= 0) {
      return "a clear commercial identity, efficient tenant and visitor experience, active ground-level planning, and a coordinated design response to the project context";
    }
    if (value.indexOf("multifamily") >= 0 || value.indexOf("residential") >= 0 || value.indexOf("apartment") >= 0) {
      return "a timeless architectural character, efficient residential planning, a strong amenity experience, and a cohesive environment that supports the Owner's development goals";
    }
    if (value.indexOf("hotel") >= 0 || value.indexOf("hospitality") >= 0) {
      return "a memorable guest experience, clear arrival sequence, efficient back-of-house planning, and an architectural identity suited to the hospitality program";
    }
    return "a clear architectural identity, strong planning logic, and a coordinated design process";
  }

  function pluralProjectType(value) {
    if (value === "residential development") {
      return "residential developments";
    }
    if (value === "architectural project") {
      return "architectural projects";
    }
    return value + "s";
  }

  function compactSentence(value, fallback) {
    var text = cleanLines(String(value || "").split(/\r?\n/)).join(" ");
    return text.replace(/\s+/g, " ").trim() || fallback;
  }

  function summarizeList(items, fallback) {
    var cleaned = cleanLines(items).slice(0, 4);
    if (!cleaned.length) {
      return fallback;
    }
    if (cleaned.length === 1) {
      return cleaned[0];
    }
    if (cleaned.length === 2) {
      return cleaned[0] + " and " + lowerFirst(cleaned[1]);
    }
    return cleaned.slice(0, -1).join(", ") + ", and " + lowerFirst(cleaned[cleaned.length - 1]);
  }

  function splitProgramNotes(value) {
    var lines = cleanLines(String(value || "").split(/\r?\n/));
    var notes = [];
    lines.forEach(function (line) {
      String(line || "")
        .replace(/\.\s*$/g, "")
        .split(/\s*;\s*|\s*,\s*(?:and\s+)?/)
        .forEach(function (part) {
          var cleaned = part
            .replace(/^(?:and|with|including|include|includes)\s+/i, "")
            .replace(/\s+/g, " ")
            .trim();
          if (cleaned) {
            notes.push(cleaned);
          }
        });
    });
    return uniqueCleanLines(notes);
  }

  function uniqueCleanLines(items) {
    var seen = {};
    return cleanLines(items).filter(function (item) {
      var key = normalizeTitle(item);
      if (!key || seen[key]) {
        return false;
      }
      seen[key] = true;
      return true;
    });
  }

  function sentenceCase(value) {
    var text = String(value || "").trim();
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
  }

  function articleFor(value) {
    return /^[aeiou]/i.test(String(value || "")) ? "an" : "a";
  }

  function generateIntro() {
    var p = proposal.project;
    return [
      formatDate(p.proposalDate),
      "",
      cleanLines([p.clientContact, p.clientTitle, p.clientCompany, p.clientAddress]).join("\n"),
      "",
      "Proposal for Architectural Design services for " + (p.projectName || "the project") + ".",
      "",
      "Dear " + firstName(p.clientContact || "Client") + ",",
      "",
      "Thank you for the opportunity to present this proposal for the Architectural Design services for the project described below."
    ].join("\n");
  }

  function generateProjectDescription() {
    var p = proposal.project;
    return [
      "The project consists of the planning and design of " + lowerFirst(p.program || "a multifamily residential development") + " on " + (p.siteDescription || "the project site") + ".",
      "",
      "The development is envisioned as a landmark project that will positively contribute to the surrounding urban context.",
      "",
      "The overall design approach prioritizes " + (p.designIntent || "a timeless architectural character, a strong amenity-driven experience, and a cohesive environment that supports the Owner’s goals") + "."
    ].join("\n");
  }

  function generateBasicOwnerRequirements() {
    return "The basic Owner requirements include:\n" + bulletText(proposal.project.ownerRequirements);
  }

  function generateOwnerProvidedInfo() {
    return "The owner will provide the following information and parameters to be followed:\n" + bulletText(proposal.project.ownerProvidedInfo);
  }

  function generateAssumptions() {
    return "For this proposal, M+A has made the following assumptions:\n" + bulletText(proposal.project.maAssumptions);
  }

  function generateDesignSchedule() {
    return includedScheduleRows().map(function (row) {
      return row.label + ": " + row.value;
    }).concat([
      "",
      "MA and the AOR will work out a mutually agreeable schedule with the Owner if the above do not correspond with Owner’s expectations. Durations above do not include approval times by Owner.",
      "",
      "See ATTACHMENT D for Schedule"
    ]).join("\n");
  }

  function generateConsultants() {
    return consultantGroups().map(function (group) {
      return group.name + "\n" + group.items.map(function (item) { return "• " + item.name; }).join("\n");
    }).join("\n\n");
  }

  function generateCompensation() {
    return [
      "The fees for the Basic Architectural Design Services described above will be a lump sum of $" + proposal.compensation.amount + " (" + proposal.compensation.amountWords + ") billed monthly and calculated in the following manner:",
      "",
      "Conceptual Design $" + proposal.compensation.concept,
      "Schematic Design $" + proposal.compensation.schematic,
      "Design Development $" + proposal.compensation.designDevelopment,
      "Construction Documents $" + proposal.compensation.constructionDocuments,
      "Bid $" + proposal.compensation.bid,
      "Construction Administration $" + proposal.compensation.constructionObservation,
      "$" + proposal.compensation.amount,
      "",
      "See ATTACHMENT B for AOR proposed fees."
    ].join("\n");
  }

  function generateFeeSchedule() {
    return proposal.feeSchedule.name ? "Fee schedule uploaded: " + proposal.feeSchedule.name : "Drag and drop a fee schedule in the Project Info tab. This page will hold the uploaded schedule.";
  }

  function generateEnding() {
    var contact = proposal.project.clientContact || "we";
    return [
      firstName(contact) + ", we greatly appreciate this opportunity and are looking forward to working with you and your team on this project. Please do not hesitate to call me if you have any questions.",
      "",
      "Warmest regards,",
      "",
      "Jorge Munoz, AIA",
      "Principal",
      "Munoz+Albin, Architecture & Planning Inc."
    ].join("\n");
  }

  function generateAttachments() {
    return proposal.attachments.map(function (item) {
      return [item.title, item.subtitle, item.note].filter(Boolean).join("\n");
    }).join("\n\n");
  }

  function generateIntro() {
    var p = proposal.project;
    var c = projectContext();
    return [
      formatDate(p.proposalDate),
      "",
      cleanLines([p.clientContact, p.clientTitle, p.clientCompany, p.clientAddress]).join("\n"),
      "",
      "Proposal for Architectural Design services for " + c.projectName + ".",
      "",
      "Dear " + firstName(p.clientContact || "Client") + ",",
      "",
      "Thank you for the opportunity to present this proposal for Architectural Design services for the project described below. We understand that " + c.projectName + " requires a clear design vision, disciplined coordination, and a process that keeps the Owner's program, budget, and schedule visible as the work develops."
    ].join("\n");
  }

  function generateProjectDescription() {
    var c = projectContext();
    return [
      c.projectName + " is envisioned as " + articleFor(c.projectType) + " " + c.projectType + " located at " + c.location + ". The work described in this proposal is based on " + c.programSummary + ", with the design effort focused on translating the Owner's program, site conditions, and project goals into a clear architectural direction.",
      "",
      "Based on the information provided, the project priorities include " + lowerFirst(c.ownerRequirementSummary) + ". M+A will use these parameters to guide early planning studies, massing, circulation, exterior character, amenity or program organization, and coordination with the Architect of Record and consultant team as the design develops.",
      "",
      sentenceCase(c.scopeSummary) + " will be organized around a process that balances design quality, planning efficiency, constructability, consultant coordination, and the Owner's schedule and budget expectations. The overall design approach prioritizes " + c.designIntent + "."
    ].join("\n");
  }

  function generateBasicOwnerRequirements() {
    return "The basic Owner requirements include:\n" + bulletText(inferredOwnerRequirements().join("\n"));
  }

  function generateOwnerProvidedInfo() {
    var info = [
      "Final development program and target unit or program mix",
      "Target gross square footage and area priorities",
      "Target construction budget and cost expectations",
      "Schedule requirements and milestone dates",
      "Design standards, brand expectations, or owner preferences",
      "Available surveys, reports, and entitlement information"
    ].join("\n");
    return "The owner will provide the following information and parameters to be followed:\n" + bulletText(info);
  }

  function generateAssumptions() {
    return "For this proposal, M+A has made the following assumptions:\n" + bulletText(inferredAssumptions().join("\n"));
  }

  function inferredOwnerRequirements() {
    var c = projectContext();
    var requirements = [
      "Architectural design services for " + c.projectName,
      "Design response to " + c.location + " and the surrounding context",
      "Scope of work organized around " + c.scopeSummary,
      "Overall design approach prioritizing " + lowerFirst(c.designIntent),
      "Planning and design coordination aligned with the Owner's budget and schedule goals",
      "Consultant coordination appropriate to the approved scope of work"
    ];
    return uniqueCleanLines(requirements.concat(formattedRequirementItems(c)));
  }

  function inferredAssumptions() {
    return inferredAssumptionsFromProgram(proposal.project && proposal.project.program);
  }

  function inferredAssumptionsFromProgram(programText) {
    var p = proposal.project || {};
    var program = compactSentence(programText, "the proposed development");
    var projectName = p.projectName || "the project";
    var location = p.projectLocation || p.siteDescription || "the project site";
    var site = p.siteDescription || location;
    var projectType = inferProjectType(program + " " + projectName);
    var context = {
      site: site,
      scopeSummary: lowerFirst(compactSentence(p.scopeOfWork, "architectural design services")),
      designIntent: inferDesignIntent(program, compactSentence(p.scopeOfWork, "architectural design services")),
      programNotes: splitProgramNotes(program),
      programSummary: lowerFirst(program),
      projectType: projectType,
      projectTypePlural: pluralProjectType(projectType)
    };
    var assumptions = [
      "Project program is based on the information provided by the Owner",
      "Site information is based on " + context.site,
      "Owner will provide target budget, schedule, and approval milestones",
      "AOR and required consultants will provide code, technical, and permitting coordination unless otherwise noted",
      "Scope is based on " + context.scopeSummary,
      "Design direction will prioritize " + lowerFirst(context.designIntent),
      "Material program or schedule changes may require adjustment to fees and services"
    ];
    return uniqueCleanLines(assumptions.concat(formattedAssumptionItems(context)));
  }

  function formattedRequirementItems(context) {
    var notes = context.programNotes;
    var items = notes.map(function (note) {
      return formatProgramNote(note, "requirement");
    }).filter(Boolean);
    if (!items.length && context.programSummary) {
      items.push("Project program to be developed around " + context.programSummary);
    }
    return items;
  }

  function formattedAssumptionItems(context) {
    var notes = context.programNotes;
    return notes.map(function (note) {
      return formatProgramNote(note, "assumption");
    }).filter(Boolean);
  }

  function formatProgramNote(note, mode) {
    var text = normalizeProgramNote(note);
    var lower = text.toLowerCase();
    var number = text.match(/(?:approximately\s*)?[\d,.]+(?:\s*-\s*[\d,.]+)?/i);
    var amount = number ? number[0].replace(/^approximately\s*/i, "") : "";
    var prefix = mode === "assumption" ? "Assume " : "";

    if (/no\s+retail/.test(lower)) {
      return mode === "assumption" ? "Assume no retail component is included unless later directed by Owner" : "No retail component is included in the current program";
    }
    if (/unit/.test(lower) && /average|avg/.test(lower)) {
      return prefix + "average residential unit size of " + (amount || text);
    }
    if (/unit/.test(lower) && amount) {
      return prefix + "residential program of approximately " + amount + " units";
    }
    if (/one|two|three|bedroom|br\b/.test(lower)) {
      return prefix + "unit mix to be planned around " + lowerFirst(text);
    }
    if (/parking|cars?|garage/.test(lower) && /ratio/.test(lower)) {
      return prefix + "parking ratio to follow " + lowerFirst(text);
    }
    if (/parking|cars?|garage/.test(lower) && amount) {
      return prefix + "parking capacity to accommodate approximately " + amount + " cars";
    }
    if (/parking|garage/.test(lower)) {
      return prefix + "structured parking to be incorporated into the project planning";
    }
    if (/stor(?:y|ies)|floor|height/.test(lower) && amount) {
      return prefix + "building height of approximately " + amount + " stories";
    }
    if (/amenit/.test(lower) && amount) {
      return prefix + "amenity program of approximately " + amount + " square feet";
    }
    if (/amenit/.test(lower)) {
      return prefix + "interior and exterior amenity spaces to be included in the program";
    }
    if (/podium/.test(lower)) {
      return prefix + "podium configuration to be studied as part of the building concept";
    }
    if (/high-rise|high rise|tower/.test(lower)) {
      return prefix + "high-rise building configuration to be evaluated through massing and planning studies";
    }
    if (/office/.test(lower) && /retail/.test(lower)) {
      return prefix + "office and retail program areas to be coordinated within the planning concept";
    }
    if (/office/.test(lower)) {
      return prefix + "office program requirements to be incorporated into planning, core, and service studies";
    }
    if (/retail|restaurant|storefront/.test(lower)) {
      return prefix + "retail or storefront program requirements to be coordinated with ground-level planning";
    }
    if (/budget|cost/.test(lower)) {
      return prefix + "design decisions to remain aligned with the Owner's budget and cost expectations";
    }
    if (/schedule|milestone/.test(lower)) {
      return prefix + "design process to be coordinated with the Owner's schedule and milestone requirements";
    }
    if (/timeless|character|architectural|design/.test(lower)) {
      return prefix + "architectural character to reflect " + lowerFirst(text);
    }
    if (!text || text.length < 4) {
      return "";
    }
    return mode === "assumption" ? "Assume " + lowerFirst(text) : "Program requirement for " + lowerFirst(text);
  }

  function normalizeProgramNote(value) {
    return String(value || "")
      .replace(/^[\s\-*•]+/, "")
      .replace(/\bSF\b/gi, "square feet")
      .replace(/\bsq\.?\s*ft\.?\b/gi, "square feet")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isParagraphHeadingLine(value) {
    var text = String(value || "").trim();
    if (!text || isBulletLine(text) || text.length > 72) {
      return false;
    }
    if (/:$/.test(text)) {
      return true;
    }
    if (/^\d+\.\s+[A-Z][^.]{0,60}$/.test(text)) {
      return true;
    }
    return /^(?:scope of work|basic services|deliverables|m\+a assumptions|bidding and negotiation|construction administration|our design team|project description)$/i.test(text);
  }

  function isSalutationLine(value) {
    return /^Dear\b.*?,\s*$/i.test(String(value || "").trim());
  }

  function bulletText(value) {
    return cleanLines(String(value || "").split(/\r?\n/)).map(function (line) {
      return "- " + line.replace(/^(?:[•*-]|â€¢|Ã¢â‚¬Â¢)\s+/, "");
    }).join("\n");
  }

  function renderScheduleTable() {
    var rows = [
      ["Conceptual Design", proposal.schedule.concept],
      ["Schematic Design", proposal.schedule.schematic],
      ["Design Development", proposal.schedule.designDevelopment],
      ["Construction Documents", proposal.schedule.constructionDocuments],
      ["Bidding", proposal.schedule.bidding],
      ["Permit and IFC", proposal.schedule.permitIfc],
      ["Construction Administration", proposal.schedule.constructionAdministration]
    ];
    return '<table class="schedule-table"><thead><tr><th>Phase</th><th>Duration</th></tr></thead><tbody>' + rows.map(function (row) {
      return "<tr><td>" + escapeHtml(row[0]) + "</td><td>" + escapeHtml(row[1]) + "</td></tr>";
    }).join("") + "</tbody></table><p>MA and the AOR will work out a mutually agreeable schedule with the Owner if the above do not correspond with Owner’s expectations. Durations above do not include approval times by Owner.</p><p>See ATTACHMENT D for Schedule</p>";
  }

  function renderConsultantsHtml() {
    return consultantGroups().map(function (group) {
      return "<p><strong>" + escapeHtml(group.name) + "</strong></p><ul>" + group.items.map(function (item) {
        return "<li>" + escapeHtml(item.name) + "</li>";
      }).join("") + "</ul>";
    }).join("");
  }

  function renderCompensationHtml() {
    return '<p>The fees for the Basic Architectural Design Services described above will be a lump sum of $' + escapeHtml(proposal.compensation.amount) + ' (' + escapeHtml(proposal.compensation.amountWords) + ') billed monthly and calculated in the following manner:</p>' +
      '<table class="fee-table"><tbody>' +
      feeRow("Conceptual Design", proposal.compensation.concept) +
      feeRow("Schematic Design", proposal.compensation.schematic) +
      feeRow("Design Development", proposal.compensation.designDevelopment) +
      feeRow("Construction Documents", proposal.compensation.constructionDocuments) +
      feeRow("Bid", proposal.compensation.bid) +
      feeRow("Construction Administration", proposal.compensation.constructionObservation) +
      feeRow("Total", proposal.compensation.amount) +
      '</tbody></table><p>See ATTACHMENT B for AOR proposed fees.</p>';
  }

  function feeRow(label, amount) {
    return "<tr><td>" + escapeHtml(label) + "</td><td>$" + escapeHtml(amount) + "</td></tr>";
  }

  function renderFeeScheduleHtml() {
    if (!proposal.feeSchedule.name) {
      return '<div class="attachment-placeholder">Drag and drop a fee schedule in the Project Info tab.</div>';
    }
    if (/^data:image\//.test(proposal.feeSchedule.dataUrl)) {
      return '<p><strong>' + escapeHtml(proposal.feeSchedule.name) + '</strong></p><img class="page-photo" style="min-height:0;max-height:6.4in;object-fit:contain;background:white;" src="' + proposal.feeSchedule.dataUrl + '" alt="Fee schedule">';
    }
    return '<div class="attachment-placeholder"><strong>' + escapeHtml(proposal.feeSchedule.name) + '</strong><br>PDF fee schedule attached to draft. Use the exported data if the PDF itself needs to be carried forward.</div>';
  }

  function consultantGroups() {
    var groups = ["Primary", "Secondary", "Owner coordinated"];
    return groups.map(function (name) {
      return {
        name: name === "Primary" ? "Additional primary consultants that will be needed for the project’s design are:" : name === "Secondary" ? "Other additional secondary consultants that will be needed are:" : "The following consultants will be Owner coordinated:",
        items: proposal.consultants.filter(function (item) {
          return item.group === name && item.included;
        })
      };
    }).filter(function (group) {
      return group.items.length;
    });
  }

  function textToHtml(value) {
    var lines = String(value || "").split(/\r?\n/);
    var html = [];
    var list = [];
    function flushList() {
      if (list.length) {
        html.push("<ul>" + list.map(function (item) { return "<li>" + escapeProposalCopy(item) + "</li>"; }).join("") + "</ul>");
        list = [];
      }
    }
    lines.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        flushList();
        return;
      }
      if (/^[•*-]\s+/.test(trimmed)) {
        list.push(trimmed.replace(/^[•*-]\s+/, ""));
        return;
      }
      flushList();
      html.push("<p>" + escapeProposalCopy(trimmed) + "</p>");
    });
    flushList();
    return html.join("");
  }

  function textToHtmlContinuous(value, options) {
    if (options && options.joinMidSentenceParagraphs) {
      value = joinMidSentenceParagraphBreaks(value);
    }
    var lines = String(value || "").split(/\r?\n/);
    var plainHeadingPattern = options && options.plainHeadingPattern;
    var html = [];
    var list = [];
    var paragraph = [];

    function flushParagraph() {
      if (paragraph.length) {
        var lineSeparator = options && options.joinSoftLineBreaks ? " " : "<br>";
        html.push("<p>" + paragraph.map(escapeProposalCopy).join(lineSeparator) + "</p>");
        paragraph = [];
      }
    }

    function flushList() {
      if (list.length) {
        html.push("<ul>" + list.map(function (item) {
          return "<li>" + escapeProposalCopy(item) + "</li>";
        }).join("") + "</ul>");
        list = [];
      }
    }

    lines.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        flushList();
        return;
      }
      if (isBulletLine(trimmed)) {
        flushParagraph();
        list.push(trimmed.replace(/^(?:[•*-]|â€¢)\s+/, ""));
        return;
      }
      if (isSalutationLine(trimmed)) {
        flushParagraph();
        flushList();
        html.push("<p>" + escapeProposalCopy(trimmed) + "</p>");
        return;
      }
      if (!paragraph.length && isParagraphHeadingLine(trimmed)) {
        flushList();
        var headingClass = plainHeadingPattern && plainHeadingPattern.test(trimmed) ? "" : ' class="paragraph-heading"';
        html.push("<p" + headingClass + ">" + escapeProposalCopy(trimmed.replace(/:\s*$/, "")) + "</p>");
        return;
      }
      flushList();
      paragraph.push(trimmed);
    });

    flushParagraph();
    flushList();
    return html.join("");
  }

  function escapeProposalCopy(value) {
    return escapeHtml(value);
  }

  function isBulletLine(value) {
    return /^(?:[•*-]|â€¢)\s+/.test(value);
  }

  function bulletText(value) {
    return cleanLines(String(value || "").split(/\r?\n/)).map(function (line) {
      return "• " + line.replace(/^[•*-]\s+/, "");
    }).join("\n");
  }

  function isBulletLine(value) {
    return /^(?:[•*-]|â€¢|Ã¢â‚¬Â¢)\s+/.test(value);
  }

  function bulletText(value) {
    return cleanLines(String(value || "").split(/\r?\n/)).map(function (line) {
      return "- " + line.replace(/^(?:[•*-]|â€¢|Ã¢â‚¬Â¢)\s+/, "");
    }).join("\n");
  }

  function normalizeTypology(value) {
    return String(value || "").trim().toLowerCase();
  }

  function parsePhotoTypologies(value) {
    return cleanLines(String(value || "").split(/[,\n]/)).map(normalizeTypology).filter(Boolean);
  }

  function hasPhotoTypology(value) {
    return !!normalizeTypology(value);
  }

  function isKnownPhotoTypology(value) {
    var key = normalizeTypology(value);
    return availablePhotoTypologies().some(function (typology) {
      return normalizeTypology(typology) === key;
    });
  }

  function availablePhotoTypologies() {
    var merged = [];
    var seen = {};

    function addTypologies(list) {
      (Array.isArray(list) ? list : []).forEach(function (typology) {
        var label = String(typology || "").trim();
        var key = normalizeTypology(label);
        if (!key || seen[key]) {
          return;
        }
        seen[key] = true;
        merged.push(label);
      });
    }

    addTypologies(defaultPhotoTypologies);
    addTypologies(parsePhotoTypologies(proposal.project && proposal.project.photoTypologies));
    addTypologies((proposal.photos || []).map(function (photo) { return photo && photo.typology; }));
    addTypologies((proposal.photos || []).map(function (photo) { return photo && photo.sourceTypology; }));
    return merged;
  }

  function formatTypologyLabel(value) {
    var key = normalizeTypology(value);
    var match = availablePhotoTypologies().find(function (typology) {
      return normalizeTypology(typology) === key;
    });
    return match || key.replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
  }

  function photoSlotKey(pageKey, position, type) {
    return currentThemeId() + "|" + pageKey + "|" + position + "|" + normalizeTypology(type);
  }

  function choosePagePhotos(type, pageKey, positions) {
    var used = [];
    return positions.map(function (position) {
      var photo = choosePhotoForSlot(type, photoSlotKey(pageKey, position, type), used);
      if (photo) {
        used.push(photo.id);
      }
      return photo;
    });
  }

  function choosePhotoForSlot(type, slotKey, usedPhotoIds) {
    var selection = proposal.photoSelections[slotKey];
    var selected = selection && (proposal.photos || []).find(function (photo) {
      return photo.id === selection.photoId;
    });
    if (selected && isPhotoAvailableForManualPlacement(selected)) {
      return selected;
    }
    if (selected && selected.included && photoMatchesSelectedTypologies(selected) && !selected.dataUrl) {
      return null;
    }
    if (selection && selection.photoId) {
      delete proposal.photoSelections[slotKey];
      if (proposal.photoSelectionHistory) {
        delete proposal.photoSelectionHistory[slotKey];
      }
      photoSelectionsChanged = true;
    }
    var pool = photoPoolForType(type);
    if (!pool.length) {
      return null;
    }
    var available = pool.filter(function (photo) {
      return (usedPhotoIds || []).indexOf(photo.id) < 0;
    });
    if (!available.length) {
      available = pool;
    }
    var photo = available[Math.floor(Math.random() * available.length)];
    proposal.photoSelections[slotKey] = { photoId: photo.id, x: 50, y: 50 };
    photoSelectionsChanged = true;
    return photo;
  }

  function photoMatchesSelectedTypologies(photo) {
    var wanted = parsePhotoTypologies(proposal.project.photoTypologies);
    return !wanted.length || wanted.indexOf(normalizeTypology(photo && photo.typology)) >= 0;
  }

  function isPhotoEligibleForProposal(photo) {
    return !!(photo && photo.included && photo.dataUrl && photoMatchesSelectedTypologies(photo));
  }

  function photoPoolForType(type) {
    var photos = selectablePhotoOptions();
    var typed = photos.filter(function (photo) {
      return normalizeTypology(photo.typology) === normalizeTypology(type);
    });
    var pool = typed.length ? typed : photos;
    return pool;
  }

  function photoSelectionForSlot(slotKey) {
    var selection = proposal.photoSelections[slotKey] || {};
    return {
      photoId: selection.photoId || "",
      x: Number.isFinite(Number(selection.x)) ? Number(selection.x) : 50,
      y: Number.isFinite(Number(selection.y)) ? Number(selection.y) : 50,
      scale: normalizePhotoScale(selection.scale)
    };
  }

  function renderEditablePhotoImage(photo, type, slotKey) {
    var selection = photoSelectionForSlot(slotKey);
    var historyState = photoHistoryState(slotKey);
    var position = clampPercent(selection.x) + "% " + clampPercent(selection.y) + "%";
    var panActive = activePhotoPanKey === slotKey;
    return '<img class="page-photo" draggable="false" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '" style="object-position:' + escapeHtml(position) + ';transform:scale(' + selection.scale + ');transform-origin:' + escapeHtml(position) + ';" src="' + photo.dataUrl + '" alt="' + escapeHtml(photo.name) + '">' +
      '<div class="photo-slot-tools" aria-label="Photo controls">' +
      '<label class="photo-choice-control"><span>Image</span><select data-photo-choice="image" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '">' + renderPhotoChoiceOptions(selection.photoId || photo.id) + '</select></label>' +
      '<label class="photo-scale-control"><span>Scale</span><input type="range" min="100" max="300" step="5" title="100% fills the image box; increase to zoom in" value="' + Math.round(selection.scale * 100) + '" aria-label="Image scale" data-photo-scale data-photo-key="' + escapeHtml(slotKey) + '"><output>' + Math.round(selection.scale * 100) + '%</output></label>' +
      '<button type="button" class="photo-hand-tool' + (panActive ? " active" : "") + '" title="Move the image inside its frame" aria-pressed="' + (panActive ? "true" : "false") + '" data-photo-action="hand" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '">&#9995; Hand</button>' +
      '<button type="button" title="Go back to previous image" data-photo-action="back" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '"' + (historyState.back.length ? "" : " disabled") + '>Back</button>' +
      '<button type="button" title="Go forward to next image" data-photo-action="forward" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '"' + (historyState.forward.length ? "" : " disabled") + '>Forward</button>' +
      '<button type="button" title="Swap image" data-photo-action="swap" data-photo-key="' + escapeHtml(slotKey) + '" data-photo-type="' + escapeHtml(type || "") + '">Swap</button>' +
      '</div>';
  }

  function normalizePhotoScale(value) {
    var scale = Number(value);
    return Number.isFinite(scale) && scale > 0 ? Math.max(1, Math.min(3, Math.round(scale * 100) / 100)) : PHOTO_PAN_SCALE;
  }

  function setPreviewPhotoScale(control, commit) {
    var slot = control.closest(".editable-photo-slot");
    var image = slot && slot.querySelector("img.page-photo");
    if (!image) return;
    var scale = normalizePhotoScale(Number(control.value) / 100);
    control.value = Math.round(scale * 100);
    image.style.transform = "scale(" + scale + ")";
    var output = control.parentElement.querySelector("output");
    if (output) output.textContent = Math.round(scale * 100) + "%";
    if (commit) {
      var selection = photoSelectionForSlot(control.dataset.photoKey);
      selection.scale = scale;
      if (updatePreviewPhotoSelection(control.dataset.photoKey, selection, true)) {
        markDirty();
        saveCurrentDraft();
        var back = slot.querySelector('[data-photo-action="back"]');
        var forward = slot.querySelector('[data-photo-action="forward"]');
        if (back) back.disabled = false;
        if (forward) forward.disabled = true;
      }
    }
  }

  function normalizePhotoFrameHeight(value, fallback) {
    var height = Number(value);
    return Number.isFinite(height) && height > 0 ? Math.max(0.75, Math.min(6.5, Math.round(height * 100) / 100)) : (fallback || 3.12);
  }

  function normalizePhotoFrameHeights(value) {
    var normalized = {};
    if (value && typeof value === "object") {
      Object.keys(value).forEach(function (key) {
        if (Number.isFinite(Number(value[key])) && Number(value[key]) > 0) normalized[key] = normalizePhotoFrameHeight(value[key]);
      });
    }
    return normalized;
  }

  function landscapePhotoPageStyle(pageKey, photoType, fallback) {
    var key = photoSlotKey(pageKey, "main", photoType);
    var heights = proposal.photoFrameHeights || {};
    return ' style="--photo-frame-height:' + normalizePhotoFrameHeight(heights[key], fallback) + 'in;"';
  }

  function renderPhotoFrameResizeHandle(slotKey, defaultHeight) {
    var heights = proposal.photoFrameHeights || {};
    var height = normalizePhotoFrameHeight(heights[slotKey], defaultHeight);
    return '<div class="photo-frame-resize-handle" role="separator" tabindex="0" aria-label="Resize image box; drag up or down, or use arrow keys" aria-orientation="horizontal" aria-valuemin="0.75" aria-valuemax="6.5" aria-valuenow="' + height + '" aria-valuetext="' + height + ' inches" data-photo-frame-key="' + escapeHtml(slotKey) + '"><span>Drag to resize image box</span></div>';
  }

  function applyPreviewPhotoFrameHeight(handle, height) {
    var page = handle.closest(".proposal-page");
    page.style.setProperty("--photo-frame-height", height + "in");
    handle.setAttribute("aria-valuenow", height);
    handle.setAttribute("aria-valuetext", height + " inches");
  }

  function savePreviewPhotoFrameHeight(handle, height) {
    proposal.photoFrameHeights = normalizePhotoFrameHeights(proposal.photoFrameHeights);
    proposal.photoFrameHeights[handle.dataset.photoFrameKey] = height;
    markDirty();
    saveCurrentDraft();
    if (Object.keys(proposal.textFrameBottoms || {}).length) renderPreview();
  }

  function beginPreviewPhotoFrameResize(event) {
    var handle = event.target.closest(".photo-frame-resize-handle");
    if (!handle || (event.button !== undefined && event.button !== 0)) return;
    var page = handle.closest(".proposal-page");
    var pageRect = page.getBoundingClientRect();
    photoFrameResizeSession = {
      handle: handle, pointerId: event.pointerId, startY: event.clientY,
      startHeight: Number(handle.getAttribute("aria-valuenow")),
      currentHeight: Number(handle.getAttribute("aria-valuenow")),
      pixelsPerInch: pageRect.height / (page.offsetHeight / 96)
    };
    handle.setPointerCapture(event.pointerId);
    page.classList.add("is-photo-frame-resizing");
    event.preventDefault();
    event.stopPropagation();
  }

  function movePreviewPhotoFrameResize(event) {
    var session = photoFrameResizeSession;
    if (!session || event.pointerId !== session.pointerId) return;
    session.currentHeight = normalizePhotoFrameHeight(session.startHeight - (event.clientY - session.startY) / session.pixelsPerInch);
    applyPreviewPhotoFrameHeight(session.handle, session.currentHeight);
    event.preventDefault();
  }

  function finishPreviewPhotoFrameResize(event, cancel) {
    var session = photoFrameResizeSession;
    if (!session || (event.pointerId !== undefined && event.pointerId !== session.pointerId)) return;
    photoFrameResizeSession = null;
    session.handle.closest(".proposal-page").classList.remove("is-photo-frame-resizing");
    if (session.handle.hasPointerCapture(session.pointerId)) session.handle.releasePointerCapture(session.pointerId);
    if (cancel) {
      applyPreviewPhotoFrameHeight(session.handle, session.startHeight);
    } else if (session.currentHeight !== session.startHeight) {
      savePreviewPhotoFrameHeight(session.handle, session.currentHeight);
    }
  }

  function endPreviewPhotoFrameResize(event) {
    finishPreviewPhotoFrameResize(event, false);
  }

  function cancelPreviewPhotoFrameResize(event) {
    finishPreviewPhotoFrameResize(event, true);
  }

  function keyPreviewPhotoFrameResize(event) {
    var handle = event.target.closest(".photo-frame-resize-handle");
    if (!handle || !/^(ArrowUp|ArrowDown|Home)$/.test(event.key)) return;
    var height = event.key === "Home" ? Number(handle.closest("figure").dataset.defaultFrameHeight) :
      Number(handle.getAttribute("aria-valuenow")) + (event.key === "ArrowUp" ? 1 : -1) * (event.shiftKey ? 0.5 : 0.1);
    height = normalizePhotoFrameHeight(height);
    applyPreviewPhotoFrameHeight(handle, height);
    savePreviewPhotoFrameHeight(handle, height);
    event.preventDefault();
  }

  function renderPhotoChoiceOptions(selectedPhotoId) {
    return manuallyPlaceablePhotoOptions().map(function (item) {
      return '<option value="' + escapeHtml(item.id) + '"' + (item.id === selectedPhotoId ? " selected" : "") + '>' + escapeHtml(item.name || formatTypologyLabel(item.typology) || "Uploaded image") + '</option>';
    }).join("");
  }

  function isPhotoAvailableForManualPlacement(photo) {
    return !!(photo && photo.id && isPhotoEligibleForProposal(photo));
  }

  function manuallyPlaceablePhotoOptions() {
    return (proposal.photos || []).filter(isPhotoAvailableForManualPlacement);
  }

  function selectablePhotoOptions() {
    return (proposal.photos || []).filter(function (photo) {
      return photo && photo.id && isPhotoEligibleForProposal(photo);
    });
  }

  function choosePreviewPhoto(slotKey, type, photoId) {
    if (!slotKey || !photoId) {
      return;
    }
    var photo = manuallyPlaceablePhotoOptions().find(function (item) {
      return item.id === photoId;
    });
    if (!photo) {
      return;
    }
    if (!updatePreviewPhotoSelection(slotKey, { photoId: photo.id, x: 50, y: 50 }, true)) {
      return;
    }
    markDirty();
    saveCurrentDraft();
    renderPreview();
  }

  function photoSlotControl(slot) {
    return slot ? slot.querySelector("[data-photo-key]") : null;
  }

  function beginPhotoLibraryDrag(event) {
    var image = event.target.closest("img[data-photo-library-id]");
    if (!image || !image.dataset.photoLibraryId || (event.button !== undefined && event.button !== 0)) {
      return;
    }
    photoLibraryDragSession = {
      pointerId: event.pointerId,
      photoId: image.dataset.photoLibraryId,
      source: image,
      startX: event.clientX,
      startY: event.clientY,
      targetSlot: null,
      ghost: null,
      started: false
    };
    image.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  function movePhotoLibraryDrag(event) {
    var session = photoLibraryDragSession;
    if (!session || event.pointerId !== session.pointerId) {
      return;
    }
    if (!session.started) {
      var distance = Math.hypot(event.clientX - session.startX, event.clientY - session.startY);
      if (distance < 5) {
        return;
      }
      session.started = true;
      session.source.classList.add("is-dragging");
      els.preview.classList.add("is-photo-drop-ready");
      document.body.classList.add("is-photo-library-dragging");
      session.ghost = document.createElement("img");
      session.ghost.className = "photo-library-drag-ghost";
      session.ghost.src = session.source.currentSrc || session.source.src;
      session.ghost.alt = "";
      document.body.appendChild(session.ghost);
    }
    session.ghost.style.left = event.clientX + "px";
    session.ghost.style.top = event.clientY + "px";
    var elementAtPoint = document.elementFromPoint(event.clientX, event.clientY);
    var slot = elementAtPoint && elementAtPoint.closest(".editable-photo-slot");
    if (!slot || !els.preview.contains(slot) || !photoSlotControl(slot)) {
      slot = null;
    }
    session.targetSlot = slot;
    clearPreviewPhotoDropTargets(slot);
    if (slot) {
      slot.classList.add("is-photo-drop-target");
    }
    event.preventDefault();
  }

  function endPhotoLibraryDrag(event) {
    var session = photoLibraryDragSession;
    if (!session || event.pointerId !== session.pointerId) {
      return;
    }
    var targetControl = session.targetSlot && photoSlotControl(session.targetSlot);
    var photoId = session.photoId;
    var completed = session.started && targetControl;
    cleanupPhotoLibraryDrag(session);
    if (completed) {
      choosePreviewPhoto(targetControl.dataset.photoKey, targetControl.dataset.photoType, photoId);
      flashStatus("Photo replaced. Choose Hand to reposition it.");
    }
    event.preventDefault();
  }

  function cancelPhotoLibraryDrag(event) {
    var session = photoLibraryDragSession;
    if (session && event.pointerId === session.pointerId) {
      cleanupPhotoLibraryDrag(session);
    }
  }

  function cleanupPhotoLibraryDrag(session) {
    photoLibraryDragSession = null;
    session.source.classList.remove("is-dragging");
    if (session.source.hasPointerCapture && session.source.hasPointerCapture(session.pointerId)) {
      session.source.releasePointerCapture(session.pointerId);
    }
    if (session.ghost && session.ghost.parentNode) {
      session.ghost.parentNode.removeChild(session.ghost);
    }
    document.body.classList.remove("is-photo-library-dragging");
    clearPreviewPhotoDropState();
  }

  function hasProposalPhotoDrag(dataTransfer) {
    return !!(dataTransfer && Array.from(dataTransfer.types || []).indexOf("application/x-proposal-photo") >= 0);
  }

  function proposalPhotoIdFromTransfer(dataTransfer) {
    if (!dataTransfer) {
      return "";
    }
    var photoId = dataTransfer.getData("application/x-proposal-photo");
    if (!photoId) {
      var plainText = dataTransfer.getData("text/plain");
      if (plainText.indexOf("proposal-photo:") === 0) {
        photoId = plainText.slice("proposal-photo:".length);
      }
    }
    return String(photoId || "");
  }

  function clearPreviewPhotoDropTargets(exceptSlot) {
    els.preview.querySelectorAll(".is-photo-drop-target").forEach(function (slot) {
      if (slot !== exceptSlot) {
        slot.classList.remove("is-photo-drop-target");
      }
    });
  }

  function clearPreviewPhotoDropState() {
    if (!els.preview) {
      return;
    }
    els.preview.classList.remove("is-photo-drop-ready");
    clearPreviewPhotoDropTargets();
  }

  function togglePreviewPhotoPan(slotKey, slot) {
    if (!slotKey || !slot) {
      return;
    }
    var shouldActivate = activePhotoPanKey !== slotKey;
    activePhotoPanKey = shouldActivate ? slotKey : "";
    photoPanSession = null;
    syncPreviewPhotoPanState();
    flashStatus(shouldActivate ? "Hand tool active. Drag the photo inside its frame." : "Hand tool off.");
  }

  function syncPreviewPhotoPanState() {
    els.preview.querySelectorAll(".editable-photo-slot").forEach(function (photoSlot) {
      var control = photoSlotControl(photoSlot);
      var isActive = !!(control && control.dataset.photoKey === activePhotoPanKey);
      photoSlot.classList.toggle("is-photo-pan-active", isActive);
      var handButton = photoSlot.querySelector('[data-photo-action="hand"]');
      if (handButton) {
        handButton.classList.toggle("active", isActive);
        handButton.setAttribute("aria-pressed", isActive ? "true" : "false");
      }
    });
  }

  function beginPreviewPhotoPan(event) {
    var image = event.target.closest("img.page-photo[data-photo-key]");
    if (!image || !activePhotoPanKey || image.dataset.photoKey !== activePhotoPanKey) {
      return;
    }
    var slot = image.closest(".editable-photo-slot");
    if (!slot) {
      return;
    }
    var frame = slot.getBoundingClientRect();
    var naturalWidth = image.naturalWidth || frame.width;
    var naturalHeight = image.naturalHeight || frame.height;
    var coverScale = Math.max(frame.width / naturalWidth, frame.height / naturalHeight);
    var selection = photoSelectionForSlot(activePhotoPanKey);
    photoPanSession = {
      pointerId: event.pointerId,
      image: image,
      slot: slot,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startSelection: selection,
      currentX: selection.x,
      currentY: selection.y,
      overflowX: naturalWidth * coverScale * selection.scale - frame.width,
      overflowY: naturalHeight * coverScale * selection.scale - frame.height
    };
    image.setPointerCapture(event.pointerId);
    slot.classList.add("is-photo-panning");
    event.preventDefault();
  }

  function movePreviewPhotoPan(event) {
    var session = photoPanSession;
    if (!session || event.pointerId !== session.pointerId) {
      return;
    }
    var deltaX = event.clientX - session.startClientX;
    var deltaY = event.clientY - session.startClientY;
    session.currentX = Math.abs(session.overflowX) > 0.5
      ? clampPercent(session.startSelection.x - (deltaX / session.overflowX * 100))
      : session.startSelection.x;
    session.currentY = Math.abs(session.overflowY) > 0.5
      ? clampPercent(session.startSelection.y - (deltaY / session.overflowY * 100))
      : session.startSelection.y;
    session.image.style.objectPosition = session.currentX + "% " + session.currentY + "%";
    session.image.style.transformOrigin = session.currentX + "% " + session.currentY + "%";
    event.preventDefault();
  }

  function endPreviewPhotoPan(event) {
    var session = photoPanSession;
    if (!session || (event.pointerId !== undefined && event.pointerId !== session.pointerId)) {
      return;
    }
    photoPanSession = null;
    session.slot.classList.remove("is-photo-panning");
    if (session.image.hasPointerCapture && session.image.hasPointerCapture(session.pointerId)) {
      session.image.releasePointerCapture(session.pointerId);
    }
    var changed = updatePreviewPhotoSelection(session.image.dataset.photoKey, {
      photoId: session.startSelection.photoId,
      x: session.currentX,
      y: session.currentY,
      scale: session.startSelection.scale
    }, true);
    if (changed) {
      markDirty();
      saveCurrentDraft();
      var backButton = session.slot.querySelector('[data-photo-action="back"]');
      if (backButton) {
        backButton.disabled = false;
      }
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  function adjustPreviewPhoto(slotKey, type, action) {
    if (!slotKey || !action) {
      return;
    }
    var selection = photoSelectionForSlot(slotKey);
    var changed = false;
    if (action === "back") {
      changed = stepPreviewPhotoHistory(slotKey, "back");
      if (!changed) {
        return;
      }
    } else if (action === "forward") {
      changed = stepPreviewPhotoHistory(slotKey, "forward");
      if (!changed) {
        return;
      }
    } else if (action === "swap") {
      var pool = photoPoolForType(type);
      var choices = pool.filter(function (photo) {
        return photo.id !== selection.photoId;
      });
      if (!choices.length) {
        choices = pool;
      }
      if (choices.length) {
        var photo = choices[Math.floor(Math.random() * choices.length)];
        changed = updatePreviewPhotoSelection(slotKey, { photoId: photo.id, x: 50, y: 50 }, true);
      }
    }
    if (!changed) {
      return;
    }
    markDirty();
    saveCurrentDraft();
    renderPreview();
  }

  function photoHistoryState(slotKey) {
    proposal.photoSelectionHistory = normalizePhotoSelectionHistory(proposal.photoSelectionHistory);
    if (!proposal.photoSelectionHistory[slotKey]) {
      proposal.photoSelectionHistory[slotKey] = { back: [], forward: [] };
    }
    return proposal.photoSelectionHistory[slotKey];
  }

  function clonePhotoSelectionSnapshot(selection) {
    var normalized = normalizePhotoSelectionSnapshot(selection);
    return normalized ? { photoId: normalized.photoId, x: normalized.x, y: normalized.y, scale: normalized.scale } : null;
  }

  function updatePreviewPhotoSelection(slotKey, nextSelection, trackHistory) {
    var previous = clonePhotoSelectionSnapshot(photoSelectionForSlot(slotKey));
    var next = clonePhotoSelectionSnapshot(nextSelection);
    if (!next) {
      return false;
    }
    if (previous && previous.photoId === next.photoId && previous.x === next.x && previous.y === next.y && previous.scale === next.scale) {
      return false;
    }
    if (trackHistory) {
      var history = photoHistoryState(slotKey);
      if (previous && previous.photoId) {
        history.back.push(previous);
        if (history.back.length > 20) {
          history.back = history.back.slice(-20);
        }
      }
      history.forward = [];
    }
    proposal.photoSelections[slotKey] = next;
    return true;
  }

  function stepPreviewPhotoHistory(slotKey, direction) {
    var history = photoHistoryState(slotKey);
    var current = clonePhotoSelectionSnapshot(photoSelectionForSlot(slotKey));
    var source = direction === "forward" ? history.forward : history.back;
    var target = direction === "forward" ? history.back : history.forward;
    if (!source.length) {
      return false;
    }
    var next = source.pop();
    if (current && current.photoId) {
      target.push(current);
      if (target.length > 20) {
        target.splice(0, target.length - 20);
      }
    }
    proposal.photoSelections[slotKey] = next;
    return true;
  }

  function clampPercent(value) {
    return Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
  }

  function renderModernModelPage(page, pageNumber) {
    if (page.attachmentPage) {
      return renderAttachmentProposalPage(page, pageNumber, "modernLandscape");
    }
    var photoType = page.photoType || "context";
    var pageKey = "modern-" + page.key;
    var photos = choosePagePhotos(photoType, pageKey, ["main"]);
    var title = pageDisplayTitle(page);
    return '<article class="proposal-page modern-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="modern-inner">' +
      '<aside class="modern-page-title ' + modernTitleSizeClass(title) + ' modern-title-has-marker">' +
      '<span class="modern-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</span>' +
      '<div class="modern-title-rule"></div>' +
      '<h2>' + escapeHtml(title) + '</h2>' +
      (page.subtitle ? '<p>' + escapeHtml(page.subtitle) + '</p>' : '') +
      '</aside>' +
      '<section class="modern-content modern-content-model">' +
      '<div class="doc-copy">' + page.content() + '</div>' +
      '</section>' +
      '<aside class="modern-visuals">' +
      renderModernPhoto(photos[0], photoType, "modern-photo-main", photoSlotKey(pageKey, "main", photoType)) +
      '</aside>' +
      '<footer class="modern-footer"><span>235 W 25th Street, Houston, Texas 77008</span><span>713.532.1110 / munozalbin.com</span></footer>' +
      '</div>' +
      '</article>';
  }

  function canSavePhotoSelectionsNow() {
    return !proposal.photos.some(function (photo) {
      return photo && !photo.sample && photo.dataUrl && photo.stored === undefined;
    });
  }

  function updateHeader() {
    els.heading.textContent = proposal.project.projectName || "New Proposal";
    els.status.textContent = sharedSaveError || (sharedPendingSaves ? "Saving to shared folder..." : (isDirty ? "Unsaved changes" : "Saved to shared folder"));
  }

  function markDirty() {
    isDirty = true;
    proposal.meta.updatedAt = new Date().toISOString().slice(0, 10);
    updateHeader();
    scheduleAutoSave();
  }

  function scheduleAutoSave() {
    window.clearTimeout(autoSaveTimer);
    autoSaveTimer = window.setTimeout(function () {
      if (isDirty) {
        saveCurrentDraft();
      }
    }, 500);
  }

  function loadInitialDraft() {
    var drafts = readDrafts();
    var ids = Object.keys(drafts);
    if (ids.length) {
      var lastDraftId = "";
      try { lastDraftId = localStorage.getItem(LAST_DRAFT_KEY); } catch (error) {}
      proposal = normalizeProposal(drafts[lastDraftId] || drafts[ids[0]]);
      restoreRememberedTheme();
      proposal.savedSectionInputs = migrateSavedTextFromDrafts();
      activeTab = proposal.meta.activeTab || "info";
      activeSectionId = validSectionId(proposal.meta.activeSectionId) ? proposal.meta.activeSectionId : defaultActiveSectionId();
      isDirty = false;
    } else {
      proposal.savedSectionInputs = migrateSavedTextFromDrafts();
      activeSectionId = defaultActiveSectionId();
      rememberCurrentTheme();
      saveCurrentDraft();
    }
  }

  function readDrafts() {
    return sharedDrafts;
  }

  async function refreshSharedDrafts() {
    if (isDirty || sharedPendingSaves) return;
    var currentId = proposal.meta.id;
    var previousRevision = sharedRevisions[currentId] || "";
    try {
      await loadSharedDrafts();
      if (sharedDrafts[currentId] && sharedRevisions[currentId] !== previousRevision) {
        proposal = normalizeProposal(sharedDrafts[currentId]);
        await new Promise(function (resolve) { hydrateProposalPhotos(resolve); });
        renderAll();
      } else if (!sharedDrafts[currentId] && Object.keys(sharedDrafts).length) {
        proposal = normalizeProposal(sharedDrafts[Object.keys(sharedDrafts)[0]]);
        await new Promise(function (resolve) { hydrateProposalPhotos(resolve); });
        renderAll();
      } else if (!sharedDrafts[currentId]) {
        proposal = createDefaultProposal();
        activeTab = "info";
        activeSectionId = defaultActiveSectionId();
        saveCurrentDraft();
        renderAll();
      } else {
        renderDraftSelect();
      }
      sharedSaveError = "";
      updateHeader();
    } catch (error) {
      sharedSaveError = "Could not refresh shared projects";
      updateHeader();
      console.error(error);
    }
  }

  async function loadSharedDrafts() {
    var response = await fetch("/api/drafts", { cache: "no-store" });
    if (!response.ok) throw new Error("Shared projects returned HTTP " + response.status);
    var payload = await response.json();
    sharedDrafts = Object.assign(Object.create(null), payload.drafts || {});
    sharedRevisions = Object.assign(Object.create(null), payload.revisions || {});
  }

  async function sharedDraftRequest(id, method, draft, revision) {
    var response = await fetch("/api/drafts/" + encodeURIComponent(id), {
      method: method,
      headers: { "Content-Type": "application/json", "If-Match": revision || "" },
      body: draft ? JSON.stringify(draft) : undefined
    });
    var payload = await response.json().catch(function () { return {}; });
    if (!response.ok) {
      var error = new Error(payload.error || "Shared project save failed (HTTP " + response.status + ").");
      error.status = response.status;
      throw error;
    }
    return payload;
  }

  function queueSharedDraftSave(id, draft) {
    sharedPendingSaves += 1;
    sharedSaveError = "";
    updateHeader();
    var previous = sharedSaveChains[id] || Promise.resolve();
    var task = previous.catch(function () {}).then(async function () {
      if (sharedConflictIds[id]) throw new Error("Reload this project to resolve the other person's changes.");
      var result = await sharedDraftRequest(id, "PUT", draft, sharedRevisions[id] || "");
      sharedRevisions[id] = result.revision;
    }).catch(function (error) {
      console.error("Could not save shared project", error);
      if (error.status === 409 && !sharedConflictIds[id]) {
        sharedConflictIds[id] = true;
        window.alert("This project changed in another browser. Your current edits are still on this screen. Copy anything you need, then reload to see the latest saved project.");
      }
      if (error.status === 413) window.alert(error.message);
      sharedSaveError = error.status === 409 ? "Save conflict — reload required" : (error.status === 413 ? "Project exceeds shared save limit" : "Shared save failed — retry Save");
      isDirty = true;
    }).finally(function () {
      sharedPendingSaves -= 1;
      if (sharedSaveChains[id] === task) delete sharedSaveChains[id];
      updateHeader();
    });
    sharedSaveChains[id] = task;
    return task;
  }

  async function migrateBrowserDrafts() {
    var migrationKey = STORAGE_KEY + "-shared-migration-v1";
    try { if (localStorage.getItem(migrationKey) === "done") return; } catch (error) { return; }
    var legacy;
    try {
      legacy = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (error) {
      legacy = {};
    }
    var ids = Object.keys(legacy || {});
    var failed = 0;
    for (var index = 0; index < ids.length; index += 1) {
      var id = ids[index];
      if (sharedDrafts[id]) continue;
      var draft = legacy[id];
      if (!draft || !draft.meta || draft.meta.id !== id) continue;
      try {
        await restoreLegacyAssets(draft);
        var result = await sharedDraftRequest(id, "PUT", draft, "");
        sharedDrafts[id] = draft;
        sharedRevisions[id] = result.revision;
      } catch (error) {
        failed += 1;
        console.error("Could not migrate browser project " + id, error);
      }
    }
    if (failed) {
      window.alert(failed + " old browser project(s) could not be copied into the shared folder. They remain in this browser. Ask the administrator to check the server storage and retry by reloading.");
    } else {
      try { localStorage.setItem(migrationKey, "done"); } catch (error) {}
    }
  }

  function restoreLegacyAssets(draft) {
    return new Promise(function (resolve) {
      listStoredPhotosForDraft(draft.meta.id, function (items) {
        var assets = {};
        items.forEach(function (item) { assets[item.id] = item.dataUrl; });
        draft.photos = draft.photos || [];
        var knownPhotos = {};
        draft.photos.forEach(function (photo) { if (photo && photo.id) knownPhotos[photo.id] = true; });
        items.forEach(function (item) {
          if (!knownPhotos[item.id] && !/^(?:team-photo|signature-image|client-logo|custom-cover|custom-compensation|attachment-image):/.test(String(item.id || ""))) {
            draft.photos.push({
              id: item.id,
              name: item.name || "Recovered photo",
              dataUrl: item.dataUrl || "",
              typology: hasPhotoTypology(item.typology) ? item.typology : defaultPhotoTypologies[0],
              included: item.included !== false,
              stored: true
            });
          }
        });
        (draft.photos || []).forEach(function (photo) {
          if (photo && photo.stored && !photo.dataUrl) photo.dataUrl = assets[photo.id] || "";
        });
        (draft.team && draft.team.members || []).forEach(function (member) {
          if (member && member.photoStored && !member.photoDataUrl) {
            member.photoDataUrl = assets["team-photo:" + draft.meta.id + ":" + (member.id || "member")] || "";
          }
        });
        if (draft.signature && draft.signature.imageStored && !draft.signature.imageDataUrl) {
          draft.signature.imageDataUrl = assets["signature-image:" + draft.meta.id] || "";
        }
        (draft.project && draft.project.clientLogos || []).forEach(function (logo, index) {
          if (logo && logo.stored && !logo.dataUrl) logo.dataUrl = assets["client-logo:" + draft.meta.id + ":" + index] || "";
        });
        if (draft.customCover && draft.customCover.stored && !draft.customCover.dataUrl) {
          draft.customCover.dataUrl = assets["custom-cover:" + draft.meta.id] || "";
        }
        if (draft.customCompensation && draft.customCompensation.stored && !draft.customCompensation.dataUrl) {
          draft.customCompensation.dataUrl = assets["custom-compensation:" + draft.meta.id] || "";
        }
        (draft.attachments || []).forEach(function (attachment) {
          (attachment.pages || []).forEach(function (page) {
            if (page && page.imageStored && !page.imageDataUrl) {
              page.imageDataUrl = assets["attachment-image:" + draft.meta.id + ":" + (page.id || "page")] || "";
            }
          });
        });
        resolve();
      });
    });
  }

  function readSavedTextLibrary() {
    try {
      var library = JSON.parse(localStorage.getItem(SAVED_TEXT_LIBRARY_KEY) || "{}");
      return library && typeof library === "object" ? library : {};
    } catch (error) {
      return {};
    }
  }

  function writeSavedTextLibrary(library) {
    try {
      localStorage.setItem(SAVED_TEXT_LIBRARY_KEY, JSON.stringify(library || {}));
      return true;
    } catch (error) {
      console.error("Could not save text library", error);
      return false;
    }
  }

  function savedTextKey(preset) {
    return normalizeTitle((preset && preset.name) + " " + (preset && preset.text));
  }

  function mergeSavedTextLists(target, source) {
    var merged = Array.isArray(target) ? target.slice() : [];
    var seen = {};
    merged.forEach(function (preset) {
      seen[savedTextKey(preset)] = true;
    });
    (Array.isArray(source) ? source : []).forEach(function (preset) {
      if (!preset || !String(preset.text || "").trim()) {
        return;
      }
      var cleanPreset = {
        name: String(preset.name || "Saved text").trim() || "Saved text",
        text: String(preset.text || "")
      };
      var key = savedTextKey(cleanPreset);
      if (!seen[key]) {
        merged.push(cleanPreset);
        seen[key] = true;
      }
    });
    return merged;
  }

  function mergeDeliverableLibraries(target, source) {
    var merged = target && typeof target === "object" ? JSON.parse(JSON.stringify(target)) : {};
    if (!source || typeof source !== "object") {
      return merged;
    }
    Object.keys(source).forEach(function (phaseId) {
      var seen = {};
      var list = [];
      (Array.isArray(merged[phaseId]) ? merged[phaseId] : []).forEach(function (item) {
        var name = String(item || "").replace(/\s+/g, " ").trim();
        var key = normalizeTitle(name);
        if (name && !seen[key]) {
          seen[key] = true;
          list.push(name);
        }
      });
      (Array.isArray(source[phaseId]) ? source[phaseId] : []).forEach(function (item) {
        var name = String(item || "").replace(/\s+/g, " ").trim();
        var key = normalizeTitle(name);
        if (name && !seen[key]) {
          seen[key] = true;
          list.push(name);
        }
      });
      merged[phaseId] = list;
    });
    return merged;
  }

  function mergeSavedTextLibraryMap(target, source) {
    var merged = target && typeof target === "object" ? JSON.parse(JSON.stringify(target)) : {};
    if (!source || typeof source !== "object") {
      return merged;
    }
    Object.keys(source).forEach(function (sectionId) {
      merged[sectionId] = mergeSavedTextLists(merged[sectionId], source[sectionId]);
    });
    return merged;
  }

  function migrateSavedTextFromDrafts() {
    var library = readSavedTextLibrary();
    var drafts = readDrafts();
    Object.keys(drafts).forEach(function (draftId) {
      var saved = drafts[draftId] && drafts[draftId].savedSectionInputs;
      if (!saved || typeof saved !== "object") {
        return;
      }
      Object.keys(saved).forEach(function (sectionId) {
        library[sectionId] = mergeSavedTextLists(library[sectionId], saved[sectionId]);
      });
    });
    if (proposal && proposal.savedSectionInputs) {
      Object.keys(proposal.savedSectionInputs).forEach(function (sectionId) {
        library[sectionId] = mergeSavedTextLists(library[sectionId], proposal.savedSectionInputs[sectionId]);
      });
    }
    writeSavedTextLibrary(library);
    return library;
  }

  function savedTextPresetsFor(sectionId) {
    var library = readSavedTextLibrary();
    var draftPresets = proposal.savedSectionInputs && proposal.savedSectionInputs[sectionId];
    var merged = mergeSavedTextLists(library[sectionId], draftPresets);
    if (merged.length !== (library[sectionId] || []).length) {
      library[sectionId] = merged;
      writeSavedTextLibrary(library);
    }
    return merged;
  }

  function saveTextPreset(sectionId, preset) {
    var library = readSavedTextLibrary();
    library[sectionId] = mergeSavedTextLists(library[sectionId], [preset]);
    writeSavedTextLibrary(library);
    proposal.savedSectionInputs[sectionId] = library[sectionId].slice();
  }

  function deleteTextPreset(sectionId, index) {
    var library = readSavedTextLibrary();
    var list = Array.isArray(library[sectionId]) ? library[sectionId].slice() : [];
    if (!list[index]) {
      return;
    }
    list.splice(index, 1);
    library[sectionId] = list;
    writeSavedTextLibrary(library);
    proposal.savedSectionInputs[sectionId] = list.slice();
  }

  function readDeliverableLibrary() {
    try {
      var library = JSON.parse(localStorage.getItem(DELIVERABLE_LIBRARY_KEY) || "{}");
      return library && typeof library === "object" ? library : {};
    } catch (error) {
      return {};
    }
  }

  function writeDeliverableLibrary(library) {
    try {
      localStorage.setItem(DELIVERABLE_LIBRARY_KEY, JSON.stringify(library || {}));
      return true;
    } catch (error) {
      console.error("Could not save deliverable library", error);
      return false;
    }
  }

  function defaultDeliverableItems(phaseId) {
    return (defaultPhaseDeliverables[phaseId] || []).map(function (name) {
      return { name: name, included: true };
    });
  }

  function normalizeDeliverableItems(items, phaseId, owner) {
    var defaults = defaultDeliverableItems(phaseId);
    var library = readDeliverableLibrary();
    var libraryNames = Array.isArray(library[phaseId]) ? library[phaseId] : [];
    var source = Array.isArray(items) && items.length ? items : defaults;
    var normalized = [];
    var seen = {};

    function addItem(item, included) {
      var name = typeof item === "string" ? item : item && item.name;
      name = String(name || "").replace(/\s+/g, " ").trim();
      var key = normalizeTitle(name);
      if (!name || seen[key]) {
        return;
      }
      seen[key] = true;
      normalized.push({
        name: name,
        included: typeof item === "object" && item ? item.included !== false : included !== false
      });
    }

    source.forEach(function (item) {
      addItem(item, true);
    });
    defaults.forEach(function (item) {
      addItem(item, true);
    });
    libraryNames.forEach(function (name) {
      addItem({ name: name, included: false }, false);
    });
    return normalized.filter(function (item) {
      return !isDeliverableDeleted(phaseId, item.name, owner);
    });
  }

  function isDeliverableDeleted(phaseId, name, owner) {
    var source = owner || proposal || {};
    var deleted = source.deletedDeliverables && Array.isArray(source.deletedDeliverables[phaseId])
      ? source.deletedDeliverables[phaseId]
      : [];
    var key = normalizeTitle(name);
    return deleted.indexOf(key) >= 0;
  }

  function rememberDeletedDeliverable(phaseId, name) {
    proposal.deletedDeliverables = proposal.deletedDeliverables || {};
    var list = Array.isArray(proposal.deletedDeliverables[phaseId]) ? proposal.deletedDeliverables[phaseId] : [];
    var key = normalizeTitle(name);
    if (key && list.indexOf(key) < 0) {
      list.push(key);
    }
    proposal.deletedDeliverables[phaseId] = list;
  }

  function forgetDeletedDeliverable(phaseId, name) {
    if (!proposal.deletedDeliverables || !Array.isArray(proposal.deletedDeliverables[phaseId])) {
      return;
    }
    var key = normalizeTitle(name);
    proposal.deletedDeliverables[phaseId] = proposal.deletedDeliverables[phaseId].filter(function (item) {
      return item !== key;
    });
  }

  function saveDeliverableOption(phaseId, name) {
    var cleanName = String(name || "").replace(/\s+/g, " ").trim();
    if (!cleanName) {
      return;
    }
    var library = readDeliverableLibrary();
    var list = Array.isArray(library[phaseId]) ? library[phaseId].slice() : [];
    if (!list.some(function (item) { return normalizeTitle(item) === normalizeTitle(cleanName); })) {
      list.push(cleanName);
      library[phaseId] = list;
      writeDeliverableLibrary(library);
    }
    forgetDeletedDeliverable(phaseId, cleanName);
    proposal.deliverables = proposal.deliverables || {};
    proposal.deliverables[phaseId] = normalizeDeliverableItems(proposal.deliverables[phaseId], phaseId);
  }

  function deleteDeliverableOption(phaseId, name) {
    var cleanName = String(name || "").replace(/\s+/g, " ").trim();
    if (!cleanName) {
      return;
    }
    rememberDeletedDeliverable(phaseId, cleanName);
    var library = readDeliverableLibrary();
    if (Array.isArray(library[phaseId])) {
      library[phaseId] = library[phaseId].filter(function (item) {
        return normalizeTitle(item) !== normalizeTitle(cleanName);
      });
      writeDeliverableLibrary(library);
    }
    proposal.deliverables[phaseId] = (proposal.deliverables[phaseId] || []).filter(function (item) {
      return normalizeTitle(item && item.name) !== normalizeTitle(cleanName);
    });
  }

  function selectedDeliverableNames(phaseId) {
    proposal.deliverables = proposal.deliverables || {};
    proposal.deliverables[phaseId] = normalizeDeliverableItems(proposal.deliverables[phaseId], phaseId);
    return proposal.deliverables[phaseId].filter(function (item) {
      return item.included;
    }).map(function (item) {
      return item.name;
    });
  }

  function saveCurrentDraft() {
    window.clearTimeout(autoSaveTimer);
    var drafts = readDrafts();
    if (!proposal.meta.id) {
      proposal.meta.id = "draft-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
    }
    proposal.meta.updatedAt = new Date().toISOString().slice(0, 10);
    proposal.meta.activeTab = activeTab;
    proposal.meta.activeSectionId = activeSectionId;
    syncProposalTheme();
    rememberCurrentTheme();
    drafts[proposal.meta.id] = JSON.parse(JSON.stringify(proposal));
    try { localStorage.setItem(LAST_DRAFT_KEY, proposal.meta.id); } catch (error) {}
    isDirty = false;
    queueSharedDraftSave(proposal.meta.id, drafts[proposal.meta.id]);
    updateHeader();
    return true;
  }

  function draftForStorage(source) {
    var draft = JSON.parse(JSON.stringify(source));
    draft.meta = draft.meta || {};
    draft.themeId = normalizeThemeId(draft.themeId || draft.meta.themeId);
    draft.meta.themeId = draft.themeId;
    if (draft.customCover && draft.customCover.stored && /^data:image\//.test(String(draft.customCover.dataUrl || ""))) {
      draft.customCover = Object.assign({}, draft.customCover, {
        dataUrl: "",
        stored: true
      });
    }
    if (draft.customCompensation && draft.customCompensation.stored && /^data:image\//.test(String(draft.customCompensation.dataUrl || ""))) {
      draft.customCompensation = Object.assign({}, draft.customCompensation, {
        dataUrl: "",
        stored: true
      });
    }
    draft.photos = (draft.photos || []).map(function (photo) {
      if (photo.sample || !photo.stored || !/^data:image\//.test(String(photo.dataUrl || ""))) {
        return photo;
      }
      return {
        id: photo.id,
        name: photo.name,
        typology: photo.typology,
        included: photo.included,
        stored: true
      };
    });
    if (draft.team && Array.isArray(draft.team.members)) {
      draft.team.members = draft.team.members.map(function (member) {
        if (!member || !member.photoStored || !/^data:image\//.test(String(member.photoDataUrl || ""))) {
          return member;
        }
        var storedMember = Object.assign({}, member);
        storedMember.photoDataUrl = "";
        storedMember.photoStored = true;
        return storedMember;
      });
    }
    if (draft.signature && draft.signature.imageStored && /^data:image\//.test(String(draft.signature.imageDataUrl || ""))) {
      draft.signature = Object.assign({}, draft.signature, {
        imageDataUrl: "",
        imageStored: true
      });
    }
    if (draft.project && Array.isArray(draft.project.clientLogos)) {
      draft.project.clientLogos = draft.project.clientLogos.map(function (logo) {
        if (!logo || !logo.stored || !/^data:image\//.test(String(logo.dataUrl || ""))) {
          return logo;
        }
        return Object.assign({}, logo, {
          dataUrl: "",
          stored: true
        });
      });
    }
    if (Array.isArray(draft.attachments)) {
      draft.attachments = draft.attachments.map(function (attachment) {
        var storedAttachment = Object.assign({}, attachment);
        storedAttachment.pages = (attachment.pages || []).map(function (page) {
          if (!page || !page.imageStored || !/^data:image\//.test(String(page.imageDataUrl || ""))) {
            return page;
          }
          return Object.assign({}, page, {
            imageDataUrl: "",
            imageStored: true
          });
        });
        storedAttachment.pageCount = storedAttachment.pages.length;
        return storedAttachment;
      });
    }
    return draft;
  }

  function openPhotoDb(callback) {
    if (!window.indexedDB) {
      callback(null);
      return;
    }
    var request = indexedDB.open(PHOTO_DB_NAME, 1);
    request.onupgradeneeded = function () {
      var db = request.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
        db.createObjectStore(PHOTO_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = function () {
      callback(request.result);
    };
    request.onerror = function () {
      callback(null);
    };
  }

  function storePhotoData(photo, callback) {
    openPhotoDb(function (db) {
      if (!db) {
        callback(false);
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readwrite");
      transaction.objectStore(PHOTO_STORE_NAME).put({
        id: photo.id,
        draftId: proposal.meta.id,
        name: photo.name,
        typology: photo.typology,
        included: photo.included,
        dataUrl: photo.dataUrl,
        updatedAt: new Date().toISOString()
      });
      transaction.oncomplete = function () {
        db.close();
        callback(true);
      };
      transaction.onerror = function () {
        db.close();
        callback(false);
      };
    });
  }

  function listStoredPhotosForDraft(draftId, callback) {
    openPhotoDb(function (db) {
      if (!db) {
        callback([]);
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readonly");
      var request = transaction.objectStore(PHOTO_STORE_NAME).getAll();
      request.onsuccess = function () {
        db.close();
        callback((request.result || []).filter(function (item) {
          return item.draftId === draftId;
        }));
      };
      request.onerror = function () {
        db.close();
        callback([]);
      };
    });
  }

  function getPhotoData(id, callback) {
    openPhotoDb(function (db) {
      if (!db) {
        callback("");
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readonly");
      var request = transaction.objectStore(PHOTO_STORE_NAME).get(id);
      request.onsuccess = function () {
        db.close();
        callback(request.result && request.result.dataUrl ? request.result.dataUrl : "");
      };
      request.onerror = function () {
        db.close();
        callback("");
      };
    });
  }

  function deletePhotoData(id) {
    openPhotoDb(function (db) {
      if (!db || !id) {
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readwrite");
      transaction.objectStore(PHOTO_STORE_NAME).delete(id);
      transaction.oncomplete = function () {
        db.close();
      };
      transaction.onerror = function () {
        db.close();
      };
    });
  }

  function deleteStoredAssetsForDraft(draftId, callback) {
    openPhotoDb(function (db) {
      if (!db || !draftId) {
        if (callback) {
          callback(false);
        }
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readwrite");
      var store = transaction.objectStore(PHOTO_STORE_NAME);
      var request = store.openCursor();
      var finished = false;
      function finish(success) {
        if (finished) {
          return;
        }
        finished = true;
        db.close();
        if (callback) {
          callback(success);
        }
      }
      request.onsuccess = function () {
        var cursor = request.result;
        if (!cursor) {
          return;
        }
        if (cursor.value && cursor.value.draftId === draftId) {
          cursor.delete();
        }
        cursor.continue();
      };
      transaction.oncomplete = function () {
        finish(true);
      };
      transaction.onerror = function () {
        finish(false);
      };
      transaction.onabort = function () {
        finish(false);
      };
    });
  }

  function storeDraftAsset(id, name, dataUrl, callback) {
    openPhotoDb(function (db) {
      if (!db || !id || !dataUrl) {
        callback(false);
        return;
      }
      var transaction = db.transaction(PHOTO_STORE_NAME, "readwrite");
      transaction.objectStore(PHOTO_STORE_NAME).put({
        id: id,
        draftId: proposal.meta.id,
        name: name || id,
        dataUrl: dataUrl,
        updatedAt: new Date().toISOString()
      });
      transaction.oncomplete = function () {
        db.close();
        callback(true);
      };
      transaction.onerror = function () {
        db.close();
        callback(false);
      };
    });
  }

  function teamMemberPhotoAssetId(member) {
    return "team-photo:" + proposal.meta.id + ":" + ((member && member.id) || "member");
  }

  function signatureAssetId() {
    return "signature-image:" + proposal.meta.id;
  }

  function clientLogoAssetId(index) {
    return "client-logo:" + proposal.meta.id + ":" + index;
  }

  function customCoverAssetId() {
    return "custom-cover:" + proposal.meta.id;
  }

  function customCompensationAssetId() {
    return "custom-compensation:" + proposal.meta.id;
  }

  function attachmentImageAssetId(page) {
    return "attachment-image:" + proposal.meta.id + ":" + ((page && page.id) || "page");
  }

  function storeTeamMemberPhoto(member, callback) {
    storeDraftAsset(teamMemberPhotoAssetId(member), member && member.name, member && member.photoDataUrl, callback);
  }

  function storeSignatureImage(callback) {
    storeDraftAsset(signatureAssetId(), proposal.signature && proposal.signature.name, proposal.signature && proposal.signature.imageDataUrl, callback);
  }

  function storeClientLogo(index, callback) {
    var logos = proposal.project && Array.isArray(proposal.project.clientLogos) ? proposal.project.clientLogos : [];
    var logo = logos[index] || {};
    storeDraftAsset(clientLogoAssetId(index), logo.name, logo.dataUrl, callback);
  }

  function storeCustomCover(callback) {
    var cover = proposal.customCover || {};
    storeDraftAsset(customCoverAssetId(), cover.name, cover.dataUrl, callback);
  }

  function storeCustomCompensation(callback) {
    var compensation = proposal.customCompensation || {};
    storeDraftAsset(customCompensationAssetId(), compensation.name, compensation.dataUrl, callback);
  }

  function storeAttachmentPageImage(page, callback) {
    storeDraftAsset(attachmentImageAssetId(page), page && page.imageName, page && page.imageDataUrl, callback);
  }

  function deleteAttachmentPageImageAsset(page) {
    if (page && page.id) {
      deletePhotoData(attachmentImageAssetId(page));
    }
  }

  function hydrateProposalPhotos(callback) {
    var missing = proposal.photos.filter(function (photo) {
      return photo && photo.stored && !photo.dataUrl;
    });
    var remaining = missing.length;
    if (!remaining) {
      recoverStoredPhotos(function () {
        hydrateTeamAssets(callback);
      });
      return;
    }
    missing.forEach(function (photo) {
      getPhotoData(photo.id, function (dataUrl) {
        if (dataUrl) {
          photo.dataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          recoverStoredPhotos(function () {
            hydrateTeamAssets(callback);
          });
        }
      });
    });
  }

  function recoverStoredPhotos(callback) {
    if (sharedReady) {
      callback();
      return;
    }
    var existing = {};
    proposal.photos.forEach(function (photo) {
      existing[photo.id] = true;
    });
    listStoredPhotosForDraft(proposal.meta.id, function (storedPhotos) {
      storedPhotos.forEach(function (item) {
        if (!existing[item.id] && !/^(?:team-photo|signature-image|client-logo|custom-cover|custom-compensation|attachment-image):/.test(String(item.id || ""))) {
          proposal.photos.push({
            id: item.id,
            name: item.name || "Recovered photo",
            dataUrl: item.dataUrl,
            typology: hasPhotoTypology(item.typology) ? item.typology : defaultPhotoTypologies[0],
            included: item.included !== false,
            stored: true
          });
        }
      });
      callback();
    });
  }

  function hydrateTeamAssets(callback) {
    var members = (proposal.team && Array.isArray(proposal.team.members)) ? proposal.team.members : [];
    var missingMembers = members.filter(function (member) {
      return member && member.photoStored && !member.photoDataUrl;
    });
    var clientLogos = (proposal.project && Array.isArray(proposal.project.clientLogos)) ? proposal.project.clientLogos : [];
    var missingClientLogos = clientLogos.map(function (logo, index) {
      return logo && logo.stored && !logo.dataUrl ? { logo: logo, index: index } : null;
    }).filter(Boolean);
    var needsSignature = proposal.signature && proposal.signature.imageStored && !proposal.signature.imageDataUrl;
    var needsCustomCover = proposal.customCover && proposal.customCover.stored && !proposal.customCover.dataUrl;
    var needsCustomCompensation = proposal.customCompensation && proposal.customCompensation.stored && !proposal.customCompensation.dataUrl;
    var missingAttachmentPages = (proposal.attachments || []).reduce(function (pages, attachment) {
      return pages.concat((attachment.pages || []).filter(function (page) {
        return page && page.imageStored && !page.imageDataUrl;
      }));
    }, []);
    var remaining = missingMembers.length + missingClientLogos.length + missingAttachmentPages.length + (needsSignature ? 1 : 0) + (needsCustomCover ? 1 : 0) + (needsCustomCompensation ? 1 : 0);
    if (!remaining) {
      callback();
      return;
    }
    missingMembers.forEach(function (member) {
      getPhotoData(teamMemberPhotoAssetId(member), function (dataUrl) {
        if (dataUrl) {
          member.photoDataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    });
    missingClientLogos.forEach(function (entry) {
      getPhotoData(clientLogoAssetId(entry.index), function (dataUrl) {
        if (dataUrl) {
          entry.logo.dataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    });
    missingAttachmentPages.forEach(function (page) {
      getPhotoData(attachmentImageAssetId(page), function (dataUrl) {
        if (dataUrl) {
          page.imageDataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    });
    if (needsSignature) {
      getPhotoData(signatureAssetId(), function (dataUrl) {
        if (dataUrl) {
          proposal.signature.imageDataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    }
    if (needsCustomCover) {
      getPhotoData(customCoverAssetId(), function (dataUrl) {
        if (dataUrl) {
          proposal.customCover.dataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    }
    if (needsCustomCompensation) {
      getPhotoData(customCompensationAssetId(), function (dataUrl) {
        if (dataUrl) {
          proposal.customCompensation.dataUrl = dataUrl;
        }
        remaining -= 1;
        if (!remaining) {
          callback();
        }
      });
    }
  }

  function projectImagesEndpoint() {
    try {
      return new URL("/api/project-images", window.location.href).href;
    } catch (error) {
      return "/api/project-images";
    }
  }

  function projectImageId(relativePath) {
    return "project-image:" + normalizeTitle(relativePath || "");
  }

  function projectImageUrl(entry) {
    var base = entry && entry.url ? String(entry.url) : "";
    if (!base) {
      return "";
    }
    var stamp = entry && entry.updatedAt ? encodeURIComponent(entry.updatedAt) : "";
    return stamp ? base + (base.indexOf("?") >= 0 ? "&" : "?") + "v=" + stamp : base;
  }

  function syncProjectImageFolder(callback, options) {
    callback = typeof callback === "function" ? callback : function () {};
    options = options || {};
    if (projectImageSyncPromise && !options.force) {
      projectImageSyncPromise.then(function (changed) {
        callback(changed);
      }).catch(function () {
        callback(false);
      });
      return;
    }

    projectImageSyncPromise = fetch(projectImagesEndpoint(), { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Project image scan failed.");
        }
        return response.json();
      })
      .then(function (payload) {
        return applyProjectImageEntries(payload && Array.isArray(payload.images) ? payload.images : []);
      })
      .catch(function (error) {
        console.error(error);
        return false;
      });

    projectImageSyncPromise.then(function (changed) {
      projectImageSyncPromise = null;
      callback(changed);
    }).catch(function () {
      projectImageSyncPromise = null;
      callback(false);
    });
  }

  function applyProjectImageEntries(entries) {
    var existingById = {};
    var seenIds = {};
    var changed = false;

    proposal.photos.forEach(function (photo, index) {
      existingById[photo.id] = { photo: photo, index: index };
    });

    entries.forEach(function (entry) {
      var sourceTypology = hasPhotoTypology(entry && entry.typology) ? String(entry.typology).trim() : defaultPhotoTypologies[0];
      var id = projectImageId(entry && (entry.relativePath || entry.name));
      var url = projectImageUrl(entry);
      var existing = existingById[id];
      seenIds[id] = true;
      if (!existing) {
        proposal.photos.push({
          id: id,
          name: entry.name || "Project image",
          dataUrl: url,
          typology: sourceTypology,
          included: true,
          folderManaged: true,
          relativePath: entry.relativePath || entry.name || "",
          sourcePath: entry.url || "",
          sourceUpdatedAt: entry.updatedAt || "",
          sourceTypology: sourceTypology
        });
        changed = true;
        return;
      }
      if (normalizeTypology(existing.photo.typology) === normalizeTypology(existing.photo.sourceTypology) && normalizeTypology(existing.photo.typology) !== normalizeTypology(sourceTypology)) {
        existing.photo.typology = sourceTypology;
        changed = true;
      }
      if (existing.photo.name !== entry.name || existing.photo.dataUrl !== url || !existing.photo.folderManaged || existing.photo.relativePath !== (entry.relativePath || entry.name || "") || existing.photo.sourcePath !== (entry.url || "") || existing.photo.sourceUpdatedAt !== (entry.updatedAt || "") || normalizeTypology(existing.photo.sourceTypology) !== normalizeTypology(sourceTypology)) {
        existing.photo.name = entry.name || existing.photo.name;
        existing.photo.dataUrl = url || existing.photo.dataUrl;
        existing.photo.folderManaged = true;
        existing.photo.relativePath = entry.relativePath || entry.name || "";
        existing.photo.sourcePath = entry.url || "";
        existing.photo.sourceUpdatedAt = entry.updatedAt || "";
        existing.photo.sourceTypology = sourceTypology;
        changed = true;
      }
    });

    proposal.photos = proposal.photos.filter(function (photo) {
      if (!photo || !photo.folderManaged) {
        return true;
      }
      if (seenIds[photo.id]) {
        return true;
      }
      changed = true;
      return false;
    });

    if (changed) {
      saveCurrentDraft();
    }
    return changed;
  }

  function renderDraftSelect() {
    var drafts = readDrafts();
    var ids = Object.keys(drafts).sort(function (a, b) {
      return (drafts[b].meta.updatedAt || "").localeCompare(drafts[a].meta.updatedAt || "");
    });
    els.draftSelect.innerHTML = "";
    ids.forEach(function (id) {
      var draft = normalizeProposal(drafts[id]);
      var option = document.createElement("option");
      option.value = id;
      option.textContent = draftDisplayName(draft) + " - " + (draft.meta.updatedAt || "");
      els.draftSelect.appendChild(option);
    });
    if (proposal.meta.id) {
      els.draftSelect.value = proposal.meta.id;
    }
    els.renameDraft.disabled = !ids.length;
    els.deleteDraft.disabled = !ids.length;
  }

  function draftDisplayName(draft) {
    var metaName = draft && draft.meta ? String(draft.meta.draftName || "").trim() : "";
    var projectName = draft && draft.project ? String(draft.project.projectName || "").trim() : "";
    return metaName || projectName || "Untitled proposal";
  }

  function renameSelectedDraft() {
    var draftId = els.draftSelect.value || (proposal.meta && proposal.meta.id);
    var drafts = readDrafts();
    if (!draftId || !drafts[draftId]) {
      return;
    }
    var currentName = draftDisplayName(drafts[draftId]);
    var requestedName = window.prompt("Rename this saved draft:", currentName);
    if (requestedName === null) {
      return;
    }
    var nextName = String(requestedName).trim();
    if (!nextName) {
      window.alert("Enter a name for this draft.");
      return;
    }
    drafts[draftId].meta = drafts[draftId].meta || {};
    drafts[draftId].meta.draftName = nextName;
    if (proposal.meta && proposal.meta.id === draftId) {
      var previousName = proposal.meta.draftName;
      proposal.meta.draftName = nextName;
      if (!saveCurrentDraft()) {
        proposal.meta.draftName = previousName;
        window.alert("This draft could not be renamed.");
        return;
      }
    } else {
      queueSharedDraftSave(draftId, JSON.parse(JSON.stringify(drafts[draftId])));
    }
    renderDraftSelect();
    flashStatus("Draft renamed.");
  }

  async function deleteSelectedDraft() {
    var draftId = els.draftSelect.value || (proposal.meta && proposal.meta.id);
    var drafts = readDrafts();
    if (!draftId || !drafts[draftId]) {
      return;
    }
    var name = draftDisplayName(drafts[draftId]);
    if (!window.confirm('Delete "' + name + '"? This cannot be undone.')) {
      return;
    }

    window.clearTimeout(autoSaveTimer);
    try {
      if (sharedSaveChains[draftId]) await sharedSaveChains[draftId];
      await sharedDraftRequest(draftId, "DELETE", null, sharedRevisions[draftId] || "");
    } catch (error) {
      window.alert(error.message || "This draft could not be deleted.");
      return;
    }
    delete drafts[draftId];
    delete sharedRevisions[draftId];
    forgetRememberedTheme(draftId);
    deleteStoredAssetsForDraft(draftId);

    var remainingIds = Object.keys(drafts).sort(function (a, b) {
      return ((drafts[b].meta && drafts[b].meta.updatedAt) || "").localeCompare((drafts[a].meta && drafts[a].meta.updatedAt) || "");
    });
    if (remainingIds.length) {
      proposal = normalizeProposal(drafts[remainingIds[0]]);
      restoreRememberedTheme();
      proposal.savedSectionInputs = migrateSavedTextFromDrafts();
      try { localStorage.setItem(LAST_DRAFT_KEY, proposal.meta.id); } catch (error) {}
      activeTab = proposal.meta.activeTab || "info";
      activeSectionId = validSectionId(proposal.meta.activeSectionId) ? proposal.meta.activeSectionId : defaultActiveSectionId();
      isDirty = false;
    } else {
      try { localStorage.removeItem(LAST_DRAFT_KEY); } catch (error) {}
      proposal = createDefaultProposal();
      proposal.savedSectionInputs = migrateSavedTextFromDrafts();
      activeTab = "info";
      activeSectionId = defaultActiveSectionId();
      isDirty = true;
      saveCurrentDraft();
    }

    hydrateProposalPhotos(function () {
      syncProjectImageFolder(function () {
        renderAll();
        flashStatus("Draft deleted.");
      });
    });
  }

  function forgetRememberedTheme(draftId) {
    try {
      var remembered = readRememberedThemes();
      delete remembered[draftId];
      localStorage.setItem(THEME_SELECTION_KEY, JSON.stringify(remembered));
    } catch (error) {}
    try {
      var sessionTheme = JSON.parse(sessionStorage.getItem(THEME_SESSION_KEY) || "{}");
      if (sessionTheme && sessionTheme.draftId === draftId) {
        sessionStorage.removeItem(THEME_SESSION_KEY);
      }
    } catch (error) {}
  }

  function currentTemplateLabel() {
    var template = findTemplateById(proposal.templateId);
    return template ? template.label : "Full Service | Office/Retail";
  }

  function currentThemeId() {
    return normalizeThemeId(proposal.themeId);
  }

  function twoDigit(value) {
    return String(value).padStart(2, "0");
  }

  function formatYear(value) {
    if (!value) {
      return new Date().getFullYear();
    }
    var date = new Date(value + "T12:00:00");
    return Number.isNaN(date.getTime()) ? String(value).slice(0, 4) : date.getFullYear();
  }

  function ensurePrintPageSize() {
    var style = document.getElementById("proposal-print-page-size");
    if (!style) {
      style = document.createElement("style");
      style.id = "proposal-print-page-size";
      document.head.appendChild(style);
    }
    style.textContent = currentThemeId() === "modernLandscape" ? "@page{size:11in 8.5in;margin:0;}" : "@page{size:8.5in 11in;margin:0;}";
  }

  function getValue(obj, path) {
    return path.split(".").reduce(function (current, key) {
      return current && Object.prototype.hasOwnProperty.call(current, key) ? current[key] : "";
    }, obj);
  }

  function setValue(obj, path, value) {
    var keys = path.split(".");
    var target = obj;
    keys.slice(0, -1).forEach(function (key) {
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {};
      }
      target = target[key];
    });
    target[keys[keys.length - 1]] = value;
  }

  function cleanLines(lines) {
    return (lines || []).map(function (line) { return String(line || "").trim(); }).filter(Boolean);
  }

  function importScheduleImage(file, statusEl) {
    if (!file) {
      return;
    }
    readFileAsDataUrl(file, function (dataUrl) {
      proposal.scheduleImport = {
        name: file.name || "Pasted schedule image",
        dataUrl: dataUrl,
        text: proposal.scheduleImport.text || ""
      };
      markDirty();
      renderAll();
      runScheduleOcr(dataUrl);
    });
    if (statusEl) {
      statusEl.innerHTML = "<strong>Reading schedule image...</strong><span>This may take a moment the first time.</span>";
    }
  }

  function importCompensationImage(file, statusEl) {
    if (!file) {
      return;
    }
    readFileAsDataUrl(file, function (dataUrl) {
      proposal.compensationImport = {
        name: file.name || "Pasted compensation image",
        dataUrl: dataUrl,
        text: proposal.compensationImport.text || ""
      };
      markDirty();
      renderAll();
      runCompensationOcr(dataUrl);
    });
    if (statusEl) {
      statusEl.innerHTML = "<strong>Reading compensation image...</strong><span>This may take a moment the first time.</span>";
    }
  }

  function runScheduleOcr(dataUrl) {
    var status = document.querySelector(".schedule-drop-zone");
    setScheduleImportStatus("Loading image reader...", "The first run may need an internet connection.");
    loadTesseract(function (error) {
      if (error || !window.Tesseract) {
        setScheduleImportStatus("Image reader unavailable", "You can still paste schedule text below and apply it.");
        return;
      }
      prepareScheduleImageForOcr(dataUrl, function (preparedImages) {
        recognizeScheduleImageVariants(preparedImages && preparedImages.length ? preparedImages : [dataUrl], function (text) {
          proposal.scheduleImport.text = text || "";
          applyScheduleText(text, "Image was read, but no matching schedule rows were found.");
        }, function () {
          setScheduleImportStatus("Could not read image", "Try a clearer image, or paste schedule text below.");
        });
      });
    });
    if (status) {
      status.focus();
    }
  }

  function runCompensationOcr(dataUrl) {
    var status = document.querySelector(".compensation-drop-zone");
    setCompensationImportStatus("Loading image reader...", "The first run may need an internet connection.");
    loadTesseract(function (error) {
      if (error || !window.Tesseract) {
        setCompensationImportStatus("Image reader unavailable", "You can still paste compensation text below and apply it.");
        return;
      }
      prepareScheduleImageForOcr(dataUrl, function (preparedImages) {
        recognizeCompensationImageVariants(preparedImages && preparedImages.length ? preparedImages : [dataUrl], function (text) {
          proposal.compensationImport.text = text || "";
          applyCompensationText(text, "Image was read, but no matching compensation amounts were found.");
        }, function () {
          setCompensationImportStatus("Could not read image", "Try a clearer image, or paste compensation text below.");
        });
      });
    });
    if (status) {
      status.focus();
    }
  }

  function prepareScheduleImageForOcr(dataUrl, callback) {
    var image = new Image();
    image.onload = function () {
      var maxWidth = 4200;
      var scale = Math.min(8, Math.max(3, maxWidth / Math.max(1, image.width)));
      var canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      var ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      callback(buildScheduleOcrVariants(canvas, ctx, dataUrl));
    };
    image.onerror = function () {
      callback([dataUrl]);
    };
    image.src = dataUrl;
  }

  function buildScheduleOcrVariants(canvas, ctx, fallbackUrl) {
    var base = cloneCanvas(canvas);
    var grayscale = cloneCanvas(canvas);
    var highContrast = cloneCanvas(canvas);
    var darkText = cloneCanvas(canvas);
    var variants = [base.toDataURL("image/png")];

    applyScheduleGrayscale(grayscale.getContext("2d"), grayscale.width, grayscale.height, function (gray) {
      return gray > 210 ? 255 : gray < 140 ? 0 : 255;
    });
    variants.push(grayscale.toDataURL("image/png"));

    applyScheduleGrayscale(highContrast.getContext("2d"), highContrast.width, highContrast.height, function (gray) {
      if (gray > 235) {
        return 255;
      }
      if (gray < 165) {
        return 0;
      }
      return 255;
    });
    variants.push(highContrast.toDataURL("image/png"));

    applyScheduleDarkTextMask(darkText.getContext("2d"), darkText.width, darkText.height);
    variants.push(darkText.toDataURL("image/png"));

    if (fallbackUrl) {
      variants.push(fallbackUrl);
    }
    return variants.filter(Boolean);
  }

  function cloneCanvas(source) {
    var canvas = document.createElement("canvas");
    canvas.width = source.width;
    canvas.height = source.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(source, 0, 0);
    return canvas;
  }

  function applyScheduleGrayscale(ctx, width, height, transform) {
    var pixels = ctx.getImageData(0, 0, width, height);
    for (var i = 0; i < pixels.data.length; i += 4) {
      var gray = pixels.data[i] * 0.299 + pixels.data[i + 1] * 0.587 + pixels.data[i + 2] * 0.114;
      var value = transform(gray, pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]);
      pixels.data[i] = value;
      pixels.data[i + 1] = value;
      pixels.data[i + 2] = value;
      pixels.data[i + 3] = 255;
    }
    ctx.putImageData(pixels, 0, 0);
  }

  function applyScheduleDarkTextMask(ctx, width, height) {
    var pixels = ctx.getImageData(0, 0, width, height);
    for (var i = 0; i < pixels.data.length; i += 4) {
      var r = pixels.data[i];
      var g = pixels.data[i + 1];
      var b = pixels.data[i + 2];
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var gray = r * 0.299 + g * 0.587 + b * 0.114;
      var saturation = max ? (max - min) / max : 0;
      var value = gray < 155 || (gray < 190 && saturation < 0.28) ? 0 : 255;
      pixels.data[i] = value;
      pixels.data[i + 1] = value;
      pixels.data[i + 2] = value;
      pixels.data[i + 3] = 255;
    }
    ctx.putImageData(pixels, 0, 0);
  }

  function recognizeScheduleImageVariants(images, onSuccess, onFailure) {
    var jobs = [];
    (images || []).forEach(function (image, index) {
      jobs.push({ image: image, psm: "11", key: "sparse-" + index });
      jobs.push({ image: image, psm: "6", key: "block-" + index });
    });
    var best = { score: -1, text: "" };

    function run(index) {
      if (index >= jobs.length) {
        if (best.text) {
          onSuccess(best.text);
        } else {
          onFailure();
        }
        return;
      }
      var job = jobs[index];
      window.Tesseract.recognize(job.image, "eng", {
        tessedit_pageseg_mode: job.psm,
        preserve_interword_spaces: "1",
        logger: function (message) {
          if (message && message.status) {
            var percent = typeof message.progress === "number" ? " " + Math.round(message.progress * 100) + "%" : "";
            setScheduleImportStatus("Reading schedule image...", message.status + percent);
          }
        }
      }).then(function (result) {
        var text = result && result.data ? result.data.text : "";
        var score = scoreScheduleOcrText(text);
        if (score > best.score) {
          best = { score: score, text: text };
        }
        run(index + 1);
      }).catch(function () {
        run(index + 1);
      });
    }

    run(0);
  }

  function recognizeCompensationImageVariants(images, onSuccess, onFailure) {
    var jobs = [];
    (images || []).forEach(function (image, index) {
      jobs.push({ image: image, psm: "11", key: "sparse-" + index });
      jobs.push({ image: image, psm: "6", key: "block-" + index });
    });
    var best = { score: -1, text: "" };

    function run(index) {
      if (index >= jobs.length) {
        if (best.text) {
          onSuccess(best.text);
        } else {
          onFailure();
        }
        return;
      }
      var job = jobs[index];
      window.Tesseract.recognize(job.image, "eng", {
        tessedit_pageseg_mode: job.psm,
        preserve_interword_spaces: "1",
        logger: function (message) {
          if (message && message.status) {
            var percent = typeof message.progress === "number" ? " " + Math.round(message.progress * 100) + "%" : "";
            setCompensationImportStatus("Reading compensation image...", message.status + percent);
          }
        }
      }).then(function (result) {
        var text = result && result.data ? result.data.text : "";
        var score = scoreCompensationOcrText(text);
        if (score > best.score) {
          best = { score: score, text: text };
        }
        run(index + 1);
      }).catch(function () {
        run(index + 1);
      });
    }

    run(0);
  }

  function scoreScheduleOcrText(text) {
    var normalized = normalizeTitle(text);
    var parsed = parseScheduleText(text);
    var score = Object.keys(parsed).length * 10;
    scheduleFieldDefs.forEach(function (field) {
      if (titleHasScheduleAlias(normalized, normalizeTitle(field.label))) {
        score += 6;
      }
    });
    (String(text || "").match(/\b\d+(?:\.\d+)?\s*(?:weeks?|months?|days?)\b/gi) || []).forEach(function () {
      score += 2;
    });
    return score;
  }

  function scoreCompensationOcrText(text) {
    var normalized = normalizeTitle(text);
    var parsed = parseCompensationText(text);
    var score = Object.keys(parsed).length * 12;
    compensationFieldDefs.forEach(function (field) {
      if (titleHasScheduleAlias(normalized, normalizeTitle(field.label))) {
        score += 6;
      }
    });
    (String(text || "").match(/\$?\d[\d,]*(?:\.\d{2})?/g) || []).forEach(function () {
      score += 2;
    });
    return score;
  }

  function findCompensationValue(field, lines) {
    for (var i = 0; i < lines.length; i += 1) {
      var line = normalizeOcrLine(lines[i]);
      if (!line) {
        continue;
      }
      var alias = field.aliases.find(function (item) {
        return titleHasScheduleAlias(normalizeTitle(line), normalizeTitle(item));
      });
      if (alias) {
        var value = extractCompensationAmount(line) || extractCompensationAmount(stripCompensationLabel(line, alias));
        if (!value && lines[i + 1] && !lineLooksLikeCompensationLabel(lines[i + 1])) {
          value = extractCompensationAmount(lines[i + 1]);
        }
        if (value) {
          return value;
        }
      }
    }
    return "";
  }

  function stripCompensationLabel(line, alias) {
    var escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\W+");
    var expression = new RegExp("^.*?" + escaped + "\\s*[:\\-â€“â€”|$]*\\s*", "i");
    return normalizeScheduleValue(line.replace(expression, ""));
  }

  function extractCompensationAmount(value) {
    var matches = String(value || "").match(/\$?\s*\d[\d,]*(?:\.\d{2})?/g) || [];
    if (!matches.length) {
      return "";
    }
    var dollarMatches = matches.filter(function (match) { return /\$/.test(match); });
    var preferred = dollarMatches.length ? dollarMatches[dollarMatches.length - 1] : matches[matches.length - 1];
    var formatted = formatCompensationAmount(preferred, true);
    if (formatted) {
      return formatted;
    }
    for (var i = matches.length - 1; i >= 0; i -= 1) {
      formatted = formatCompensationAmount(matches[i], true);
      if (formatted) {
        return formatted;
      }
    }
    return "";
  }

  function formatCompensationAmount(value, allowSmall) {
    var raw = String(value || "").replace(/[^0-9.]/g, "");
    if (!raw || raw === ".") {
      return "";
    }
    var pieces = raw.split(".");
    var whole = pieces[0] || "0";
    var decimals = pieces.length > 1 ? pieces[1].slice(0, 2) : "";
    if (!allowSmall && !decimals && whole.replace(/^0+/, "").length < 4) {
      return "";
    }
    var number = Number(whole + (decimals ? "." + decimals : ""));
    if (!Number.isFinite(number)) {
      return "";
    }
    return decimals ? number.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : number.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  function sumCompensationBreakdown(result) {
    var total = 0;
    var count = 0;
    compensationFieldDefs.forEach(function (field) {
      if (field.path === "compensation.amount") {
        return;
      }
      var amount = parseCompensationNumber(result[field.path]);
      if (amount > 0) {
        total += amount;
        count += 1;
      }
    });
    return count ? total : 0;
  }

  function parseCompensationNumber(value) {
    var number = Number(String(value || "").replace(/,/g, ""));
    return Number.isFinite(number) ? number : 0;
  }

  function loadTesseract(callback) {
    if (window.Tesseract) {
      callback();
      return;
    }
    var existing = document.querySelector('script[data-reader="tesseract"]');
    if (existing) {
      existing.addEventListener("load", function () { callback(); });
      existing.addEventListener("error", function () { callback(new Error("Unable to load OCR reader.")); });
      return;
    }
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.async = true;
    script.dataset.reader = "tesseract";
    script.onload = function () { callback(); };
    script.onerror = function () { callback(new Error("Unable to load OCR reader.")); };
    document.head.appendChild(script);
  }

  function setScheduleImportStatus(title, detail) {
    var drop = document.querySelector(".schedule-drop-zone");
    if (drop) {
      drop.innerHTML = "<strong>" + escapeHtml(title) + "</strong><span>" + escapeHtml(detail || "") + "</span>";
    }
  }

  function setCompensationImportStatus(title, detail) {
    var drop = document.querySelector(".compensation-drop-zone");
    if (drop) {
      drop.innerHTML = "<strong>" + escapeHtml(title) + "</strong><span>" + escapeHtml(detail || "") + "</span>";
    }
  }

  function applyScheduleText(text, emptyMessage) {
    var values = parseScheduleText(text);
    var paths = Object.keys(values);
    if (!paths.length) {
      setScheduleImportStatus("Nothing applied", emptyMessage || "No matching schedule rows were found.");
      return;
    }
    paths.forEach(function (path) {
      setValue(proposal, path, values[path]);
    });
    proposal.scheduleImport.text = text || "";
    markDirty();
    renderAll();
    setScheduleImportStatus("Schedule fields updated", describeAppliedScheduleRows(paths));
  }

  function applyCompensationText(text, emptyMessage) {
    proposal.compensationImport.text = text || "";
    updateCompensationImportTextarea();
    var values = parseCompensationText(text);
    var paths = Object.keys(values);
    if (!paths.length) {
      setCompensationImportStatus("Nothing applied", emptyMessage || "No matching compensation amounts were found.");
      return;
    }
    paths.forEach(function (path) {
      setValue(proposal, path, values[path]);
    });
    if (values["compensation.amount"]) {
      proposal.compensation.amountWords = compensationAmountToWords(values["compensation.amount"]);
      if (paths.indexOf("compensation.amountWords") < 0) {
        paths.push("compensation.amountWords");
      }
    }
    markDirty();
    renderAll();
    setCompensationImportStatus("Compensation fields updated", describeAppliedCompensationRows(paths));
  }

  function parseScheduleText(text) {
    var lines = scheduleOcrLines(text);
    var result = parseSchedulePhaseBars(lines);
    var rows = scheduleRowsFromLines(lines);
    rows.forEach(function (row) {
      var field = matchScheduleField(row.label);
      var duration = extractScheduleDuration(row.value || row.label);
      if (field && duration && !result[field.path]) {
        result[field.path] = duration;
      }
    });
    scheduleFieldDefs.forEach(function (field) {
      var value = findScheduleValue(field, lines);
      if (value && !result[field.path]) {
        result[field.path] = value;
      }
    });
    return result;
  }

  function parseCompensationText(text) {
    var lines = compensationOcrLines(text);
    var result = parseCompensationBlocks(lines);
    compensationFieldDefs.forEach(function (field) {
      var value = findCompensationValue(field, lines);
      if (value) {
        result[field.path] = value;
      }
    });
    if (!result["compensation.amount"]) {
      var sum = sumCompensationBreakdown(result);
      if (sum) {
        result["compensation.amount"] = formatCompensationAmount(sum.toFixed(2));
      }
    }
    if (Object.keys(result).length < 3) {
      mergeCompensationResults(result, parseCompensationOrderedAmounts(lines));
    }
    return result;
  }

  function updateCompensationImportTextarea() {
    var textarea = document.getElementById("compensation-import-text");
    if (textarea && textarea.value !== (proposal.compensationImport.text || "")) {
      textarea.value = proposal.compensationImport.text || "";
    }
  }

  function describeAppliedScheduleRows(paths) {
    var labels = paths.map(function (path) {
      var field = scheduleFieldDefs.find(function (item) { return item.path === path; });
      return field ? field.label : path;
    });
    return labels.length + " row" + (labels.length === 1 ? "" : "s") + " filled: " + labels.join(", ") + ". Review the fields before exporting.";
  }

  function describeAppliedCompensationRows(paths) {
    var labels = paths.map(function (path) {
      if (path === "compensation.amountWords") {
        return "Amount in words";
      }
      var field = compensationFieldDefs.find(function (item) { return item.path === path; });
      return field ? field.label : path;
    });
    return labels.length + " field" + (labels.length === 1 ? "" : "s") + " filled: " + labels.join(", ") + ". Review the amounts before exporting.";
  }

  function scheduleOcrLines(text) {
    return cleanLines(String(text || "")
      .replace(/\r/g, "\n")
      .replace(/[|]+/g, "\n")
      .replace(/\t/g, "  ")
      .split("\n"))
      .map(normalizeOcrLine)
      .filter(function (line) {
        return line && !/^(phase|duration|fee|schedule)$/i.test(line) && !isCalendarMonthAxisLine(line);
      });
  }

  function compensationOcrLines(text) {
    return cleanLines(String(text || "")
      .replace(/\r/g, "\n")
      .replace(/[|]+/g, "\n")
      .replace(/\t/g, "  ")
      .split("\n"))
      .map(normalizeOcrLine)
      .filter(function (line) {
        return line && !/^(amount|fee|compensation)$/i.test(line);
      });
  }

  function parseCompensationBlocks(lines) {
    var text = normalizeOcrLine((lines || []).join(" "));
    var occurrences = findCompensationOccurrences(text);
    var result = {};
    occurrences.forEach(function (occurrence, index) {
      if (result[occurrence.field.path]) {
        return;
      }
      var next = occurrences[index + 1];
      var segment = text.slice(occurrence.end, next ? next.index : text.length);
      var amount = extractCompensationAmount(segment);
      if (amount) {
        result[occurrence.field.path] = amount;
      }
    });
    return result;
  }

  function parseCompensationOrderedAmounts(lines) {
    var amounts = [];
    var seen = {};
    (lines || []).forEach(function (line) {
      var amount = extractCompensationAmount(line);
      if (!amount) {
        return;
      }
      var key = normalizeTitle(line) + "|" + amount;
      if (seen[key]) {
        return;
      }
      seen[key] = true;
      amounts.push({
        line: line,
        amount: amount
      });
    });
    if (!amounts.length) {
      return {};
    }

    var ordered = {};
    var unlabeledOnly = amounts.every(function (item) {
      return !/[a-z]/i.test(item.line);
    });
    var phaseOrder = [
      "compensation.concept",
      "compensation.schematic",
      "compensation.designDevelopment",
      "compensation.constructionDocuments",
      "compensation.bid",
      "compensation.constructionObservation"
    ];
    var nonTotal = amounts.filter(function (item) {
      return !/\btotal\b/i.test(item.line);
    });
    if (unlabeledOnly && nonTotal.length >= 7) {
      ordered["compensation.amount"] = nonTotal[nonTotal.length - 1].amount;
      nonTotal = nonTotal.slice(0, nonTotal.length - 1);
    }
    phaseOrder.forEach(function (path, index) {
      if (nonTotal[index]) {
        ordered[path] = nonTotal[index].amount;
      }
    });
    var totalLine = amounts.find(function (item) {
      return /\btotal\b/i.test(item.line);
    });
    if (totalLine) {
      ordered["compensation.amount"] = totalLine.amount;
    } else if (!ordered["compensation.amount"]) {
      var sum = sumCompensationBreakdown(ordered);
      if (sum) {
        ordered["compensation.amount"] = formatCompensationAmount(sum.toFixed(2));
      }
    }
    return ordered;
  }

  function mergeCompensationResults(target, source) {
    Object.keys(source || {}).forEach(function (path) {
      if (!target[path]) {
        target[path] = source[path];
      }
    });
    return target;
  }

  function findCompensationOccurrences(text) {
    var occurrences = [];
    compensationFieldDefs.forEach(function (field) {
      strongCompensationAliases(field).forEach(function (alias) {
        var expression = scheduleAliasExpression(alias, "ig");
        var match;
        while ((match = expression.exec(text)) !== null) {
          occurrences.push({
            field: field,
            alias: alias,
            index: match.index,
            end: match.index + match[0].length
          });
        }
      });
    });
    occurrences.sort(function (a, b) {
      return a.index - b.index || b.alias.length - a.alias.length;
    });
    return occurrences.filter(function (occurrence, index) {
      return !occurrences.slice(0, index).some(function (previous) {
        return occurrence.index < previous.end && occurrence.end > previous.index;
      });
    });
  }

  function strongCompensationAliases(field) {
    var seen = {};
    return [field.label].concat(field.aliases).filter(function (alias) {
      var key = normalizeTitle(alias);
      if (!key || seen[key] || key === "fee" || key === "total") {
        return false;
      }
      seen[key] = true;
      return key.length > 1;
    }).sort(function (a, b) {
      return b.length - a.length;
    });
  }

  function parseSchedulePhaseBars(lines) {
    var text = normalizeOcrLine((lines || []).join(" "));
    var occurrences = findSchedulePhaseOccurrences(text);
    var result = {};
    occurrences.forEach(function (occurrence, index) {
      var path = occurrence.field.path;
      if (result[path]) {
        return;
      }
      var next = occurrences[index + 1];
      var segment = text.slice(occurrence.end, next ? next.index : text.length);
      var duration = extractScheduleDuration(segment);
      if (duration) {
        result[path] = duration;
      }
    });
    return result;
  }

  function findSchedulePhaseOccurrences(text) {
    var occurrences = [];
    scheduleFieldDefs.forEach(function (field) {
      strongScheduleAliases(field).forEach(function (alias) {
        var expression = scheduleAliasExpression(alias, "ig");
        var match;
        while ((match = expression.exec(text)) !== null) {
          occurrences.push({
            field: field,
            alias: alias,
            index: match.index,
            end: match.index + match[0].length
          });
        }
      });
    });
    occurrences.sort(function (a, b) {
      return a.index - b.index || b.alias.length - a.alias.length;
    });
    return occurrences.filter(function (occurrence, index) {
      return !occurrences.slice(0, index).some(function (previous) {
        return occurrence.index < previous.end && occurrence.end > previous.index;
      });
    });
  }

  function strongScheduleAliases(field) {
    var seen = {};
    return [field.label].concat(field.aliases).filter(function (alias) {
      var key = normalizeTitle(alias);
      if (!key || seen[key] || /^(sd|dd|cd|cds|ca)$/.test(key) || /^(ongoing|closeout|through closeout)$/.test(key)) {
        return false;
      }
      seen[key] = true;
      return key.length > 3;
    }).sort(function (a, b) {
      return b.length - a.length;
    });
  }

  function scheduleRowsFromLines(lines) {
    var rows = [];
    lines.forEach(function (line) {
      splitPossibleScheduleRows(line).forEach(function (part) {
        var row = parseScheduleRow(part);
        if (row) {
          rows.push(row);
        }
      });
    });
    return rows;
  }

  function splitPossibleScheduleRows(line) {
    var normalized = normalizeOcrLine(line);
    var pieces = normalized.split(/\s+(?=\d{1,2}\s+[A-Za-z])/);
    return pieces.length > 1 ? pieces : [normalized];
  }

  function parseScheduleRow(line) {
    var cleaned = normalizeOcrLine(line).replace(/^\d{1,2}\s+/, "");
    var duration = extractScheduleDuration(cleaned);
    if (!duration) {
      return null;
    }
    var label = cleaned.replace(duration, "").replace(/[-–—:]+$/g, "").trim();
    return label ? { label: label, value: duration } : null;
  }

  function extractScheduleDuration(value) {
    var text = normalizeOcrLine(value)
      .replace(/\bwecks\b/gi, "weeks")
      .replace(/\bwks?\b/gi, "weeks")
      .replace(/\bmos?\b/gi, "months")
      .replace(/\bmo\b/gi, "months")
      .replace(/\bmonthes\b/gi, "months");
    var match = text.match(/\b(?:duration by aor|tbd by aor|through closeout|by aor|ongoing|tbd)\b/i);
    if (match) {
      return normalizeScheduleSpecialDuration(match[0]);
    }
    match = text.match(/\b\d+(?:\.\d+)?\s*(?:-|to)?\s*\d*\s*(?:weeks?|months?|days?)\b/i);
    if (match) {
      return normalizeScheduleValue(match[0]);
    }
    return "";
  }

  function normalizeScheduleSpecialDuration(value) {
    var text = String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (text === "tbd by aor") {
      return "TBD by AOR";
    }
    if (text === "tbd") {
      return "TBD";
    }
    if (text === "duration by aor") {
      return "Duration by AOR";
    }
    if (text === "by aor") {
      return "By AOR";
    }
    return sentenceCase(text);
  }

  function matchScheduleField(label) {
    var normalized = normalizeTitle(label);
    var best = null;
    var bestScore = 0;
    scheduleFieldDefs.forEach(function (field) {
      field.aliases.forEach(function (alias) {
        var aliasKey = normalizeTitle(alias);
        var score = normalized === aliasKey ? 100 : titleHasScheduleAlias(normalized, aliasKey) ? aliasKey.length : aliasKey.length > 3 && titleHasScheduleAlias(aliasKey, normalized) ? normalized.length : 0;
        if (score > bestScore) {
          best = field;
          bestScore = score;
        }
      });
    });
    return bestScore >= 2 ? best : null;
  }

  function findScheduleValue(field, lines) {
    for (var i = 0; i < lines.length; i += 1) {
      var line = normalizeOcrLine(lines[i]);
      if (!line) {
        continue;
      }
      var alias = field.aliases.find(function (item) {
        return titleHasScheduleAlias(normalizeTitle(line), normalizeTitle(item));
      });
      if (alias) {
        var value = extractScheduleDuration(line) || extractScheduleDuration(stripScheduleLabel(line, alias));
        if (!value && lines[i + 1] && !lineLooksLikeScheduleLabel(lines[i + 1])) {
          value = extractScheduleDuration(lines[i + 1]);
        }
        if (value) {
          return value;
        }
      }
    }
    return "";
  }

  function stripScheduleLabel(line, alias) {
    var escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\W+");
    var expression = new RegExp("^.*?" + escaped + "\\s*[:\\-–—|]*\\s*", "i");
    return normalizeScheduleValue(line.replace(expression, ""));
  }

  function normalizeOcrLine(line) {
    return String(line || "")
      .replace(/[|]+/g, " ")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeScheduleValue(value) {
    return trimAtNextScheduleLabel(String(value || ""))
      .replace(/^(duration|phase|weeks?|months?)\s*[:\-–—|]*\s*/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function trimAtNextScheduleLabel(value) {
    var earliest = -1;
    scheduleFieldDefs.forEach(function (field) {
      field.aliases.forEach(function (alias) {
        var escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\W+");
        var match = new RegExp("\\b" + escaped + "\\b", "i").exec(value);
        if (match && match.index > 0 && (earliest === -1 || match.index < earliest)) {
          earliest = match.index;
        }
      });
    });
    return earliest > 0 ? value.slice(0, earliest) : value;
  }

  function lineLooksLikeScheduleLabel(line) {
    var normalized = normalizeTitle(line);
    return scheduleFieldDefs.some(function (field) {
      return field.aliases.some(function (alias) {
        return titleHasScheduleAlias(normalized, normalizeTitle(alias));
      });
    });
  }

  function lineLooksLikeCompensationLabel(line) {
    var normalized = normalizeTitle(line);
    return compensationFieldDefs.some(function (field) {
      return field.aliases.some(function (alias) {
        return titleHasScheduleAlias(normalized, normalizeTitle(alias));
      });
    });
  }

  function titleHasScheduleAlias(normalizedTitle, normalizedAlias) {
    if (!normalizedTitle || !normalizedAlias) {
      return false;
    }
    if (normalizedAlias.length <= 3) {
      return normalizedTitle === normalizedAlias || normalizedTitle.indexOf(normalizedAlias + " ") === 0;
    }
    var expression = new RegExp("(^|\\s)" + escapeRegExp(normalizedAlias).replace(/\s+/g, "\\s+") + "(?=\\s|$)");
    return expression.test(normalizedTitle);
  }

  function scheduleAliasExpression(alias, flags) {
    var words = normalizeTitle(alias).split(/\s+/).filter(Boolean).map(escapeRegExp);
    return new RegExp("\\b" + words.join("[^a-z0-9]+") + "\\b", flags || "i");
  }

  function isCalendarMonthAxisLine(line) {
    var tokens = normalizeTitle(line).split(/\s+/).filter(Boolean);
    if (tokens.length < 2) {
      return false;
    }
    var monthCount = tokens.filter(function (token) {
      return /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)$/.test(token);
    }).length;
    return monthCount >= 2 && monthCount >= Math.ceil(tokens.length * 0.5);
  }

  function escapeRegExp(value) {
    return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function compensationAmountToWords(value) {
    var cleaned = String(value || "").replace(/,/g, "").trim();
    var match = cleaned.match(/^(\d+)(?:\.(\d{1,2}))?$/);
    if (!match) {
      return "";
    }
    var dollars = Number(match[1] || "0");
    var cents = (match[2] || "").padEnd(2, "0").slice(0, 2) || "00";
    if (!Number.isFinite(dollars)) {
      return "";
    }
    return sentenceCase(numberToWords(dollars)) + " and " + cents + "/100";
  }

  function numberToWords(value) {
    var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (value < 20) {
      return ones[value];
    }
    if (value < 100) {
      return tens[Math.floor(value / 10)] + (value % 10 ? "-" + ones[value % 10] : "");
    }
    if (value < 1000) {
      return ones[Math.floor(value / 100)] + " hundred" + (value % 100 ? " " + numberToWords(value % 100) : "");
    }
    if (value < 1000000) {
      return numberToWords(Math.floor(value / 1000)) + " thousand" + (value % 1000 ? ", " + numberToWords(value % 1000) : "");
    }
    if (value < 1000000000) {
      return numberToWords(Math.floor(value / 1000000)) + " million" + (value % 1000000 ? ", " + numberToWords(value % 1000000) : "");
    }
    return String(value);
  }

  function normalizeTitle(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function lowerFirst(value) {
    var text = String(value || "");
    return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
  }

  function firstName(value) {
    var text = String(value || "").replace(/^Mr\.?\s+|^Ms\.?\s+|^Mrs\.?\s+/i, "").trim();
    return text.split(/\s+/)[0] || "Client";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }
    var date = new Date(value + "T12:00:00");
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  function filenameBase() {
    return (proposal.project.projectName || "proposal")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "proposal";
  }

  function readFileAsDataUrl(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function readPhotoFileAsDataUrl(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      var original = reader.result;
      var image = new Image();
      image.onload = function () {
        var maxSize = 1200;
        var largest = Math.max(image.width || maxSize, image.height || maxSize);
        var scale = Math.min(1, maxSize / largest);
        var width = Math.max(1, Math.round((image.width || maxSize) * scale));
        var height = Math.max(1, Math.round((image.height || maxSize) * scale));
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        callback(canvas.toDataURL("image/jpeg", 0.76));
      };
      image.onerror = function () {
        callback(original);
      };
      image.src = original;
    };
    reader.readAsDataURL(file);
  }

  function downloadText(filename, content, type) {
    downloadBlob(filename, new Blob([content], { type: type || "text/plain" }), type || "text/plain");
  }

  function downloadBlob(filename, blob, type) {
    if (type && blob.type !== type) {
      blob = new Blob([blob], { type: type });
    }
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 400);
  }

  function backupFileName(prefix) {
    var stamp = new Date().toISOString().replace(/[:]/g, "-").replace(/\.\d{3}Z$/, "");
    return (prefix || "proposal-bot-backup") + "-" + stamp + ".json";
  }

  function backupJson() {
    return JSON.stringify({
      exportedAt: new Date().toISOString(),
      activeDraftId: proposal.meta.id || "",
      customProposalTypes: readCustomTemplates(),
      savedTextLibrary: migrateSavedTextFromDrafts(),
      deliverableLibrary: readDeliverableLibrary(),
      generalConditionsRateDefaults: readSavedGeneralConditionsHourlyRates(),
      drafts: readDrafts()
    }, null, 2);
  }

  function downloadAppData(prefix) {
    downloadBlob(backupFileName(prefix || "proposal-bot-backup"), new Blob([backupJson()], { type: "application/json" }), "application/json");
  }

  async function backupAppData() {
    if (window.showDirectoryPicker) {
      try {
        var selectedFolder = await window.showDirectoryPicker({
          id: "proposal-bot-backups",
          mode: "readwrite"
        });
        var backupFolder = selectedFolder.name === "Backups"
          ? selectedFolder
          : await selectedFolder.getDirectoryHandle("Backups", { create: true });
        var fileHandle = await backupFolder.getFileHandle(backupFileName(), { create: true });
        var writable = await fileHandle.createWritable();
        await writable.write(backupJson());
        await writable.close();
        flashStatus("Backup saved in Backups folder.");
        return;
      } catch (error) {
        if (error && error.name === "AbortError") {
          return;
        }
      }
    }
    downloadAppData();
    flashStatus("Backup downloaded.");
  }

  async function openBackupImport() {
    if (window.showOpenFilePicker) {
      try {
        var handles = await window.showOpenFilePicker({
          id: "proposal-bot-import-backup",
          multiple: false,
          types: [
            {
              description: "JSON backup",
              accept: { "application/json": [".json"] }
            }
          ]
        });
        if (handles && handles[0]) {
          importBackupFromFile(await handles[0].getFile());
        }
        return;
      } catch (error) {
        if (error && error.name === "AbortError") {
          return;
        }
      }
    }
    if (els.importBackupInput) {
      els.importBackupInput.click();
    }
  }

  async function importBackupFromFile(file) {
    try {
      var text = await file.text();
      var payload = JSON.parse(text);
      await importBackupPayload(payload);
    } catch (error) {
      console.error(error);
      window.alert("The backup could not be imported: " + (error.message || "Please choose a valid Proposal Bot backup JSON file."));
    }
  }

  async function importBackupPayload(payload) {
    var importedDrafts = extractImportedDrafts(payload);
    var importedIds = Object.keys(importedDrafts);
    if (!importedIds.length) {
      window.alert("That file does not contain any proposal drafts to import.");
      return;
    }

    var drafts = readDrafts();
    var importedMap = {};
    for (var index = 0; index < importedIds.length; index += 1) {
      var originalId = importedIds[index];
      var draft = importedDrafts[originalId];
      var id = originalId;
      await restoreLegacyAssets(draft);
      if (drafts[id]) {
        id = "draft-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
        draft.meta.id = id;
      }
      var result = await sharedDraftRequest(id, "PUT", draft, "");
      drafts[id] = draft;
      sharedRevisions[id] = result.revision;
      importedMap[originalId] = id;
    }

    if (payload && payload.savedTextLibrary && typeof payload.savedTextLibrary === "object") {
      writeSavedTextLibrary(mergeSavedTextLibraryMap(readSavedTextLibrary(), payload.savedTextLibrary));
    }
    if (payload && payload.deliverableLibrary && typeof payload.deliverableLibrary === "object") {
      writeDeliverableLibrary(mergeDeliverableLibraries(readDeliverableLibrary(), payload.deliverableLibrary));
    }
    if (payload && Array.isArray(payload.generalConditionsRateDefaults) && payload.generalConditionsRateDefaults.length) {
      writeSavedGeneralConditionsHourlyRates(payload.generalConditionsRateDefaults);
    }
    var importedProposalTypes = payload && (payload.customProposalTypes || payload.proposalTypes);
    if (Array.isArray(importedProposalTypes)) {
      writeCustomTemplates(mergeCustomTemplateLists(readCustomTemplates(), importedProposalTypes));
    }

    var activeDraftId = importedMap[chooseImportedDraftId(payload, importedDrafts, importedIds)];
    proposal = normalizeProposal(drafts[activeDraftId]);
    proposal.savedSectionInputs = migrateSavedTextFromDrafts();
    try { localStorage.setItem(LAST_DRAFT_KEY, proposal.meta.id); } catch (error) {}
    activeTab = proposal.meta.activeTab || "info";
    activeSectionId = validSectionId(proposal.meta.activeSectionId) ? proposal.meta.activeSectionId : defaultActiveSectionId();
    isDirty = false;

    hydrateProposalPhotos(function () {
      syncProjectImageFolder(function () {
        renderAll();
      });
      flashStatus(importedIds.length === 1 ? "Backup imported." : "Backup imported with " + importedIds.length + " drafts.");
      if (backupIncludesDetachedPhotos(importedDrafts)) {
        window.alert("Some images in this older backup were stored only in the original browser. Re-add any missing images to the imported projects.");
      }
    });
  }

  function extractImportedDrafts(payload) {
    var draftMap = {};
    if (payload && payload.drafts && typeof payload.drafts === "object" && !Array.isArray(payload.drafts)) {
      Object.keys(payload.drafts).forEach(function (id) {
        var normalized = normalizeProposal(payload.drafts[id]);
        if (!normalized.meta.id) {
          normalized.meta.id = id;
        }
        draftMap[normalized.meta.id] = normalized;
      });
      return draftMap;
    }
    if (payload && payload.meta && payload.project) {
      var draft = normalizeProposal(payload);
      if (!draft.meta.id) {
        draft.meta.id = "draft-" + Date.now();
      }
      draftMap[draft.meta.id] = draft;
    }
    return draftMap;
  }

  function chooseImportedDraftId(payload, draftMap, ids) {
    if (payload && payload.activeDraftId && draftMap[payload.activeDraftId]) {
      return payload.activeDraftId;
    }
    return ids.sort(function (a, b) {
      var draftA = draftMap[a] || {};
      var draftB = draftMap[b] || {};
      var dateA = draftA.meta && draftA.meta.updatedAt || "";
      var dateB = draftB.meta && draftB.meta.updatedAt || "";
      return dateB.localeCompare(dateA);
    })[0];
  }

  function backupIncludesDetachedPhotos(draftMap) {
    return Object.keys(draftMap).some(function (id) {
      var draft = draftMap[id];
      var hasDetachedPhoto = Array.isArray(draft.photos) && draft.photos.some(function (photo) {
        return photo && photo.stored && !photo.sample && !photo.dataUrl;
      });
      var hasDetachedCover = draft.customCover && draft.customCover.stored && !draft.customCover.dataUrl;
      var hasDetachedCompensation = draft.customCompensation && draft.customCompensation.stored && !draft.customCompensation.dataUrl;
      var hasDetachedAttachment = Array.isArray(draft.attachments) && draft.attachments.some(function (attachment) {
        return Array.isArray(attachment.pages) && attachment.pages.some(function (page) {
          return page && page.imageStored && !page.imageDataUrl;
        });
      });
      return hasDetachedPhoto || hasDetachedCover || hasDetachedCompensation || hasDetachedAttachment;
    });
  }

  async function exportInDesignFile() {
    var pageNodes = els.preview ? Array.from(els.preview.querySelectorAll(".proposal-page")) : [];
    document.documentElement.setAttribute("data-indesign-export-error", "");
    if (!pageNodes.length) {
      window.alert("There are no formatted proposal pages available to export.");
      return;
    }
    flashStatus("Building InDesign export...");
    try {
      await waitForProposalPrintAssets();
      var response = await fetch(inDesignExportEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(await buildInDesignExportPayload(pageNodes))
      });
      if (!response.ok) {
        throw new Error(await response.text() || "InDesign export service failed.");
      }
      var blob = await response.blob();
      downloadBlob(filenameBase() + "-indesign-package.zip", blob, "application/zip");
      flashStatus("InDesign package downloaded.");
    } catch (error) {
      document.documentElement.setAttribute("data-indesign-export-error", error && (error.stack || error.message || String(error)) || "Unknown InDesign export error");
      console.error(error);
      flashStatus("InDesign export failed.");
      window.alert("The InDesign export could not be built from the current formatted proposal.\n\n" + (error && error.message || "Reload the proposal and try again."));
    }
  }

  async function buildInDesignExportPayload(pageNodes) {
    var pagePixels = currentInDesignPagePixelSize();
    var imageCache = new Map();
    var pages = [];
    for (var node of pageNodes) {
      pages.push({
        html: await buildInDesignPageHtml(node, pagePixels, imageCache),
        width: pagePixels.width,
        height: pagePixels.height
      });
    }
    return {
      filenameBase: filenameBase(),
      baseUrl: window.location.href,
      bodyClasses: inDesignExportBodyClasses(),
      stylesText: collectDocumentCssText(),
      pageSize: currentInDesignPageSize(),
      pages: pages
    };
  }

  async function buildInDesignPageHtml(node, pagePixels, imageCache) {
    var clone = node.cloneNode(true);
    clone.querySelectorAll(".photo-slot-tools, .photo-frame-resize-handle, .text-frame-resize-handle").forEach(function (toolNode) {
      toolNode.remove();
    });
    for (var image of clone.querySelectorAll("img")) {
      var src = image.getAttribute("src") || "";
      if (src) {
        image.setAttribute("src", await inDesignImageDataUrl(src, imageCache));
      }
      image.removeAttribute("srcset");
      image.removeAttribute("crossorigin");
      image.setAttribute("loading", "eager");
    }
    clone.style.margin = "0";
    clone.style.width = pagePixels.width + "px";
    clone.style.height = pagePixels.height + "px";
    clone.style.minHeight = pagePixels.height + "px";
    clone.style.maxWidth = "none";
    clone.style.maxHeight = "none";
    clone.style.boxShadow = "none";
    clone.style.border = "0";
    return clone.outerHTML;
  }

  async function inDesignImageDataUrl(src, imageCache) {
    if (/^data:image\//i.test(src)) {
      return src;
    }
    var url = absoluteExportAssetUrl(src);
    if (!imageCache.has(url)) {
      imageCache.set(url, (async function () {
        var response = await fetch(url, { credentials: "same-origin" });
        if (!response.ok) {
          throw new Error("A proposal image could not be included in the InDesign package (HTTP " + response.status + ").");
        }
        var blob = await response.blob();
        if (!/^image\//i.test(blob.type) || !blob.size) {
          throw new Error("A proposal image could not be included in the InDesign package. Reload the proposal and try again.");
        }
        return blobToDataUrl(blob);
      })());
    }
    return imageCache.get(url);
  }

  function absoluteExportAssetUrl(value) {
    var src = String(value || "");
    if (!src || /^(?:data|blob):/i.test(src)) {
      return src;
    }
    try {
      return new URL(src, window.location.href).href;
    } catch (error) {
      return src;
    }
  }

  function inDesignExportBodyClasses() {
    var theme = currentThemeId();
    var classes = [];
    if (theme === "modernLandscape") {
      classes.push("printing-modern-landscape");
    }
    if (theme === "northlinePortrait") {
      classes.push("printing-northline-portrait");
    }
    if (theme === "maOg" || theme === "studioPortrait") {
      classes.push("printing-structured-portrait");
    }
    return classes.join(" ");
  }

  function inDesignExportEndpoint() {
    if (/^https?:$/i.test(window.location.protocol)) {
      return new URL("/api/export-idml", window.location.href).href;
    }
    return "http://127.0.0.1:4181/api/export-idml";
  }

  async function renderElementToJpegDataUrl(element, scale) {
    var rect = element.getBoundingClientRect();
    var width = Math.max(1, Math.round(rect.width));
    var height = Math.max(1, Math.round(rect.height));
    var clone = element.cloneNode(true);
    clone.querySelectorAll(".photo-slot-tools, .photo-frame-resize-handle, .text-frame-resize-handle").forEach(function (node) {
      node.remove();
    });
    clone.style.margin = "0";
    clone.style.width = width + "px";
    clone.style.height = height + "px";
    clone.style.maxWidth = "none";
    clone.style.maxHeight = "none";
    await inlineClonedImageSources(element, clone);
    var cssText = collectDocumentCssText();
    var serialized = new XMLSerializer().serializeToString(clone);
    var svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" width="', width, '" height="', height, '" viewBox="0 0 ', width, " ", height, '">',
      '<foreignObject x="0" y="0" width="100%" height="100%">',
      '<div xmlns="http://www.w3.org/1999/xhtml" style="width:', width, "px;height:", height, 'px;overflow:hidden;background:#ffffff;">',
      "<style>", escapeSvgText(cssText), "</style>",
      serialized,
      "</div>",
      "</foreignObject>",
      "</svg>"
    ].join("");
    return svgToJpegDataUrl(svg, width, height, scale || 2);
  }

  async function inlineClonedImageSources(originalRoot, cloneRoot) {
    var originalImages = Array.from(originalRoot.querySelectorAll("img"));
    var cloneImages = Array.from(cloneRoot.querySelectorAll("img"));
    for (var i = 0; i < originalImages.length; i += 1) {
      if (!cloneImages[i]) {
        continue;
      }
      cloneImages[i].setAttribute("src", await imageElementToDataUrl(originalImages[i]));
      cloneImages[i].removeAttribute("srcset");
      cloneImages[i].setAttribute("crossorigin", "anonymous");
    }
  }

  async function imageElementToDataUrl(image) {
    var src = image.currentSrc || image.getAttribute("src") || "";
    if (!src) {
      return "";
    }
    if (src.indexOf("data:") === 0) {
      return src;
    }
    await waitForImageLoaded(image);
    if (image.naturalWidth && image.naturalHeight) {
      try {
        var canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        return canvas.toDataURL("image/png");
      } catch (error) {
      }
    }
    try {
      var response = await fetch(src);
      var blob = await response.blob();
      return await blobToDataUrl(blob);
    } catch (error) {
      return src;
    }
  }

  function waitForImageLoaded(image) {
    return new Promise(function (resolve) {
      if (!image || (image.complete && image.naturalWidth)) {
        resolve();
        return;
      }
      var done = function () {
        image.removeEventListener("load", done);
        image.removeEventListener("error", done);
        resolve();
      };
      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
    });
  }

  function blobToDataUrl(blob) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  function svgToJpegDataUrl(svgText, width, height, scale) {
    return new Promise(function (resolve, reject) {
      var svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
      var url = URL.createObjectURL(svgBlob);
      var image = new Image();
      image.onload = function () {
        try {
          var canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(width * scale));
          canvas.height = Math.max(1, Math.round(height * scale));
          var context = canvas.getContext("2d");
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL("image/jpeg", 0.92));
        } catch (error) {
          URL.revokeObjectURL(url);
          reject(error);
        }
      };
      image.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("Could not rasterize the formatted proposal page."));
      };
      image.src = url;
    });
  }

  function collectDocumentCssText() {
    var chunks = [];
    Array.from(document.styleSheets || []).forEach(function (sheet) {
      try {
        Array.from(sheet.cssRules || []).forEach(function (rule) {
          chunks.push(rule.cssText);
        });
      } catch (error) {
      }
    });
    return chunks.join("\n");
  }

  function escapeSvgText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildInDesignIdmlBlob(pageDataUrls, baseFiles) {
    var pageSize = currentInDesignPageSize();
    var spreadDescriptors = [];
    var entries = [
      { name: "mimetype", bytes: stringToBytes("application/vnd.adobe.indesign-idml-package") },
      { name: "META-INF/container.xml", bytes: stringToBytes(baseFiles["META-INF/container.xml"] || "") },
      { name: "META-INF/metadata.xml", bytes: stringToBytes(baseFiles["META-INF/metadata.xml"] || "") },
      { name: "Resources/Graphic.xml", bytes: stringToBytes(baseFiles["Resources/Graphic.xml"] || "") },
      { name: "Resources/Fonts.xml", bytes: stringToBytes(baseFiles["Resources/Fonts.xml"] || "") },
      { name: "Resources/Styles.xml", bytes: stringToBytes(baseFiles["Resources/Styles.xml"] || "") },
      { name: "Resources/Preferences.xml", bytes: stringToBytes(baseFiles["Resources/Preferences.xml"] || "") },
      { name: "XML/Tags.xml", bytes: stringToBytes(baseFiles["XML/Tags.xml"] || "") },
      { name: "XML/BackingStory.xml", bytes: stringToBytes(baseFiles["XML/BackingStory.xml"] || "") },
      { name: "MasterSpreads/MasterSpread_uca.xml", bytes: stringToBytes(buildIdmlMasterSpreadXml(pageSize.width, pageSize.height)) }
    ];
    pageDataUrls.forEach(function (dataUrl, index) {
      var pageNumber = index + 1;
      var spreadSelf = "us" + pageNumber;
      var pageSelf = "up" + pageNumber;
      var spreadPath = "Spreads/Spread_" + spreadSelf + ".xml";
      var imagePath = "Links/page-" + pageNumber + ".jpg";
      var imageBytes = dataUrlToBytes(dataUrl);
      spreadDescriptors.push({
        spreadPath: spreadPath,
        spreadSelf: spreadSelf,
        pageSelf: pageSelf,
        pageNumber: pageNumber
      });
      entries.push({
        name: spreadPath,
        bytes: stringToBytes(buildIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, pageSize.width, pageSize.height, imagePath, imageBytes.length))
      });
      entries.push({
        name: imagePath,
        bytes: imageBytes
      });
    });
    entries.splice(2, 0, {
      name: "designmap.xml",
      bytes: stringToBytes(buildIdmlDesignmapXml(baseFiles["designmap.xml"] || "", spreadDescriptors))
    });
    return createStoredZipBlob(entries, "application/vnd.adobe.indesign-idml-package");
  }

  function currentInDesignPageSize() {
    if (currentThemeId() === "modernLandscape") {
      return { width: 11 * 72, height: 8.5 * 72 };
    }
    return { width: 8.5 * 72, height: 11 * 72 };
  }

  function currentInDesignPagePixelSize() {
    var pageSize = currentInDesignPageSize();
    return {
      width: Math.round(pageSize.width * 96 / 72),
      height: Math.round(pageSize.height * 96 / 72)
    };
  }

  function buildIdmlDesignmapXml(template, spreadDescriptors) {
    var refs = ['<idPkg:MasterSpread src="MasterSpreads/MasterSpread_uca.xml"/>'].concat(
      spreadDescriptors.map(function (descriptor) {
        return '<idPkg:Spread src="' + descriptor.spreadPath + '"/>';
      })
    ).join("\n\t");
    var xml = template || "";
    xml = xml.replace(/StoryList="[^"]*"/, 'StoryList=""');
    xml = xml.replace(/\n\t<idPkg:MasterSpread src="MasterSpreads\/MasterSpread_uca\.xml"\/>[\s\S]*?(\n\t<Section Self=)/, "\n\t" + refs + "$1");
    xml = xml.replace(/\n\t<idPkg:Story src="Stories\/[^"]+"\/>/g, "");
    if (spreadDescriptors.length) {
      xml = xml.replace(/(<Section Self="[^"]+" Length=")[^"]+(" Name="" ContinueNumbering="true" IncludeSectionPrefix="false" Marker="" PageStart=")[^"]+(" SectionPrefix="")/, "$1" + spreadDescriptors.length + "$2" + spreadDescriptors[0].pageSelf + "$3");
    }
    return xml;
  }

  function buildIdmlMasterSpreadXml(width, height) {
    var top = -height / 2;
    return [
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
      '<idPkg:MasterSpread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
      '\t<MasterSpread Self="uca" ItemTransform="1 0 0 1 0 0" OverriddenPageItemProps="" Name="A-Master" NamePrefix="A" BaseName="Master" ShowMasterItems="true" PageCount="1">',
      '\t\t<Properties><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
      '\t\t<Page Self="ucf" GeometricBounds="0 0 ' + height + " " + width + '" ItemTransform="1 0 0 1 0 ' + top + '" Name="A" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" OverrideList="" AppliedMaster="n" MasterPageTransform="1 0 0 1 0 0" TabOrder="" GridStartingPoint="TopOutside" UseMasterGrid="true">',
      '\t\t\t<Properties><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
      '\t\t\t<MarginPreference ColumnCount="1" ColumnGutter="12" Top="0" Bottom="0" Left="0" Right="0" ColumnDirection="Horizontal" ColumnsPositions="0 ' + width + '"/>',
      '\t\t\t<GridDataInformation FontStyle="Regular" PointSize="12" CharacterAki="0" LineAki="9" HorizontalScale="100" VerticalScale="100" LineAlignment="LeftOrTopLineJustify" GridAlignment="AlignEmCenter" CharacterAlignment="AlignEmCenter"><Properties><AppliedFont type="string">Minion Pro</AppliedFont></Properties></GridDataInformation>',
      "\t\t</Page>",
      "\t</MasterSpread>",
      "</idPkg:MasterSpread>"
    ].join("\n");
  }

  function buildIdmlSpreadXml(spreadSelf, pageSelf, pageNumber, width, height, imagePath, imageSize) {
    var top = -height / 2;
    var bottom = height / 2;
    var rectangleSelf = "ur" + pageNumber;
    var imageSelf = "ui" + pageNumber;
    var linkSelf = "ul" + pageNumber;
    var linkPath = imagePath;
    return [
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
      '<idPkg:Spread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="7.5">',
      '\t<Spread Self="' + spreadSelf + '" FlattenerOverride="Default" AllowPageShuffle="true" ItemTransform="1 0 0 1 0 0" ShowMasterItems="true" PageCount="1" BindingLocation="0" PageTransitionType="None" PageTransitionDirection="NotApplicable" PageTransitionDuration="Medium">',
      '\t\t<FlattenerPreference LineArtAndTextResolution="300" GradientAndMeshResolution="150" ClipComplexRegions="false" ConvertAllStrokesToOutlines="false" ConvertAllTextToOutlines="false"><Properties><RasterVectorBalance type="double">50</RasterVectorBalance></Properties></FlattenerPreference>',
      '\t\t<Page Self="' + pageSelf + '" GeometricBounds="0 0 ' + height + " " + width + '" ItemTransform="1 0 0 1 0 ' + top + '" Name="' + pageNumber + '" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" OverrideList="" AppliedMaster="n" MasterPageTransform="1 0 0 1 0 0" TabOrder="" GridStartingPoint="TopOutside" UseMasterGrid="true">',
      '\t\t\t<Properties><Descriptor type="list"><ListItem type="string"></ListItem><ListItem type="enumeration">Arabic</ListItem><ListItem type="boolean">true</ListItem><ListItem type="boolean">false</ListItem><ListItem type="long">' + pageNumber + '</ListItem><ListItem type="string"></ListItem></Descriptor><PageColor type="enumeration">UseMasterColor</PageColor></Properties>',
      '\t\t\t<MarginPreference ColumnCount="1" ColumnGutter="12" Top="0" Bottom="0" Left="0" Right="0" ColumnDirection="Horizontal" ColumnsPositions="0 ' + width + '"/>',
      '\t\t\t<GridDataInformation FontStyle="Regular" PointSize="12" CharacterAki="0" LineAki="9" HorizontalScale="100" VerticalScale="100" LineAlignment="LeftOrTopLineJustify" GridAlignment="AlignEmCenter" CharacterAlignment="AlignEmCenter"><Properties><AppliedFont type="string">Minion Pro</AppliedFont></Properties></GridDataInformation>',
      "\t\t</Page>",
      '\t\t<Rectangle Self="' + rectangleSelf + '" ContentType="GraphicType" GradientFillStart="0 0" GradientFillLength="0" GradientFillAngle="0" GradientStrokeStart="0 0" GradientStrokeLength="0" GradientStrokeAngle="0" ItemLayer="ub3" Locked="false" LocalDisplaySetting="Default" GradientFillHiliteLength="0" GradientFillHiliteAngle="0" GradientStrokeHiliteLength="0" GradientStrokeHiliteAngle="0" AppliedObjectStyle="ObjectStyle/$ID/[None]" Visible="true" Name="$ID/" ItemTransform="1 0 0 1 0 0" StrokeColor="Swatch/None" FillColor="Color/Paper">',
      "\t\t\t<Properties>",
      "\t\t\t\t<PathGeometry>",
      '\t\t\t\t\t<GeometryPathType PathOpen="false"><PathPointArray>' +
        '<PathPointType Anchor="0 ' + top + '" LeftDirection="0 ' + top + '" RightDirection="0 ' + top + '"/>' +
        '<PathPointType Anchor="0 ' + bottom + '" LeftDirection="0 ' + bottom + '" RightDirection="0 ' + bottom + '"/>' +
        '<PathPointType Anchor="' + width + " " + bottom + '" LeftDirection="' + width + " " + bottom + '" RightDirection="' + width + " " + bottom + '"/>' +
        '<PathPointType Anchor="' + width + " " + top + '" LeftDirection="' + width + " " + top + '" RightDirection="' + width + " " + top + '"/>' +
        "</PathPointArray></GeometryPathType>",
      "\t\t\t\t</PathGeometry>",
      "\t\t\t</Properties>",
      '\t\t\t<TextWrapPreference Inverse="false" ApplyToMasterPageOnly="false" TextWrapSide="BothSides" TextWrapMode="None"><Properties><TextWrapOffset Top="0" Left="0" Bottom="0" Right="0"/></Properties></TextWrapPreference>',
      '\t\t\t<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/>',
      '\t\t\t<ObjectExportOption AltTextSourceType="SourceXMLStructure" ActualTextSourceType="SourceXMLStructure" CustomAltText="$ID/" CustomActualText="$ID/" ApplyTagType="TagFromStructure" CustomImageConversion="false" ImageConversionType="JPEG" CustomImageSizeOption="SizeRelativeToPageWidth" ImageExportResolution="Ppi300" GIFOptionsPalette="AdaptivePalette" GIFOptionsInterlaced="true" JPEGOptionsQuality="High" JPEGOptionsFormat="BaselineEncoding" CustomImageAlignment="false" ImageAlignment="AlignLeft" ImageSpaceBefore="0" ImageSpaceAfter="0" SpaceUnit="CssEm" UseImagePageBreak="false" ImagePageBreak="PageBreakBefore"><Properties><AltMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/><ActualMetadataProperty NamespacePrefix="$ID/" PropertyPath="$ID/"/></Properties></ObjectExportOption>',
      '\t\t\t<Image Self="' + imageSelf + '" ItemTransform="1 0 0 1 0 0" Space="RGB" ActualPpi="144 144" EffectivePpi="144 144" ImageType="JPEG" Status="Normal" Visible="true" GraphicBounds="' + top + " 0 " + bottom + " " + width + '" LinkResourceURI="file:' + linkPath + '">',
      "\t\t\t\t<Properties><Profile type=\"string\">sRGB IEC61966-2.1</Profile></Properties>",
      '\t\t\t\t<Link Self="' + linkSelf + '" LinkResourceURI="file:' + linkPath + '" LinkResourceFormat="$ID/JPEG" StoredState="Normal" LinkClassID="35906" LinkClientID="257" LinkResourceSize="' + Math.max(0, Number(imageSize) || 0) + '" LinkObjectModified="false" LinkObjectID="' + pageNumber + '" LinkUniqueKey="' + imagePath + '" UIShowInUI="true"/>',
      "\t\t\t</Image>",
      "\t\t</Rectangle>",
      "\t</Spread>",
      "</idPkg:Spread>"
    ].join("\n");
  }

  function dataUrlToBytes(dataUrl) {
    var parts = String(dataUrl || "").split(",");
    var binary = window.atob(parts[1] || "");
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function stringToBytes(value) {
    return new TextEncoder().encode(String(value || ""));
  }

  function createStoredZipBlob(entries, type) {
    var timestamp = new Date();
    var date = dosDate(timestamp);
    var time = dosTime(timestamp);
    var localChunks = [];
    var centralChunks = [];
    var offset = 0;
    entries.forEach(function (entry) {
      var nameBytes = stringToBytes(entry.name);
      var dataBytes = entry.bytes instanceof Uint8Array ? entry.bytes : new Uint8Array(entry.bytes || []);
      var crc = crc32(dataBytes);
      var localHeader = new Uint8Array(30 + nameBytes.length);
      writeUint32(localHeader, 0, 0x04034b50);
      writeUint16(localHeader, 4, 20);
      writeUint16(localHeader, 6, 0);
      writeUint16(localHeader, 8, 0);
      writeUint16(localHeader, 10, time);
      writeUint16(localHeader, 12, date);
      writeUint32(localHeader, 14, crc);
      writeUint32(localHeader, 18, dataBytes.length);
      writeUint32(localHeader, 22, dataBytes.length);
      writeUint16(localHeader, 26, nameBytes.length);
      writeUint16(localHeader, 28, 0);
      localHeader.set(nameBytes, 30);
      localChunks.push(localHeader, dataBytes);

      var centralHeader = new Uint8Array(46 + nameBytes.length);
      writeUint32(centralHeader, 0, 0x02014b50);
      writeUint16(centralHeader, 4, 20);
      writeUint16(centralHeader, 6, 20);
      writeUint16(centralHeader, 8, 0);
      writeUint16(centralHeader, 10, 0);
      writeUint16(centralHeader, 12, time);
      writeUint16(centralHeader, 14, date);
      writeUint32(centralHeader, 16, crc);
      writeUint32(centralHeader, 20, dataBytes.length);
      writeUint32(centralHeader, 24, dataBytes.length);
      writeUint16(centralHeader, 28, nameBytes.length);
      writeUint16(centralHeader, 30, 0);
      writeUint16(centralHeader, 32, 0);
      writeUint16(centralHeader, 34, 0);
      writeUint16(centralHeader, 36, 0);
      writeUint32(centralHeader, 38, 0);
      writeUint32(centralHeader, 42, offset);
      centralHeader.set(nameBytes, 46);
      centralChunks.push(centralHeader);
      offset += localHeader.length + dataBytes.length;
    });
    var centralSize = centralChunks.reduce(function (sum, chunk) {
      return sum + chunk.length;
    }, 0);
    var endRecord = new Uint8Array(22);
    writeUint32(endRecord, 0, 0x06054b50);
    writeUint16(endRecord, 4, 0);
    writeUint16(endRecord, 6, 0);
    writeUint16(endRecord, 8, entries.length);
    writeUint16(endRecord, 10, entries.length);
    writeUint32(endRecord, 12, centralSize);
    writeUint32(endRecord, 16, offset);
    writeUint16(endRecord, 20, 0);
    return new Blob(localChunks.concat(centralChunks, [endRecord]), { type: type || "application/zip" });
  }

  function writeUint16(buffer, offset, value) {
    buffer[offset] = value & 255;
    buffer[offset + 1] = value >>> 8 & 255;
  }

  function writeUint32(buffer, offset, value) {
    buffer[offset] = value & 255;
    buffer[offset + 1] = value >>> 8 & 255;
    buffer[offset + 2] = value >>> 16 & 255;
    buffer[offset + 3] = value >>> 24 & 255;
  }

  function dosTime(date) {
    return (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  }

  function dosDate(date) {
    return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  }

  function crc32(bytes) {
    if (!crc32.table) {
      crc32.table = [];
      for (var i = 0; i < 256; i += 1) {
        var c = i;
        for (var j = 0; j < 8; j += 1) {
          c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
        }
        crc32.table[i] = c >>> 0;
      }
    }
    var crc = 0xffffffff;
    for (var index = 0; index < bytes.length; index += 1) {
      crc = crc32.table[(crc ^ bytes[index]) & 255] ^ crc >>> 8;
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function flashStatus(message) {
    if (!els.status) {
      return;
    }
    var nextMessage = String(message || "").trim();
    var fallback = isDirty ? "Unsaved changes" : "Saved";
    els.status.textContent = nextMessage || fallback;
    window.clearTimeout(flashStatus.timer);
    flashStatus.timer = window.setTimeout(function () {
      if (els.status) {
        els.status.textContent = isDirty ? "Unsaved changes" : "Saved";
      }
    }, 2200);
  }

  function logoAssetSrc() {
    try {
      return new URL("MA Logo.jpg", window.location.href).href;
    } catch (error) {
      return "MA Logo.jpg";
    }
  }

  function buildWordHtmlBlob() {
    var html = '<!doctype html><html><head><meta charset="utf-8"><title>' + escapeHtml(proposal.project.projectName) + '</title><style>' +
      wordExportStyles() +
      '</style></head><body>' + renderProposalPages() + '</body></html>';
    return new Blob([html], { type: "application/msword" });
  }

  function photoSizingLayoutCss() {
    return ".northline-landscape-photo,.structured-landscape-photo,.studio-landscape-photo{height:var(--photo-frame-height,3.12in)!important;}\n.northline-landscape-flow-column{bottom:calc(var(--photo-frame-height,3.12in) + .3in);}\n.northline-landscape-content{bottom:calc(var(--photo-frame-height,3.12in) + .3in);}\n.structured-page-landscape-photo .structured-landscape-text-column{bottom:calc(var(--photo-frame-height,3.12in) + .36in);}\n.studio-landscape-copy-column{height:auto;bottom:calc(var(--photo-frame-height,3.12in) + .36in);}\n.structured-page-landscape-photo .proposal-footer,.studio-landscape-page .studio-page-footer,.studio-schedule-page .studio-page-footer,.studio-fee-page .studio-page-footer{bottom:calc(var(--photo-frame-height,3.12in) + .22in)!important;}\n.structured-page-landscape-photo .structured-landscape-text-column{left:.54in;right:.54in;width:auto;display:flex;flex-direction:column;overflow:hidden;}\n.structured-page-landscape-photo .structured-page-header{flex:0 0 auto;}\n.structured-page-landscape-photo .structured-landscape-copy{flex:1 1 auto;min-height:0;}\n";
  }

  function wordExportStyles() {
    return [
      '@font-face{font-family:"Source Sans 3";src:url("' + new URL("assets/fonts/SourceSans3-Regular.otf", window.location.href).href + '") format("opentype");font-weight:400;}',
      '@font-face{font-family:"Source Sans 3";src:url("' + new URL("assets/fonts/SourceSans3-Bold.otf", window.location.href).href + '") format("opentype");font-weight:700;}',
      '@page{size:8.5in 11in;margin:0;}',
      'html,body{margin:0;padding:0;background:#fff;color:#151515;}',
      'body{font-family:"Century Gothic","Avenir Next",Arial,sans-serif;}',
      '.proposal-page{width:8.5in;height:11in;page-break-after:always;position:relative;background:#fff;overflow:hidden;}',
      '.custom-cover-page,.custom-compensation-page{padding:0;overflow:hidden;background:#fff;}',
      '.custom-cover-image,.custom-compensation-image{display:block;width:100%;height:100%;object-fit:contain;background:#fff;}',
      '.modern-page{width:11in;height:8.5in;background:#f8f6f1;color:#242323;}',
      '.modern-inner{position:relative;width:11in;height:8.5in;padding:.38in .44in .42in;}',
      '.modern-page-title{position:absolute;left:.44in;top:1.14in;width:1.88in;}',
      '.modern-page-title.modern-title-no-marker{top:.38in;}',
      '.modern-page-number{display:block;position:absolute;left:0;top:-.9in;font-family:Georgia,"Times New Roman",serif;font-size:74px;font-weight:400;line-height:1;color:#7d756b;}',
      '.modern-title-rule,.modern-rule{width:.74in;height:1px;background:#9d9387;margin:.13in 0 .2in;}',
      '.modern-page-title h2,.modern-cover-copy h1{font-family:"Arial Narrow",Impact,Arial,sans-serif;text-transform:uppercase;line-height:.9;letter-spacing:0;color:#242323;margin:0;}',
      '.modern-page-title h2{font-size:32px;max-width:1.8in;}',
      '.modern-page-title.modern-title-long h2{font-size:27px;line-height:.92;}',
      '.modern-page-title.modern-title-xlong h2{font-size:23px;line-height:.95;}',
      '.modern-page-title p{font-size:9px;line-height:1.35;color:#6f6a61;margin:.18in 0 0;}',
      '.modern-content{position:absolute;left:2.65in;top:.56in;width:4.42in;height:6.82in;column-count:2;column-gap:.28in;overflow:hidden;}',
      '.modern-content .doc-copy{font-size:11.4px;line-height:1.32;text-align:justify;text-align-last:left;}',
      '.modern-content-model{column-count:1;column-gap:0;top:.56in;height:6.82in;}',
      '.modern-content-model .doc-copy{font-size:10.8px;line-height:1.28;}',
      '.modern-page[data-section="Compensation"] .modern-content-model{width:7.9in;column-count:1;}',
      '.modern-page[data-section="Compensation"] .modern-visuals{display:none;}',
      '.modern-page[data-section="Compensation"] .doc-copy{width:auto;font-size:10px;line-height:1.2;}',
      '.modern-page[data-section="Compensation"] .doc-copy>p{margin-bottom:.06in;}',
      '.modern-page[data-section="Compensation"] .fee-table{font-size:8.8px;margin-bottom:.07in;}',
      '.modern-page[data-section="Compensation"] .fee-table td,.modern-page[data-section="Compensation"] .fee-table th{padding:3px 4px;}',
      '.modern-page[data-section="Compensation"] .fee-chart{padding:8px;margin:.025in 0 .07in;}',
      '.modern-page[data-section="Compensation"] .fee-chart-row{margin-bottom:.04in;}',
      '.modern-page[data-section="Compensation"] .fee-chart-meta span,.modern-page[data-section="Compensation"] .fee-chart-meta strong,.modern-page[data-section="Compensation"] .fee-chart-total span,.modern-page[data-section="Compensation"] .fee-chart-total strong{font-size:8.8px;}',
      '.modern-page[data-section="Compensation"] .fee-chart-bar{height:4px;margin-top:2px;}',
      '.modern-page[data-section="Compensation"] .fee-chart-total{padding-top:5px;}',
      '.modern-page[data-section="Compensation"] .compensation-fee-notes{margin-top:.06in;font-size:8.8px;line-height:1.18;}',
      '.modern-page[data-section="Compensation"] .doc-copy .compensation-fee-notes ol{columns:2;column-gap:.3in;margin-bottom:.045in;}',
      '.modern-page[data-section="Compensation"] .doc-copy .compensation-fee-notes li{margin-bottom:.024in;}',
      '.modern-content h3{font-size:13px;line-height:1;text-transform:uppercase;margin:0 0 .08in;}',
      '.modern-section-block{break-inside:avoid;margin:0 0 .16in;}',
      '.modern-visuals{position:absolute;right:.44in;top:.58in;width:3.12in;height:6.76in;}',
      '.modern-photo{margin:0;overflow:hidden;background:#e8e1d7;}',
      '.modern-photo-main{height:4.55in;}',
      '.modern-footer{position:absolute;left:.44in;right:.44in;bottom:.2in;display:flex;justify-content:space-between;color:#9b958c;font-size:8px;letter-spacing:.08em;text-transform:uppercase;}',
      '.modern-cover .modern-inner{padding:0;overflow:hidden;}',
      '.modern-cover-project,.modern-cover-date,.modern-cover-submitted,.modern-cover-discipline{position:absolute;z-index:2;color:#1d1d1b;font-size:9px;font-weight:800;line-height:1.12;letter-spacing:.02em;text-transform:uppercase;}',
      '.modern-cover-project{left:.52in;top:.42in;max-width:2in;}',
      '.modern-cover-date{right:.56in;top:.42in;text-align:right;}',
      '.modern-cover-copy{position:absolute;left:.52in;right:.56in;top:2.78in;width:auto;z-index:2;}',
      '.modern-cover-copy h1{font-family:Arial,Helvetica,sans-serif;font-size:96px;font-weight:900;line-height:.86;letter-spacing:0;text-transform:uppercase;color:#080808;margin:0;}',
      '.modern-kicker{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.03em;color:#1d1d1b;margin:.06in 0 0;}',
      '.modern-cover .modern-rule{width:2.8in;height:1px;background:rgba(29,29,27,.28);margin:.13in 0 0;}',
      '.modern-cover-submitted,.modern-cover-discipline{bottom:.5in;}',
      '.modern-cover-submitted{left:.52in;}',
      '.modern-cover-discipline{left:2.2in;}',
      '.modern-cover-submitted span,.modern-cover-discipline span{display:block;margin-bottom:.04in;color:#4f4d48;font-size:7px;font-weight:700;}',
      '.modern-cover-submitted strong,.modern-cover-discipline strong{display:block;max-width:1.72in;font-size:8px;font-weight:900;}',
      '.modern-cover-photo{position:absolute;inset:0;width:100%;height:100%;z-index:1;}',
      '.northline-page{width:8.5in;height:11in;background:#f8f5ef;color:#1d1d1b;}',
      '.northline-cover{background:#fff;}',
      '.northline-inner{position:relative;width:8.5in;height:11in;padding:.62in .54in .52in;}',
      '.northline-cover .northline-inner,.northline-toc-page .northline-inner{padding:0;}',
      '.northline-cover .northline-inner{background:linear-gradient(180deg,#fff 0,#fff 8.75in,#f6f2eb 8.75in,#f6f2eb 100%);}',
      '.northline-brand{position:absolute;left:.54in;top:.56in;z-index:2;font-size:8px;font-weight:900;line-height:1.1;letter-spacing:.06em;text-transform:uppercase;}',
      '.northline-cover-title{position:absolute;left:.54in;right:.54in;top:.66in;z-index:2;}',
      '.northline-cover-title h1{font-family:"Bahnschrift Condensed","Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Impact,Arial,sans-serif;font-weight:900;line-height:.88;letter-spacing:0;text-transform:uppercase;color:#161616;margin:0;}',
      '.northline-cover-title h1{max-width:100%;white-space:nowrap;font-family:"Bahnschrift Condensed","Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Impact,Arial,sans-serif;font-size:52px;line-height:.9;font-stretch:condensed;letter-spacing:-.015em;}',
      '.northline-cover-title p{margin:.1in 0 0;font-size:21.6px;line-height:1.1;font-weight:800;letter-spacing:.045em;text-transform:uppercase;}',
      '.northline-cover-image{position:absolute;left:0;right:0;top:3.38in;bottom:2.1in;height:auto;margin:0;z-index:1;border:0;}',
      '.northline-cover-footer{position:absolute;left:.54in;right:.54in;bottom:.64in;z-index:3;display:block;border-top:0;padding-top:0;font-size:8px;text-transform:uppercase;}',
      '.northline-cover-project{width:calc(100% - 1.36in);}',
      '.northline-cover-project strong,.northline-cover-brand strong{display:block;margin-bottom:.08in;color:#1d1d1b;font-size:15px;font-weight:900;line-height:1;}',
      '.northline-cover-project span,.northline-cover-brand span{display:block;color:#3d3933;font-size:6.2px;font-weight:800;letter-spacing:.04em;}',
      '.northline-cover-project span{margin-top:.045in;border-bottom:1px solid #bdb6aa;padding-bottom:.035in;}',
      '.northline-client-logos{display:flex;align-items:flex-start;gap:.12in;margin:.02in 0 .08in;min-height:.42in;}',
      '.northline-client-logo{max-width:1.05in;width:auto;height:.42in;object-fit:contain;object-position:left top;display:block;}',
      '.northline-cover-brand{position:absolute;top:0;right:0;bottom:0;width:1.18in;text-align:left;}',
      '.northline-cover-brand-logo{max-width:1.18in;width:100%;height:100%;object-fit:contain;object-position:right top;display:block;margin-top:0;}',
      '.northline-toc-page{background:#151515;color:#fff;}',
      '.northline-toc-photo{position:absolute;inset:0;width:100%;height:100%;margin:0;border:0;overflow:hidden;background:#d9d3c8;}',
      '.northline-toc-overlay{position:absolute;left:.58in;top:.58in;width:2.18in;max-height:9.55in;padding:.22in .2in .26in;background:rgba(18,18,17,.48);color:#fff;z-index:2;}',
      '.northline-toc-overlay h2{margin:0 0 .3in;font-family:"Century Gothic","Avenir Next","Montserrat",Arial,sans-serif;font-size:30px;line-height:.9;font-weight:900;text-transform:uppercase;letter-spacing:0;}',
      '.northline-toc-list{display:grid;gap:.13in;}',
      '.northline-toc-row{display:grid;grid-template-columns:.34in 1fr;gap:.12in;}',
      '.northline-toc-row span{font-size:13px;font-weight:900;line-height:1;}',
      '.northline-toc-row strong{display:block;font-size:8.6px;line-height:1.16;font-weight:900;letter-spacing:.06em;text-transform:uppercase;}',
      '.northline-toc-footer{position:absolute;left:.58in;bottom:.34in;z-index:2;color:rgba(255,255,255,.92);font-size:7.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}',
      '.northline-number{position:absolute;left:.54in;top:.52in;display:block;color:#7b746a;font-family:"Bahnschrift Light","Bahnschrift SemiCondensed","Arial Narrow",Arial,sans-serif;font-size:36px;font-weight:400;line-height:1;}',
      '.northline-title{position:absolute;left:.54in;top:.94in;width:2.55in;z-index:2;}',
      '.northline-title h2{margin:0;color:#161616;font-family:"Bahnschrift Condensed","Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Impact,Arial,sans-serif;font-size:48px;font-weight:900;line-height:.92;padding-top:.035in;letter-spacing:-.01em;text-transform:uppercase;}',
      '.northline-title p{margin:.28in 0 0;max-width:1.9in;color:#4d4943;font-size:10px;line-height:1.45;}',
      '.northline-title:after{content:"";display:block;width:2.1in;height:1px;margin-top:.32in;background:#cfc7b9;}',
      '.northline-flow-column{position:absolute;left:.54in;top:.94in;bottom:.6in;width:3.22in;display:flex;flex-direction:column;overflow:hidden;z-index:2;}',
      '.northline-flow-column>.northline-title{position:static!important;flex:0 0 auto;}',
      '.northline-flow-column>.northline-content,.northline-flow-column>.northline-qualification-list,.northline-flow-column>.northline-team-list{position:static!important;top:auto!important;left:auto!important;flex:1 1 auto;min-height:0;height:auto!important;margin-top:.3in;overflow:hidden;}',
      '.northline-flow-column>.northline-content{width:3.1in;}',
      '.northline-landscape-flow-column{right:.54in;bottom:3.42in;width:auto;}',
      '.northline-landscape-flow-column>.northline-content{width:100%;}',
      '.northline-qualifications-flow-column{top:1.42in;}',
      '.northline-qualifications-flow-column>.northline-qualification-list{position:absolute!important;top:4.08in!important;left:.1in!important;transform:translateY(-50%);width:2.7in;margin:0;overflow:visible;}',
      '.northline-team-flow-column>.northline-team-list{width:3.22in;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-flow-column{top:1.14in;}',
      '.northline-content{position:absolute;left:.54in;top:2.96in;width:3.1in;height:7in;overflow:hidden;}',
      '.northline-landscape-page .northline-title{width:3.2in;}',
      '.northline-landscape-content{position:absolute;left:.54in;top:2.84in;width:7.42in;bottom:3.42in;height:auto;}',
      '.northline-landscape-photo{position:absolute!important;inset:auto 0 0 0!important;width:auto;height:3.12in!important;margin:0!important;}',
      '.northline-landscape-footer{bottom:3.34in!important;width:7.42in;}',
      '.northline-section-block{margin:0 0 .18in;}',
      '.northline-section-block h3{font-family:"Bahnschrift Condensed","Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Impact,Arial,sans-serif;font-size:17px;line-height:.95;text-transform:uppercase;margin:0 0 .08in;color:#1d1d1b;}',
      '.northline-team-title{width:2.45in;}',
      '.northline-team-title p{max-width:1.8in;}',
      '.northline-team-title:after{width:1.7in;}',
      '.northline-team-list{position:absolute;left:.54in;top:2.9in;width:3.22in;}',
      '.northline-team-row{display:grid;grid-template-columns:.88in 1fr;gap:.16in;align-items:start;padding:.13in 0;border-top:1px solid #d8d0c2;}',
      '.northline-team-row:first-child{padding-top:0;border-top:0;}',
      '.northline-team-person-photo{width:.82in;height:.82in;object-fit:cover;display:block;border-radius:0;border:1px solid #ddd4c6;background:#ebe4d8;}',
      '.team-headshot-circle{border-radius:999px!important;overflow:hidden;}',
      '.northline-team-placeholder{display:grid;place-items:center;color:#1d1d1b;font-size:8px;font-weight:900;letter-spacing:.08em;}',
      '.northline-team-person-copy strong{display:block;font-size:9.4px;line-height:1.18;text-transform:uppercase;}',
      '.northline-team-person-copy span{display:block;margin-top:.02in;color:#5e5a53;font-size:7px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}',
      '.northline-team-person-copy p{display:none;}',
      '.northline-content .doc-copy{color:#3d3933;font-size:11.4px;line-height:1.32;text-align:justify;text-align-last:left;}',
      '.northline-content .doc-copy p{margin:0 0 .1in;}',
      '.northline-content .doc-copy ul,.northline-content .doc-copy ol{margin:0 0 .12in .18in;padding-left:.12in;}',
      '.northline-content .doc-copy li{margin-bottom:.04in;}',
      '.northline-content .schedule-table,.northline-content .fee-table{font-size:8px;margin:.02in 0 .14in;}',
      '.northline-content .schedule-table th,.northline-content .schedule-table td,.northline-content .fee-table th,.northline-content .fee-table td{border-bottom-color:#d8d0c2;padding:5px 3px;}',
      '.compensation-consultant-note{margin:.04in 0 .16in;font-weight:800;text-align:center;text-align-last:center;text-transform:uppercase;}',
      '.compensation-fee-notes{margin-top:.1in;text-align:left;text-align-last:left;}',
      '.doc-copy .compensation-fee-notes-title{margin:0 0 .05in;font-weight:800;}',
      '.doc-copy .compensation-fee-notes ol{margin:0 0 .07in .2in;padding-left:.1in;}',
      '.doc-copy .compensation-fee-notes li{margin-bottom:.035in;padding-left:.035in;}',
      '.doc-copy .compensation-fee-notes-reference{margin:0;}',
      '.structured-page[data-section="Compensation"] .doc-copy{font-size:10px;line-height:1.22;}',
      '.structured-page[data-section="Compensation"] .doc-copy>p{margin-bottom:.07in;}',
      '.structured-page[data-section="Compensation"] .fee-table{font-size:9px;margin-bottom:.08in;}',
      '.structured-page[data-section="Compensation"] .fee-table td,.structured-page[data-section="Compensation"] .fee-table th{padding:3px 4px;}',
      '.structured-page[data-section="Compensation"] .fee-chart{padding:8px;margin:.03in 0 .08in;}',
      '.structured-page[data-section="Compensation"] .fee-chart-row{margin-bottom:.055in;}',
      '.structured-page[data-section="Compensation"] .fee-chart-meta span,.structured-page[data-section="Compensation"] .fee-chart-meta strong,.structured-page[data-section="Compensation"] .fee-chart-total span,.structured-page[data-section="Compensation"] .fee-chart-total strong{font-size:9px;}',
      '.structured-page[data-section="Compensation"] .fee-chart-bar{height:5px;margin-top:3px;}',
      '.structured-page[data-section="Compensation"] .fee-chart-total{padding-top:6px;}',
      '.structured-page[data-section="Compensation"] .compensation-fee-notes{margin-top:.07in;font-size:9px;line-height:1.2;}',
      '.structured-page[data-section="Compensation"] .doc-copy .compensation-fee-notes-title{margin-bottom:.04in;font-size:9.6px;}',
      '.structured-page[data-section="Compensation"] .doc-copy .compensation-fee-notes ol{margin:0 0 .055in .19in;padding-left:.09in;}',
      '.structured-page[data-section="Compensation"] .doc-copy .compensation-fee-notes li{margin-bottom:.028in;padding-left:.03in;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-title{top:1.14in;width:3.15in;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-title h2{font-size:28px;line-height:.94;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-title p{margin-top:.16in;max-width:2.55in;font-size:8.2px;line-height:1.28;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-title:after{margin-top:.18in;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .northline-content-model{top:3.05in;height:6.86in;}',
      '.northline-page[data-section="Concept Design"] .northline-content-model{top:3.08in;}',
      '.northline-page[data-section="Compensation"] .northline-content-model{top:2.62in;}',
      '.northline-page[data-section="Compensation"] .doc-copy{font-size:9.2px;line-height:1.21;}',
      '.northline-page[data-section="Compensation"] .doc-copy>p{margin-bottom:.065in;}',
      '.northline-page[data-section="Compensation"] .fee-table{font-size:8.6px;margin:0 0 .07in;}',
      '.northline-page[data-section="Compensation"] .fee-table td,.northline-page[data-section="Compensation"] .fee-table th{padding:3px;}',
      '.northline-page[data-section="Compensation"] .fee-chart{padding:8px;margin:.03in 0 .08in;}',
      '.northline-page[data-section="Compensation"] .fee-chart-row{margin-bottom:.055in;}',
      '.northline-page[data-section="Compensation"] .fee-chart-meta span,.northline-page[data-section="Compensation"] .fee-chart-meta strong,.northline-page[data-section="Compensation"] .fee-chart-total span,.northline-page[data-section="Compensation"] .fee-chart-total strong{font-size:9px;}',
      '.northline-page[data-section="Compensation"] .fee-chart-bar{height:5px;margin-top:3px;}',
      '.northline-page[data-section="Compensation"] .fee-chart-total{padding-top:6px;}',
      '.northline-page[data-section="Compensation"] .compensation-fee-notes{margin-top:.07in;font-size:8.5px;line-height:1.19;}',
      '.northline-page[data-section="Compensation"] .doc-copy .compensation-fee-notes-title{margin-bottom:.04in;font-size:9.2px;}',
      '.northline-page[data-section="Compensation"] .doc-copy .compensation-fee-notes ol{margin:0 0 .055in .18in;padding-left:.08in;}',
      '.northline-page[data-section="Compensation"] .doc-copy .compensation-fee-notes li{margin-bottom:.026in;padding-left:.03in;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .doc-copy{font-size:10.8px;line-height:1.3;}',
      '.northline-page[data-section="Bidding and Construction Administration"] .doc-copy p{margin-bottom:.085in;}',
      '.bid-ca-copy h3{margin:.02in 0 .055in;color:#1d1d1b;font-size:11.2px;line-height:1.05;font-weight:900;letter-spacing:.04em;text-transform:uppercase;}',
      '.bid-ca-copy h3:not(:first-child){margin-top:.15in;}',
      '.northline-page[data-section="Process / Scope"] .northline-content-model{top:2.62in;height:7.78in;}',
      '.northline-page[data-section="Process / Scope"] .doc-copy{font-size:10.8px;line-height:1.25;}',
      '.northline-page[data-section="Process / Scope"] .doc-copy p{margin-bottom:.06in;}',
      '.northline-page[data-section="Process / Scope"] .doc-copy li{margin-bottom:.028in;}',
      '.northline-page[data-section="Process / Scope"] .process-single-page-copy h3{margin:.1in 0 .085in;font-size:11.2px;line-height:1.05;font-weight:900;}',
      '.northline-qualifications-title{top:1.42in;width:3.18in;}',
      '.northline-qualification-list{position:absolute;left:.64in;top:3.34in;width:2.7in;display:grid;gap:0;padding-bottom:.24in;border-bottom:1px solid #cfc7b9;}',
      '.northline-qualification-item{padding:.12in 0 .14in;border-top:1px solid #cfc7b9;text-align:left;}',
      '.northline-qualification-item strong{display:block;color:#1d1d1b;font-family:"Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Arial,sans-serif;font-size:36px;line-height:.95;font-weight:700;}',
      '.northline-qualification-item span{display:block;margin-top:.05in;color:#4d4943;font-family:"Bahnschrift SemiCondensed",Bahnschrift,"Arial Narrow",Arial,sans-serif;font-size:8.8px;font-weight:700;letter-spacing:.06em;line-height:1.15;text-transform:uppercase;}',
      '.northline-image-rail{position:absolute;right:0;top:0;width:3.55in;height:11in;overflow:hidden;}',
      '.northline-team-hero{right:0;top:0;width:3.55in;height:11in;}',
      '.northline-photo{margin:0;overflow:hidden;background:#e3ddd2;}',
      '.northline-photo-main{position:absolute;inset:0;width:100%;height:100%;}',
      '.northline-footer{position:absolute;left:.54in;bottom:.32in;width:3.05in;color:#8a8378;font-size:7.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;}',
      '.proposal-page:last-child{page-break-after:auto;}',
      '.page-inner{width:8.5in;height:11in;position:relative;}',
      '.body-page-number{position:absolute;top:.38in;right:.64in;font-family:Georgia,"Times New Roman",serif;font-size:54px;font-weight:400;line-height:1;color:#7d756b;}',
      '.photo-rail{position:absolute;left:.92in;top:1.1in;width:2.65in;height:8.72in;}',
      '.is-intro-page .photo-rail{top:3.48in;}',
      '.photo-slot{margin:0;width:2.65in;overflow:hidden;background:#f1eee8;}',
      '.photo-slot-top{height:3.4in;}',
      '.photo-slot-bottom{height:3.74in;margin-top:1.58in;}',
      '.is-intro-page .photo-slot-top{height:1.96in;}',
      '.is-intro-page .photo-slot-bottom{height:3.94in;margin-top:.28in;}',
      '.page-photo{width:100%;height:100%;object-fit:cover;display:block;}',
      '.photo-slot-tools,.photo-frame-resize-handle,.text-frame-resize-handle{display:none!important;}',
      '.photo-placeholder{background:#e7e1d7;color:#8c867c;text-align:center;font-weight:bold;font-size:12px;letter-spacing:.08em;text-transform:uppercase;}',
      '.photo-placeholder span{display:block;margin-top:45%;}',
      '.page-content{position:absolute;left:4in;top:1.1in;width:3.86in;height:9.1in;overflow:hidden;}',
      '.is-intro-page .page-content{top:1.15in;}',
      '.proposal-logo{width:1.16in;height:1.16in;object-fit:cover;display:block;margin:0 auto .68in;}',
      '.inline-section-title{font-size:15.5px;font-weight:800;line-height:1.08;margin:0 0 .04in;color:#111;}',
      '.proposal-section-block{margin:0 0 .14in;}',
      '.proposal-section-block:last-child{margin-bottom:0;}',
      '.doc-copy{font-family:"Source Sans 3",Calibri,Arial,sans-serif;font-weight:400;font-size:16.75px;line-height:1.12;text-align:justify;text-align-last:left;letter-spacing:0;font-variant-ligatures:none;text-rendering:auto;}',
      '.doc-copy p{margin:0 0 .12in;}',
      '.doc-copy ul,.doc-copy ol{margin:0 0 .15in .34in;padding-left:.18in;}',
      '.doc-copy li{margin:0 0 .05in;padding-left:.08in;}',
      '.doc-copy strong{font-weight:800;color:#111;}',
      '.doc-copy .paragraph-heading{margin:.13in 0 .055in;color:#111;font-weight:900;font-size:1.02em;line-height:1.08;text-align:left;}',
      '.doc-copy .project-summary-fixed-title{margin:.13in 0 .055in;color:#111;font-weight:800;line-height:1.08;text-align:left;}',
      '.proposal-footer{position:absolute;left:4in;right:.64in;bottom:.42in;color:#b5b2ae;font-size:10.5px;line-height:1.35;letter-spacing:.18em;white-space:nowrap;}',
      '.structured-cover-inner,.structured-page-inner{width:8.5in;height:11in;position:relative;}',
      '.structured-cover-inner{padding:.78in .78in .56in;}',
      '.structured-cover-title h1{font-size:74px;line-height:.88;font-weight:900;letter-spacing:0;text-transform:uppercase;margin:0;}',
      '.structured-cover-subtitle{margin:.12in 0 0;color:#6f6a61;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;}',
      '.structured-cover-photo-wrap{position:absolute;left:0;right:0;top:4.04in;bottom:.7in;}',
      '.structured-cover-photo,.studio-toc-photo{width:100%;height:100%;margin:0;overflow:hidden;background:#ece8e0;}',
      '.structured-cover-footer{left:.78in;right:.78in;bottom:.34in;}',
      '.structured-page-landscape-photo .structured-landscape-text-column{position:absolute;left:var(--pdf-text-left);right:var(--pdf-text-left);top:.92in;width:calc(8.5in - (var(--pdf-text-left) * 2));bottom:3.48in;height:auto;}',
      '.structured-page-landscape-photo .structured-landscape-copy{height:auto;}',
      '.structured-landscape-photo{position:absolute!important;inset:auto 0 0 0!important;width:auto;height:3.12in!important;margin:0!important;overflow:hidden!important;background:#ece8e0;}',
      '.structured-page-landscape-photo .proposal-footer{bottom:3.34in!important;}',
      '.proposal-page-subtitle{margin:.08in 0 0;color:#6f6a61;font-size:11px;line-height:1.2;font-weight:400;letter-spacing:0;text-transform:none;}',
      '.structured-page-header .proposal-page-subtitle + .structured-page-rule{margin-top:.12in;}',
      '.structured-page[data-section="Attachment A"] .structured-page-copy{height:8.46in;}',
      '.modern-page[data-section="Attachment A"] .modern-page-title{width:2.18in;}',
      '.modern-page[data-section="Attachment A"] .modern-page-title h2{max-width:2.16in;font-size:29px;}',
      '.modern-page[data-section="Attachment A"] .modern-page-title p{font-size:14px;line-height:1.2;}',
      '.northline-page[data-section="Attachment A"] .northline-title{width:3.12in;}',
      '.northline-page[data-section="Attachment A"] .northline-title p{margin-top:.16in;font-size:24px;line-height:1;}',
      '.structured-page-studio[data-section="Attachment A"] .studio-header-block{width:2.78in;}',
      '.structured-page-studio[data-section="Attachment A"] .studio-header-block h2{font-size:28px;line-height:.92;}',
      '.structured-page-studio[data-section="Attachment A"] .studio-header-block p{font-size:14px;line-height:1.2;}',
      '.structured-page[data-section="Attachment A"] .proposal-page-subtitle{font-size:10px;}',
      '.attachment-page-subtitle{font-size:10px;}',
      '.attachment-theme-studio .attachment-page-subtitle{font-size:15.5px;}',
      '.attachment-theme-modern .attachment-page-subtitle{font-size:14px;}',
      '.attachment-theme-northline .attachment-page-subtitle{font-size:17px;}',
      '.structured-page[data-section="Attachment A"] .doc-copy{font-size:11.2px;line-height:1.24;}',
      '.structured-page[data-section="Attachment A"] .doc-copy p{margin-bottom:.09in;}',
      '.structured-page[data-section="Attachment A"] .doc-copy ul,.structured-page[data-section="Attachment A"] .doc-copy ol{margin-bottom:.1in;}',
      '.structured-page[data-section="Attachment A"] .doc-copy li{margin-bottom:.025in;}',
      '.general-conditions-rate-chart{width:2.72in;margin:.02in 0 .12in .34in;display:grid;gap:.035in;}',
      '.general-conditions-rate-row{display:grid;grid-template-columns:minmax(0,1fr) .8in;gap:.16in;align-items:baseline;font-size:11.2px;line-height:1.15;}',
      '.general-conditions-rate-row span{color:#4f4a43;}',
      '.general-conditions-rate-row strong{color:#242323;font-weight:400;}',
      '.studio-toc-photo{position:absolute;inset:0;border:0;}',
      '.studio-toc-overlay{position:absolute;left:.58in;top:.58in;width:2.18in;padding:.22in .2in .26in;background:rgba(18,18,17,.48);color:white;}',
      '.studio-toc-overlay h2{font-size:30px;line-height:.9;font-weight:900;text-transform:uppercase;margin:0 0 .3in;}',
      '.studio-toc-list{display:grid;gap:.13in;}',
      '.studio-toc-row{display:grid;grid-template-columns:.34in 1fr;gap:.12in;}',
      '.studio-toc-row span{font-size:13px;font-weight:900;line-height:1;}',
      '.studio-toc-row strong{font-size:8.6px;line-height:1.16;font-weight:900;letter-spacing:.06em;text-transform:uppercase;}',
      '.structured-page[data-section="Process / Scope"] .doc-copy{font-size:11.6px;line-height:1.22;}',
      '.structured-page .doc-copy{text-align:justify;text-align-last:left;}',
      '.process-single-page-copy h3{font-size:12px;line-height:1.05;font-weight:900;text-transform:uppercase;margin:.14in 0 .085in;}',
      '.studio-landscape-page .studio-page-inner{padding:0;}',
      '.studio-landscape-copy-column{position:absolute;left:.72in;right:.72in;top:2.08in;height:3.86in;overflow:hidden;}',
      '.studio-landscape-photo{position:absolute;left:0;right:0;bottom:0;height:3.12in;margin:0;overflow:hidden;background:#ede7dc;}',
      '.studio-landscape-page .studio-page-footer{bottom:3.34in;}',
      '.studio-schedule-page .studio-page-inner{padding:0;}',
      '.studio-schedule-page .studio-header-block{left:.72in;top:.96in;width:2.95in;}',
      '.studio-schedule-copy-landscape{position:absolute;left:.72in;right:.72in;top:2.08in;bottom:3.52in;height:auto;}',
      '.studio-schedule-landscape-photo{position:absolute!important;inset:auto 0 0 0!important;width:auto;height:3.2in!important;margin:0!important;}',
      '.studio-schedule-page .studio-page-footer{bottom:3.42in;}',
      '.studio-fee-page .studio-page-inner{padding:0;}',
      '.studio-fee-page .studio-header-block{left:.72in;top:.96in;width:2.95in;}',
      '.studio-fee-copy-landscape{position:absolute;left:.72in;right:.72in;width:auto;top:2.08in;bottom:3.52in;height:auto;}',
      '.studio-fee-landscape-photo{position:absolute!important;inset:auto 0 0 0!important;width:auto;height:3.2in!important;margin:0!important;}',
      '.studio-fee-page .studio-page-footer{bottom:3.42in;}',
      '.structured-team-rail{display:grid;gap:.16in;}',
      '.structured-team-rail.team-count-3,.structured-team-rail.team-count-4{grid-template-columns:repeat(2,1fr);grid-auto-rows:1fr;}',
      'table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:.24in;}',
      'td,th{border-bottom:1px solid #ddd7cd;padding:6px 5px;text-align:left;vertical-align:top;}',
      '.attachment-proposal-page{background:#fff;}',
      '.attachment-page-inner{position:relative;width:8.5in;height:11in;background:#fff;}',
      '.attachment-page-header{position:absolute;left:.64in;right:.64in;top:.5in;height:auto;}',
      '.attachment-page-header h2{margin:0;padding-right:.72in;font-size:20px;font-weight:800;line-height:1;text-transform:uppercase;}',
      '.attachment-page-subtitle{margin:.08in 0 0;color:#6f6a61;font-family:"Century Gothic","Avenir Next","Montserrat",Arial,sans-serif;font-size:10px;font-weight:400;line-height:1.2;}',
      '.attachment-page-number{position:absolute;right:.64in;top:.48in;color:#8a8378;font-size:12px;font-weight:800;}',
      '.attachment-page-content{position:absolute;left:.64in;right:.64in;top:1.26in;bottom:.75in;overflow:hidden;background:#fff;}',
      '.attachment-page-image{width:100%;height:100%;display:block;object-fit:contain;object-position:center;background:#fff;}',
      '.attachment-proposal-page .attachment-page-footer{left:.64in;right:.64in;bottom:.32in;width:auto;}',
      '.attachment-theme-northline,.attachment-theme-northline .attachment-page-inner,.attachment-theme-northline .attachment-page-content,.attachment-theme-northline .attachment-page-image{background:#f8f5ef;}',
      '.attachment-theme-northline .attachment-page-header h2{font-family:"Arial Narrow",Impact,Arial,sans-serif;font-size:34px;font-weight:900;line-height:.9;}',
      '.attachment-theme-northline .attachment-page-subtitle{font-size:17px;font-weight:400;line-height:1.2;}',
      '.attachment-theme-studio .attachment-page-subtitle{font-size:15.5px;}',
      '.attachment-theme-modern .attachment-page-inner{width:11in;height:8.5in;background:#f8f6f1;}',
      '.attachment-theme-modern .attachment-page-header{left:.44in;right:.44in;top:.38in;height:.45in;}',
      '.attachment-theme-modern .attachment-page-header h2{font-family:"Arial Narrow",Impact,Arial,sans-serif;font-size:28px;line-height:.92;}',
      '.attachment-theme-modern .attachment-page-subtitle{font-size:14px;}',
      '.attachment-theme-modern .attachment-page-number{right:.44in;top:.38in;}',
      '.attachment-theme-modern .attachment-page-content{left:.44in;right:.44in;top:1.08in;bottom:.62in;background:#f8f6f1;}',
      '.attachment-theme-modern .attachment-page-image{background:#f8f6f1;}',
      '.attachment-theme-modern .attachment-page-footer{left:.44in;right:.44in;bottom:.26in;}',
      '.attachment-placeholder{border:1px solid #d9d5ce;background:#fbfaf8;color:#6f6a61;padding:14px;}',
      '.attachment-placeholder-subtitle{display:block;margin-top:4px;font-weight:400;}',
      photoSizingLayoutCss()
    ].join("");
  }

  var legacySectionDefinitions = sectionDefinitions.slice();

  function configureStructuredProposalModel() {
    themes = [
      {
        id: "maOg",
        label: "M+A OG",
        note: "Portrait proposal pages with dedicated headers and PDF-style text/photo balance."
      },
      {
        id: "studioPortrait",
        label: "Studio Portrait",
        note: "A softer portrait variation with the same proposal structure."
      },
      {
        id: "modernLandscape",
        label: "Modern Landscape",
        note: "A wide, editorial layout inspired by architectural presentation boards."
      },
      {
        id: "northlinePortrait",
        label: "Modern Portrait",
        note: "A tall, image-forward proposal style with bold condensed titles and boxed section numbers."
      }
    ];

    sectionDefinitions = [
      { id: "projectSummary", title: "Project Summary", source: "written", photoType: "context", generator: generateProjectSummaryText },
      { id: "ourQualifications", title: "Our Qualifications", source: "editable-data", photoType: "design", generator: generateQualificationsText },
      { id: "ourTeam", title: "Our Team", source: "editable-data", photoType: "team", generator: generateOurTeamText },
      { id: "process", title: "Process / Scope", source: "mixed", photoType: "design", generator: generateProcessText },
      { id: "conceptDesignPage", title: "Concept Design", source: "pdf", photoType: "concept", generator: function () { return legacySectionText("conceptDesign"); } },
      { id: "schematicDesignPage", title: "Schematic Design", source: "pdf", photoType: "schematic", generator: function () { return legacySectionText("schematicDesign"); } },
      { id: "designDevelopmentPage", title: "Design Development", source: "pdf", photoType: "design", generator: function () { return legacySectionText("designDevelopment"); } },
      { id: "constructionDocumentsPage", title: "Construction Documents", source: "pdf", photoType: "documents", generator: function () { return legacySectionText("constructionDocuments"); } },
      { id: "biddingConstructionAdministration", title: "Bidding and Construction Administration", source: "pdf", photoType: "construction", generator: generateBiddingConstructionAdministrationText },
      { id: "designSchedulePage", title: "Design Schedule", source: "editable-data", photoType: "schedule", generator: generateDesignScheduleText },
      { id: "consultantsPage", title: "Consultants", source: "editable-data", photoType: "consultants", generator: generateConsultantsPageText },
      { id: "compensationPage", title: "Compensation", source: "editable-data", photoType: "fees", generator: generateCompensationPageText },
      { id: "proceedingWithConfidence", title: "Thank You", source: "written", photoType: "context", generator: generateProceedingWithConfidenceText },
      { id: "signature", title: "Signature", source: "editable-data", photoType: "closing", generator: generateSignatureSectionText },
      { id: "generalConditionsPage", title: "General Conditions", source: "written", photoType: "documents", generator: generateGeneralConditionsText },
      { id: "attachmentsPage", title: "Attachments", source: "page-builder", photoType: "none", generator: generateAttachmentsPageText }
    ];
  }

  function currentThemeId() {
    return normalizeThemeId(proposal.themeId);
  }

  function normalizeThemeId(themeId) {
    var value = String(themeId || "");
    return /^(?:maOg|studioPortrait|modernLandscape|northlinePortrait)$/.test(value) ? value : "maOg";
  }

  function syncProposalTheme() {
    proposal.meta = proposal.meta || {};
    proposal.themeId = normalizeThemeId(proposal.themeId || proposal.meta.themeId);
    proposal.meta.themeId = proposal.themeId;
    return proposal.themeId;
  }

  function setProposalTheme(themeId) {
    proposal.themeId = normalizeThemeId(themeId);
    proposal.meta = proposal.meta || {};
    proposal.meta.themeId = proposal.themeId;
    rememberCurrentTheme();
  }

  function readRememberedThemes() {
    try {
      var stored = JSON.parse(localStorage.getItem(THEME_SELECTION_KEY) || "{}");
      return stored && typeof stored === "object" ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function rememberCurrentTheme() {
    var themeId = syncProposalTheme();
    var draftId = proposal.meta && proposal.meta.id;
    try {
      sessionStorage.setItem(THEME_SESSION_KEY, JSON.stringify({ draftId: draftId || "", themeId: themeId }));
    } catch (error) {}
    if (!draftId) {
      return;
    }
    try {
      var remembered = readRememberedThemes();
      remembered[draftId] = themeId;
      localStorage.setItem(THEME_SELECTION_KEY, JSON.stringify(remembered));
    } catch (error) {}
  }

  function restoreRememberedTheme() {
    proposal.meta = proposal.meta || {};
    var draftId = proposal.meta.id || "";
    var themeId = "";
    try {
      var sessionTheme = JSON.parse(sessionStorage.getItem(THEME_SESSION_KEY) || "{}");
      if (sessionTheme && sessionTheme.draftId === draftId) {
        themeId = sessionTheme.themeId;
      }
    } catch (error) {}
    if (!themeId && draftId) {
      themeId = readRememberedThemes()[draftId];
    }
    proposal.themeId = normalizeThemeId(themeId || proposal.themeId || proposal.meta.themeId);
    proposal.meta.themeId = proposal.themeId;
  }

  function createDefaultProposal() {
    var today = new Date().toISOString().slice(0, 10);
    return normalizeProposal({
      meta: {
        id: "draft-" + Date.now(),
        createdAt: today,
        updatedAt: today,
        samplePhotosSeeded: true,
        coverImageCollapsed: false
      },
      templateId: "fullService",
      themeId: "maOg",
      customCover: {
        enabled: false,
        name: "",
        dataUrl: "",
        stored: false,
        orientation: ""
      },
      customCompensation: {
        enabled: false,
        name: "",
        dataUrl: "",
        stored: false,
        orientation: ""
      },
      project: {
        proposalDate: today,
        projectName: "S. Post Oak Multifamily Development",
        coverTitle: "",
        projectLocation: "S. Post Oak Lane and S. Wynden Drive, Houston",
        clientCompany: "BuildPro Construction / Captiva Development",
        clientContact: "Mr. Richard Osika",
        clientTitle: "Managing Member",
        clientAddress: "299 Market St.\nSaddle Brook, NJ 07663",
        program: "High-rise multifamily residential development with podium configuration, approximately 300 residential units, structured parking, and interior and exterior amenity spaces.",
        scopeOfWork: "Architectural design services as design architect through concept, schematic design, design development, construction documents support, bidding coordination, and construction administration.",
        siteDescription: "approximately 2-acre site located at the intersection of S. Post Oak Lane and S. Wynden Drive",
        designIntent: "timeless architectural character, a strong amenity-driven experience, and a cohesive residential environment that supports a range of lifestyles while establishing a clear identity within the neighborhood",
        ownerRequirements: [
          "Multifamily residential tower with podium configuration",
          "Approximately 300 total residential units",
          "Average unit size of approximately 1,400 square feet",
          "Primary focus on one and two-bedroom units with select three-bedroom units",
          "Parking ratio of approximately 1.8 cars per unit with structured parking",
          "Strong emphasis on interior and exterior amenity spaces",
          "Architectural character preference toward a timeless design approach"
        ].join("\n"),
        ownerProvidedInfo: [
          "Targeted demographics and resident profile",
          "Targeted unit mix and average unit size",
          "Target gross square footage and amenity square footage",
          "Target construction budget range",
          "Schedule priorities and milestone expectations",
          "Available site, survey, and entitlement information"
        ].join("\n"),
        showOwnerRequirements: true,
        showOwnerProvidedInfo: true,
        summaryDeliverables: "",
        showSummaryDeliverables: false,
        maAssumptions: [
          "Program is based on approximately 300 residential units",
          "Structured parking is incorporated into the building concept",
          "Interior and exterior amenities are included in the current program",
          "Owner will provide budget, schedule, and approval milestones",
          "Scope adjustments may require fee or service modifications"
        ].join("\n"),
        maAssumptionsAuto: true,
        summaryProposalTitle: "",
        showMaAssumptionsInProcess: true,
        coverSubtitle: "Design Architect Services",
        photoTypologies: "",
        clientLogos: [
          { name: "", dataUrl: "", stored: false },
          { name: "", dataUrl: "", stored: false }
        ]
      },
      schedule: {
        concept: "8 weeks",
        schematic: "12 weeks",
        designDevelopment: "16 weeks",
        valueEngineeringStudy: "",
        constructionDocuments: "TBD by AOR",
        bidding: "TBD by AOR",
        permitIfc: "TBD by AOR",
        constructionAdministration: "36 months (estimated)",
        includedPhases: {
          concept: true,
          schematic: true,
          designDevelopment: true,
          valueEngineeringStudy: false,
          constructionDocuments: true,
          bidding: true,
          permitIfc: true,
          constructionAdministration: true
        },
        description: "",
        belowText: ""
      },
      consultants: [
        { name: "Structural", group: "Needed", included: true },
        { name: "MEP", group: "Needed", included: true },
        { name: "Landscape Architecture", group: "Needed", included: true },
        { name: "Interior Design", group: "Needed", included: true },
        { name: "Elevator Consultant", group: "May be needed", included: true },
        { name: "Envelope and Waterproofing", group: "May be needed", included: true },
        { name: "Lighting", group: "May be needed", included: true },
        { name: "Accessibility", group: "May be needed", included: true },
        { name: "Specifications", group: "May be needed", included: true },
        { name: "Door Hardware", group: "May be needed", included: true },
        { name: "Acoustical", group: "May be needed", included: true },
        { name: "Wind Tunnel", group: "May be needed", included: true },
        { name: "Civil", group: "Client coordinated", included: true },
        { name: "Graphics and Signage Consultant", group: "Client coordinated", included: true },
        { name: "Geotech Consultant", group: "Client coordinated", included: true },
        { name: "Security / AV Consultant", group: "Client coordinated", included: true },
        { name: "Survey with Topo", group: "Client coordinated", included: true }
      ],
      compensation: {
        amount: "1379550",
        amountWords: "One million, three hundred seventy-nine thousand, five hundred and fifty dollars",
        concept: "137955",
        schematic: "383208",
        designDevelopment: "551820",
        constructionDocuments: "91970",
        bid: "0",
        constructionObservation: "214597",
        additionalServicesText: "",
        showAdditionalServices: false,
        ownerProvidedServicesText: "",
        showOwnerProvidedServices: false,
        showFeeNotes: true,
        feeNotesText: DEFAULT_COMPENSATION_FEE_NOTES_TEXT,
        feeNotesAuto: true,
        feeNotesReference: DEFAULT_COMPENSATION_FEE_NOTES_REFERENCE
      },
      feeStructures: [
        createFeeStructure({
          concept: "137955",
          schematic: "383208",
          designDevelopment: "551820",
          constructionDocuments: "91970",
          bid: "0",
          constructionObservation: "214597"
        })
      ],
      feeSchedule: {
        enabled: true,
        includedPhases: {
          concept: true,
          schematic: true,
          designDevelopment: true,
          constructionDocuments: true,
          bid: true,
          constructionObservation: true
        }
      },
      deletedDeliverables: {},
      sectionTitleOverrides: {},
      phaseLabels: {},
      deliverables: {
        conceptDesign: defaultDeliverableItems("conceptDesign"),
        schematicDesign: defaultDeliverableItems("schematicDesign"),
        designDevelopment: defaultDeliverableItems("designDevelopment")
      },
      qualifications: {
        overview: "M+A brings design leadership, urban sensitivity, and disciplined coordination to multifamily, mixed-use, hospitality, and workplace projects. Our approach balances architectural identity, planning logic, consultant alignment, and execution across the full life of the work.",
        stats: [
          { value: "25+", label: "Years of design leadership", detail: "Led by experienced principals with direct project involvement." },
          { value: "Houston", label: "Local perspective", detail: "Grounded in the development, permitting, and construction realities of the region." },
          { value: "Design-Led", label: "Project approach", detail: "Clear design direction paired with practical coordination and client responsiveness." },
          { value: "Multi-Sector", label: "Relevant experience", detail: "Residential, mixed-use, hospitality, office, and urban infill work." }
        ]
      },
      team: {
        highlightCount: 4,
        headshotShape: "square",
        members: [
          {
            id: "team-jorge",
            name: "Jorge Munoz, AIA",
            title: "Principal",
            description: "Provides overall design leadership, strategic guidance, and senior-level engagement throughout the process.",
            photoDataUrl: "",
            photoStored: false
          },
          {
            id: "team-design-lead",
            name: "Project Design Lead",
            title: "Senior Architect",
            description: "Coordinates daily design development, drawing production, and consultant integration across project phases.",
            photoDataUrl: "",
            photoStored: false
          },
          {
            id: "team-project-manager",
            name: "Project Manager",
            title: "Project Manager",
            description: "Manages schedule alignment, client communication, and internal team coordination to keep the work moving clearly.",
            photoDataUrl: "",
            photoStored: false
          },
          {
            id: "team-support",
            name: "Technical Support Team",
            title: "Production and Coordination",
            description: "Supports documentation, 3D studies, drawing development, and milestone deliverables as needed.",
            photoDataUrl: "",
            photoStored: false
          }
        ]
      },
      signature: {
        name: "Jorge Munoz, AIA",
        title: "Principal",
        company: "Munoz + Albin Architecture & Planning Inc.",
        imageDataUrl: "",
        imageStored: false,
        acceptedDate: ""
      },
      generalConditions: {
        text: DEFAULT_GENERAL_CONDITIONS_TEXT,
        hourlyRates: preferredGeneralConditionsHourlyRates()
      },
      savedSectionInputs: {},
      notes: "",
      photoSelections: {},
      photoSelectionHistory: {},
      scheduleImport: {
        name: "",
        dataUrl: "",
        text: ""
      },
      compensationImport: {
        name: "",
        dataUrl: "",
        text: ""
      },
      sectionLandscapeLayouts: {},
      sectionOverrides: {},
      photos: defaultPhotos(),
      attachments: []
    });
  }

  function normalizeProposal(value) {
    var base = value || {};
    base.meta = base.meta || {};
    base.meta.coverImageCollapsed = base.meta.coverImageCollapsed === true;
    base.customCover = base.customCover || {};
    base.customCover.enabled = base.customCover.enabled === true;
    base.customCover.name = String(base.customCover.name || "");
    base.customCover.dataUrl = String(base.customCover.dataUrl || "");
    base.customCover.stored = base.customCover.stored === true;
    base.customCover.orientation = /^(?:portrait|landscape)$/.test(base.customCover.orientation) ? base.customCover.orientation : "";
    base.customCompensation = base.customCompensation || {};
    base.customCompensation.enabled = base.customCompensation.enabled === true;
    base.customCompensation.name = String(base.customCompensation.name || "");
    base.customCompensation.dataUrl = String(base.customCompensation.dataUrl || "");
    base.customCompensation.stored = base.customCompensation.stored === true;
    base.customCompensation.orientation = /^(?:portrait|landscape)$/.test(base.customCompensation.orientation) ? base.customCompensation.orientation : "";
    base.project = base.project || {};
    base.project.clientLogos = Array.isArray(base.project.clientLogos) ? base.project.clientLogos.slice(0, 2) : [];
    while (base.project.clientLogos.length < 2) {
      base.project.clientLogos.push({ name: "", dataUrl: "", stored: false });
    }
    base.project.clientLogos = base.project.clientLogos.map(function (logo) {
      return {
        name: String(logo && logo.name || ""),
        dataUrl: String(logo && logo.dataUrl || ""),
        stored: logo && logo.stored === true
      };
    });
    base.schedule = base.schedule || {};
    base.scheduleImport = base.scheduleImport || {};
    base.compensation = base.compensation || {};
    base.compensationImport = base.compensationImport || {};
    base.feeSchedule = base.feeSchedule || {};
    base.phaseLabels = normalizePhaseLabels(base.phaseLabels);
    base.feeStructures = normalizeFeeStructures(base.feeStructures, base.compensation, base.feeSchedule);
    base.deliverables = base.deliverables || {};
    base.deletedDeliverables = base.deletedDeliverables || {};
    base.phaseScopeItems = base.phaseScopeItems && typeof base.phaseScopeItems === "object" ? base.phaseScopeItems : {};
    if (base.projectSummarySections && typeof base.projectSummarySections === "object") {
      base.projectSummarySections.intro = normalizeProjectSummaryNarrativeText(base.projectSummarySections.intro);
      base.projectSummarySections.summary = normalizeProjectSummaryNarrativeText(base.projectSummarySections.summary);
    } else {
      delete base.projectSummarySections;
    }
    base.sectionLandscapeLayouts = normalizeSectionLandscapeLayouts(base.sectionLandscapeLayouts);
    base.sectionTitleOverrides = normalizeSectionTitleOverrides(base.sectionTitleOverrides);
    base.sectionOverrides = base.sectionOverrides || {};
    if (Object.prototype.hasOwnProperty.call(base.sectionOverrides, "projectSummary")) {
      base.sectionOverrides.projectSummary = normalizeProjectSummaryNarrativeText(base.sectionOverrides.projectSummary);
    }
    if (Object.prototype.hasOwnProperty.call(base.sectionOverrides, "process")) {
      base.sectionOverrides.process = stripProcessFixedHeading(base.sectionOverrides.process);
    }
    base.sectionInclusion = normalizeSectionInclusion(base.sectionInclusion);
    base.savedSectionInputs = base.savedSectionInputs || {};
    base.notes = String(base.notes || "");
    base.photoSelections = base.photoSelections || {};
    base.photoFrameHeights = normalizePhotoFrameHeights(base.photoFrameHeights);
    base.textFrameBottoms = ProposalTextFlow.normalize(base.textFrameBottoms);
    base.photoSelectionHistory = normalizePhotoSelectionHistory(base.photoSelectionHistory);
    base.photos = Array.isArray(base.photos) ? base.photos : [];
    if (base.photos.some(function (photo) { return photo.sample; })) {
      base.meta.samplePhotosSeeded = true;
    }
    if (!base.meta.samplePhotosSeeded && !base.photos.length) {
      base.photos = defaultPhotos();
      base.meta.samplePhotosSeeded = true;
    }
    base.schedule.includedPhases = normalizeScheduleIncludedPhases(base.schedule.includedPhases);
    base.consultants = Array.isArray(base.consultants) ? base.consultants : [];
    base.consultants.forEach(function (consultant) {
      if (consultant.group === "Primary") {
        consultant.group = "Needed";
      } else if (consultant.group === "Secondary") {
        consultant.group = "May be needed";
      } else if (consultant.group === "Owner coordinated") {
        consultant.group = "Client coordinated";
      }
    });
    base.attachments = normalizeAttachments(base.attachments);
    base.generalConditions = normalizeGeneralConditions(base.generalConditions, base.sectionOverrides.generalConditionsPage);
    base.qualifications = base.qualifications || {};
    base.qualifications.stats = Array.isArray(base.qualifications.stats) ? base.qualifications.stats : [];
    while (base.qualifications.stats.length < 4) {
      base.qualifications.stats.push({ value: "", label: "", detail: "" });
    }
    base.team = base.team || {};
    base.team.highlightCount = clampTeamCount(base.team.highlightCount);
    base.team.headshotShape = normalizeHeadshotShape(base.team.headshotShape);
    base.team.members = Array.isArray(base.team.members) ? base.team.members : [];
    while (base.team.members.length < 4) {
      base.team.members.push({
        id: "team-extra-" + base.team.members.length,
        name: "",
        title: "",
        description: "",
        photoDataUrl: "",
        photoStored: false
      });
    }
    base.team.members.forEach(function (member, index) {
      member.id = member.id || ("team-extra-" + index);
      member.photoDataUrl = String(member.photoDataUrl || "");
      member.photoStored = member.photoStored === true;
    });
    base.signature = base.signature || {};
    if (!base.signature.name) {
      base.signature.name = "Jorge Munoz, AIA";
    }
    if (!base.signature.title) {
      base.signature.title = "Principal";
    }
    base.signature.imageDataUrl = String(base.signature.imageDataUrl || "");
    base.signature.imageStored = base.signature.imageStored === true;
    base.signature.acceptedDate = String(base.signature.acceptedDate || "");
    if (!base.signature.company) {
      base.signature.company = "Munoz + Albin Architecture & Planning Inc.";
    }
    if (!base.templateId) {
      base.templateId = "fullService";
    }
    base.themeId = normalizeThemeId(base.themeId || base.meta.themeId);
    base.meta.themeId = base.themeId;
    base.project.coverTitle = String(base.project.coverTitle || "");
    if (!base.project.coverSubtitle) {
      base.project.coverSubtitle = "Design Architect Services";
    }
    if (base.project.maAssumptionsAuto === undefined) {
      var currentAssumptions = cleanLines(String(base.project.maAssumptions || "").split(/\r?\n/)).join("\n");
      var inferredAssumptionText = inferredAssumptionsFromProgram(base.project.program).join("\n");
      base.project.maAssumptionsAuto = !currentAssumptions || currentAssumptions === inferredAssumptionText;
    } else {
      base.project.maAssumptionsAuto = base.project.maAssumptionsAuto === true;
    }
    base.project.summaryProposalTitle = String(base.project.summaryProposalTitle || "");
    base.project.showOwnerRequirements = base.project.showOwnerRequirements !== false;
    base.project.showOwnerProvidedInfo = base.project.showOwnerProvidedInfo !== false;
    base.project.summaryDeliverables = String(base.project.summaryDeliverables || "");
    base.project.showSummaryDeliverables = base.project.showSummaryDeliverables === true;
    base.project.showMaAssumptionsInProcess = base.project.showMaAssumptionsInProcess !== false;
    base.schedule.valueEngineeringStudy = String(base.schedule.valueEngineeringStudy || "");
    base.schedule.description = String(base.schedule.description || "");
    base.schedule.belowText = String(base.schedule.belowText || "");
    if (base.project.photoTypologies === "") {
      base.project.photoTypologies = defaultPhotoTypologies.slice().join(", ");
    }
    if (Array.isArray(base.project.photoTypologies)) {
      base.project.photoTypologies = base.project.photoTypologies.join(", ");
    }
    base.project.photoTypologies = parsePhotoTypologies(base.project.photoTypologies).join(", ");
    base.photos.forEach(function (photo) {
      if (!hasPhotoTypology(photo.typology)) {
        photo.typology = defaultPhotoTypologies[0];
      }
    });
    base.feeSchedule.enabled = base.feeSchedule.enabled !== false;
    base.feeSchedule.includedPhases = normalizeFeeScheduleIncludedPhases(base.feeSchedule.includedPhases);
    ["conceptDesign", "schematicDesign", "designDevelopment"].forEach(function (phaseId) {
      base.deliverables[phaseId] = normalizeDeliverableItems(base.deliverables[phaseId], phaseId, base);
    });
    base.compensation.amount = sanitizeCurrencyInput(base.compensation.amount);
    base.compensation.concept = sanitizeCurrencyInput(base.compensation.concept);
    base.compensation.schematic = sanitizeCurrencyInput(base.compensation.schematic);
    base.compensation.designDevelopment = sanitizeCurrencyInput(base.compensation.designDevelopment);
    base.compensation.constructionDocuments = sanitizeCurrencyInput(base.compensation.constructionDocuments);
    base.compensation.bid = sanitizeCurrencyInput(base.compensation.bid);
    base.compensation.constructionObservation = sanitizeCurrencyInput(base.compensation.constructionObservation);
    base.compensation.additionalServicesText = String(base.compensation.additionalServicesText || "");
    base.compensation.showAdditionalServices = base.compensation.showAdditionalServices === true;
    base.compensation.ownerProvidedServicesText = String(base.compensation.ownerProvidedServicesText || "");
    base.compensation.showOwnerProvidedServices = base.compensation.showOwnerProvidedServices === true;
    base.compensation.showFeeNotes = base.compensation.showFeeNotes !== false;
    base.compensation.feeNotesText = Object.prototype.hasOwnProperty.call(base.compensation, "feeNotesText")
      ? String(base.compensation.feeNotesText || "")
      : DEFAULT_COMPENSATION_FEE_NOTES_TEXT;
    base.compensation.feeNotesAuto = Object.prototype.hasOwnProperty.call(base.compensation, "feeNotesAuto")
      ? base.compensation.feeNotesAuto === true
      : base.compensation.feeNotesText === DEFAULT_COMPENSATION_FEE_NOTES_TEXT;
    base.compensation.feeNotesReference = Object.prototype.hasOwnProperty.call(base.compensation, "feeNotesReference")
      ? String(base.compensation.feeNotesReference || "")
      : DEFAULT_COMPENSATION_FEE_NOTES_REFERENCE;
    if (!base.compensation.amountWords) {
      base.compensation.amountWords = compensationAmountToWords(base.compensation.amount);
    }
    return base;
  }

  function createFeeStructure(values) {
    var source = values && typeof values === "object" ? values : {};
    return {
      heading: String(source.heading || ""),
      belowText: String(source.belowText || ""),
      concept: sanitizeCurrencyInput(source.concept),
      schematic: sanitizeCurrencyInput(source.schematic),
      designDevelopment: sanitizeCurrencyInput(source.designDevelopment),
      constructionDocuments: sanitizeCurrencyInput(source.constructionDocuments),
      bid: sanitizeCurrencyInput(source.bid),
      constructionObservation: sanitizeCurrencyInput(source.constructionObservation),
      includedPhases: normalizeFeeScheduleIncludedPhases(source.includedPhases),
      phaseLabels: normalizePhaseLabels(source.phaseLabels)
    };
  }

  function normalizeFeeStructures(value, compensation, feeSchedule) {
    var source = Array.isArray(value) ? value.slice(0, 3) : [];
    if (!source.length) {
      source.push({
        concept: compensation.concept,
        schematic: compensation.schematic,
        designDevelopment: compensation.designDevelopment,
        constructionDocuments: compensation.constructionDocuments,
        bid: compensation.bid,
        constructionObservation: compensation.constructionObservation,
        includedPhases: feeSchedule.includedPhases
      });
    }
    return source.map(createFeeStructure);
  }

  function normalizeFeeScheduleIncludedPhases(value) {
    var source = value && typeof value === "object" ? value : {};
    return {
      concept: source.concept !== false,
      schematic: source.schematic !== false,
      designDevelopment: source.designDevelopment !== false,
      constructionDocuments: source.constructionDocuments !== false,
      bid: source.bid !== false,
      constructionObservation: source.constructionObservation !== false
    };
  }

  function phaseLabelDefinitions() {
    return [
      { key: "concept", label: "Concept Design" },
      { key: "schematic", label: "Schematic Design" },
      { key: "designDevelopment", label: "Design Development" },
      { key: "constructionDocuments", label: "Construction Documents" },
      { key: "bid", label: "Bidding" },
      { key: "constructionObservation", label: "Construction Administration" },
      { key: "permitIfc", label: "Permit and IFC" }
    ];
  }

  function normalizePhaseLabels(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    phaseLabelDefinitions().forEach(function (phase) {
      var label = String(source[phase.key] || "").replace(/\s+/g, " ").trim();
      if (label && label !== phase.label) {
        normalized[phase.key] = label;
      }
    });
    return normalized;
  }

  function defaultPhaseLabel(key) {
    var phase = phaseLabelDefinitions().find(function (item) { return item.key === key; });
    return phase ? phase.label : "";
  }

  function phaseLabel(key) {
    var defaultLabel = defaultPhaseLabel(key);
    var labels = proposal && proposal.phaseLabels ? proposal.phaseLabels : {};
    return String(labels[key] || "").replace(/\s+/g, " ").trim() || defaultLabel;
  }

  function feeStructurePhaseLabel(structure, key) {
    var labels = structure && structure.phaseLabels ? structure.phaseLabels : {};
    return String(labels[key] || "").replace(/\s+/g, " ").trim() || defaultPhaseLabel(key);
  }

  function phaseLabelKeyForSchedule(key) {
    return {
      bidding: "bid",
      constructionAdministration: "constructionObservation"
    }[key] || key;
  }

  function normalizeAttachments(value) {
    var source = Array.isArray(value) ? value.slice(0, 26) : [];
    return source.map(function (item, attachmentIndex) {
      var attachment = item && typeof item === "object" ? item : {};
      var attachmentId = String(attachment.id || createAttachmentId());
      var suppliedPages = Array.isArray(attachment.pages) ? attachment.pages : [];
      var requestedPageCount = clampAttachmentPageCount(
        attachment.pageCount || suppliedPages.length || 1
      );
      var pages = suppliedPages.slice(0, requestedPageCount).map(function (page) {
        return normalizeAttachmentPage(page);
      });

      if (!pages.length && (attachment.imageDataUrl || attachment.dataUrl)) {
        pages.push(normalizeAttachmentPage({
          imageName: attachment.imageName || attachment.name || "Attachment image",
          imageDataUrl: attachment.imageDataUrl || attachment.dataUrl,
          imageStored: attachment.imageStored === true || attachment.stored === true
        }));
      }
      while (pages.length < requestedPageCount) {
        pages.push(createAttachmentPage());
      }

      return {
        id: attachmentId,
        title: String(attachment.title || ("Attachment " + attachmentLetter(attachmentIndex))),
        subtitle: String(attachment.subtitle || ""),
        pageCount: pages.length,
        pages: pages
      };
    });
  }

  function defaultGeneralConditionsHourlyRates() {
    return DEFAULT_GENERAL_CONDITIONS_HOURLY_RATES.map(function (rate) {
      return { label: rate.label, amount: rate.amount };
    });
  }

  function copyGeneralConditionsHourlyRates(rates) {
    return (Array.isArray(rates) ? rates : []).map(function (rate) {
      var source = rate && typeof rate === "object" ? rate : {};
      return {
        label: String(source.label || ""),
        amount: sanitizeCurrencyInput(source.amount)
      };
    });
  }

  function readSavedGeneralConditionsHourlyRates() {
    try {
      var stored = JSON.parse(localStorage.getItem(GENERAL_CONDITIONS_RATE_DEFAULTS_KEY) || "[]");
      return Array.isArray(stored) && stored.length ? copyGeneralConditionsHourlyRates(stored) : [];
    } catch (error) {
      return [];
    }
  }

  function writeSavedGeneralConditionsHourlyRates(rates) {
    try {
      localStorage.setItem(GENERAL_CONDITIONS_RATE_DEFAULTS_KEY, JSON.stringify(copyGeneralConditionsHourlyRates(rates)));
      return true;
    } catch (error) {
      console.error("Could not save hourly rate defaults", error);
      return false;
    }
  }

  function preferredGeneralConditionsHourlyRates() {
    var saved = readSavedGeneralConditionsHourlyRates();
    return saved.length ? saved : defaultGeneralConditionsHourlyRates();
  }

  function normalizeGeneralConditions(value, legacyText) {
    var source = value && typeof value === "object" ? value : {};
    var ratesSource = Array.isArray(source.hourlyRates) ? source.hourlyRates : [];
    var rateCount = Math.max(DEFAULT_GENERAL_CONDITIONS_HOURLY_RATES.length, ratesSource.length);
    var rates = [];
    for (var index = 0; index < rateCount; index += 1) {
      var fallback = DEFAULT_GENERAL_CONDITIONS_HOURLY_RATES[index] || { label: "", amount: "" };
      var rate = ratesSource[index] && typeof ratesSource[index] === "object" ? ratesSource[index] : {};
      rates.push({
        label: Object.prototype.hasOwnProperty.call(rate, "label") ? String(rate.label || "") : fallback.label,
        amount: Object.prototype.hasOwnProperty.call(rate, "amount") ? sanitizeCurrencyInput(rate.amount) : fallback.amount
      });
    }
    var storedText = Object.prototype.hasOwnProperty.call(source, "text")
      ? source.text
      : (legacyText !== undefined ? legacyText : DEFAULT_GENERAL_CONDITIONS_TEXT);
    return {
      text: String(storedText || ""),
      hourlyRates: rates
    };
  }

  function normalizeAttachmentPage(value) {
    var page = value && typeof value === "object" ? value : {};
    return {
      id: String(page.id || createAttachmentPageId()),
      imageName: String(page.imageName || page.name || ""),
      imageDataUrl: String(page.imageDataUrl || page.dataUrl || ""),
      imageStored: page.imageStored === true || page.stored === true
    };
  }

  function createAttachmentId() {
    return "attachment-" + Date.now() + "-" + Math.round(Math.random() * 1000000);
  }

  function createAttachmentPageId() {
    return "attachment-page-" + Date.now() + "-" + Math.round(Math.random() * 1000000);
  }

  function createAttachmentPage() {
    return normalizeAttachmentPage({});
  }

  function clampAttachmentPageCount(value) {
    var count = Math.round(Number(value) || 1);
    return Math.max(1, Math.min(50, count));
  }

  function attachmentLetter(index) {
    return String.fromCharCode(65 + Math.max(0, Math.min(25, Number(index) || 0)));
  }

  function normalizeScheduleIncludedPhases(value) {
    var source = value && typeof value === "object" ? value : {};
    return {
      concept: source.concept !== false,
      schematic: source.schematic !== false,
      designDevelopment: source.designDevelopment !== false,
      valueEngineeringStudy: source.valueEngineeringStudy === true,
      constructionDocuments: source.constructionDocuments !== false,
      bidding: source.bidding !== false,
      permitIfc: source.permitIfc !== false,
      constructionAdministration: source.constructionAdministration !== false
    };
  }

  function normalizeSectionInclusion(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    sectionDefinitions.forEach(function (section) {
      normalized[section.id] = source[section.id] !== false;
    });
    return normalized;
  }

  function normalizeSectionTitleOverrides(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    sectionDefinitions.forEach(function (section) {
      var title = String(source[section.id] || "").replace(/\s+/g, " ").trim();
      if (title && title !== section.title) {
        normalized[section.id] = title;
      }
    });
    return normalized;
  }

  function sectionDisplayTitle(sectionOrId) {
    var section = typeof sectionOrId === "string"
      ? sectionDefinitions.find(function (item) { return item.id === sectionOrId; })
      : sectionOrId;
    if (!section) {
      return "";
    }
    var overrides = proposal && proposal.sectionTitleOverrides ? proposal.sectionTitleOverrides : {};
    return String(overrides[section.id] || "").replace(/\s+/g, " ").trim() || section.title;
  }

  function pageDisplayTitle(page) {
    if (page && !page.attachmentPage && page.sectionIds && page.sectionIds.length) {
      return sectionDisplayTitle(page.sectionIds[0]) || page.header;
    }
    return page && page.header ? page.header : "";
  }

  function normalizeSectionLandscapeLayouts(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    supportedLandscapeLayoutSectionIds().forEach(function (sectionId) {
      normalized[sectionId] = source[sectionId] === true;
    });
    return normalized;
  }

  function normalizePhotoSelectionHistory(value) {
    var source = value && typeof value === "object" ? value : {};
    var normalized = {};
    Object.keys(source).forEach(function (slotKey) {
      var entry = source[slotKey] || {};
      normalized[slotKey] = {
        back: Array.isArray(entry.back) ? entry.back.map(normalizePhotoSelectionSnapshot).filter(Boolean).slice(-20) : [],
        forward: Array.isArray(entry.forward) ? entry.forward.map(normalizePhotoSelectionSnapshot).filter(Boolean).slice(-20) : []
      };
    });
    return normalized;
  }

  function normalizePhotoSelectionSnapshot(value) {
    if (!value || !value.photoId) {
      return null;
    }
    return {
      photoId: String(value.photoId || ""),
      x: Number.isFinite(Number(value.x)) ? Number(value.x) : 50,
      y: Number.isFinite(Number(value.y)) ? Number(value.y) : 50,
      scale: normalizePhotoScale(value.scale)
    };
  }

  function supportedLandscapeLayoutSectionIds() {
    return [
      "projectSummary",
      "ourQualifications",
      "process",
      "conceptDesignPage",
      "schematicDesignPage",
      "designDevelopmentPage",
      "constructionDocumentsPage",
      "biddingConstructionAdministration",
      "designSchedulePage",
      "consultantsPage",
      "compensationPage",
      "proceedingWithConfidence",
      "generalConditionsPage"
    ];
  }

  function supportsLandscapeImageLayout(sectionId) {
    return supportedLandscapeLayoutSectionIds().indexOf(sectionId) >= 0;
  }

  function usesLandscapeImageLayout(sectionId) {
    proposal.sectionLandscapeLayouts = normalizeSectionLandscapeLayouts(proposal.sectionLandscapeLayouts);
    return proposal.sectionLandscapeLayouts[sectionId] === true;
  }

  function isSectionIncluded(sectionId) {
    proposal.sectionInclusion = normalizeSectionInclusion(proposal.sectionInclusion);
    return proposal.sectionInclusion[sectionId] !== false;
  }

  function renderNav() {
    if (!validSectionId(activeSectionId)) {
      activeSectionId = defaultActiveSectionId();
      saveCurrentDraft();
    }
    els.nav.innerHTML = "";
    sectionDefinitions.forEach(function (section, index) {
      var row = document.createElement("div");
      row.className = "step-row" + (isSectionIncluded(section.id) ? "" : " is-excluded");
      var toggleWrap = document.createElement("label");
      toggleWrap.className = "step-toggle";
      var toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.className = "step-checkbox";
      toggle.checked = isSectionIncluded(section.id);
      toggle.setAttribute("aria-label", "Include " + sectionDisplayTitle(section) + " in proposal");
      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      toggle.addEventListener("change", function (event) {
        proposal.sectionInclusion[section.id] = event.target.checked;
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      toggleWrap.appendChild(toggle);
      row.appendChild(toggleWrap);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "step-button" + (section.id === activeSectionId ? " active" : "");
      button.innerHTML = '<span class="step-number">' + (index + 1) + '</span><span class="step-label">' + escapeHtml(sectionDisplayTitle(section)) + "</span>";
      button.addEventListener("click", function () {
        activeTab = "sections";
        activeSectionId = section.id;
        saveCurrentDraft();
        renderAll();
      });
      row.appendChild(button);
      els.nav.appendChild(row);
    });
  }

  function validSectionId(sectionId) {
    return sectionDefinitions.some(function (section) {
      return section.id === sectionId;
    });
  }

  function defaultActiveSectionId() {
    return sectionDefinitions[0] ? sectionDefinitions[0].id : "";
  }

  function renderInfoPanel() {
    els.editor.innerHTML = "";

    var templateCard = panelCard("Proposal Types", "Save and reuse the checked Subjects and their default section text.");
    var templateField = document.createElement("div");
    templateField.className = "field full";
    var templateLabel = document.createElement("label");
    templateLabel.setAttribute("for", "proposal-type-select");
    templateLabel.textContent = "Proposal type";
    templateField.appendChild(templateLabel);
    var templateSelect = document.createElement("select");
    templateSelect.id = "proposal-type-select";
    availableTemplates().forEach(function (template) {
      var option = document.createElement("option");
      option.value = template.id;
      option.textContent = template.label;
      templateSelect.appendChild(option);
    });
    templateSelect.value = proposal.templateId;
    templateSelect.addEventListener("change", function () {
      applyProposalType(findTemplateById(templateSelect.value));
    });
    templateField.appendChild(templateSelect);
    var selectedTemplate = findTemplateById(proposal.templateId);
    var templateHelp = document.createElement("p");
    templateHelp.className = "field-help";
    templateHelp.textContent = selectedTemplate && selectedTemplate.defaultsSaved
      ? "Selecting this type restores its saved Subject checkboxes and section text."
      : (selectedTemplate && selectedTemplate.note ? selectedTemplate.note : "Select a saved type to apply its defaults.");
    templateField.appendChild(templateHelp);
    templateCard.appendChild(templateField);

    var newTemplateRow = document.createElement("div");
    newTemplateRow.className = "field-action-row";
    var newTemplateInput = document.createElement("input");
    newTemplateInput.type = "text";
    newTemplateInput.id = "new-proposal-type-name";
    newTemplateInput.placeholder = "Name this proposal type";
    newTemplateInput.setAttribute("aria-label", "New proposal type");
    var newTemplateButton = document.createElement("button");
    newTemplateButton.type = "button";
    newTemplateButton.className = "secondary";
    newTemplateButton.id = "save-proposal-type";
    newTemplateButton.textContent = "Save current";
    function saveTemplateType() {
      var label = String(newTemplateInput.value || "").trim();
      if (!label) {
        newTemplateInput.focus();
        return;
      }
      var normalizedLabel = label.toLowerCase();
      var existingTemplate = availableTemplates().find(function (item) {
        return item.label.toLowerCase() === normalizedLabel;
      });
      if (existingTemplate && !isCustomTemplateId(existingTemplate.id)) {
        flashStatus("That name is already used by a built-in Proposal Type.");
        newTemplateInput.focus();
        return;
      }
      var customTemplates = readCustomTemplates();
      var templateId = existingTemplate ? existingTemplate.id : createTemplateId(label);
      var template = captureProposalTypeDefaults(templateId, label);
      var existingIndex = customTemplates.findIndex(function (item) {
        return item.id === templateId;
      });
      if (existingIndex >= 0) {
        customTemplates[existingIndex] = template;
      } else {
        customTemplates.push(template);
      }
      if (!writeCustomTemplates(customTemplates)) {
        if (els.status) {
          els.status.textContent = "Unsaved - browser storage full";
        }
        return;
      }
      proposal.templateId = template.id;
      markDirty();
      saveCurrentDraft();
      renderAll();
      flashStatus(existingIndex >= 0 ? "Proposal Type defaults updated." : "Proposal Type saved.");
    }
    newTemplateButton.addEventListener("click", saveTemplateType);
    newTemplateInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        saveTemplateType();
      }
    });
    newTemplateRow.appendChild(newTemplateInput);
    newTemplateRow.appendChild(newTemplateButton);
    templateCard.appendChild(newTemplateRow);

    if (selectedTemplate && isCustomTemplateId(selectedTemplate.id)) {
      var templateActions = document.createElement("div");
      templateActions.className = "section-editor-actions proposal-type-actions";
      var updateTemplateButton = document.createElement("button");
      updateTemplateButton.type = "button";
      updateTemplateButton.className = "secondary compact";
      updateTemplateButton.id = "update-proposal-type";
      updateTemplateButton.textContent = "Update selected defaults";
      updateTemplateButton.addEventListener("click", function () {
        var customTemplates = readCustomTemplates();
        var index = customTemplates.findIndex(function (item) {
          return item.id === selectedTemplate.id;
        });
        if (index < 0) {
          return;
        }
        customTemplates[index] = captureProposalTypeDefaults(selectedTemplate.id, selectedTemplate.label, selectedTemplate.note);
        if (writeCustomTemplates(customTemplates)) {
          markDirty();
          saveCurrentDraft();
          renderAll();
          flashStatus("Proposal Type defaults updated.");
        }
      });
      var deleteTemplateButton = document.createElement("button");
      deleteTemplateButton.type = "button";
      deleteTemplateButton.className = "danger compact";
      deleteTemplateButton.id = "delete-proposal-type";
      deleteTemplateButton.textContent = "Delete selected type";
      deleteTemplateButton.addEventListener("click", function () {
        if (!window.confirm('Delete the Proposal Type "' + selectedTemplate.label + '"?')) {
          return;
        }
        var remaining = readCustomTemplates().filter(function (item) {
          return item.id !== selectedTemplate.id;
        });
        if (!writeCustomTemplates(remaining)) {
          return;
        }
        proposal.templateId = "fullService";
        markDirty();
        saveCurrentDraft();
        renderAll();
        flashStatus("Proposal Type deleted.");
      });
      templateActions.appendChild(updateTemplateButton);
      templateActions.appendChild(deleteTemplateButton);
      templateCard.appendChild(templateActions);
    }
    els.editor.appendChild(templateCard);

    var themeCard = panelCard("Theme", "Choose the visual layout for this proposal.");
    var themeGrid = document.createElement("div");
    themeGrid.className = "template-grid theme-grid";
    themes.forEach(function (theme) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "template-button theme-button" + (proposal.themeId === theme.id ? " active" : "");
      button.innerHTML = "<strong>" + escapeHtml(theme.label) + "</strong><span>" + escapeHtml(theme.note) + "</span>";
      button.addEventListener("click", function () {
        setProposalTheme(theme.id);
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      themeGrid.appendChild(button);
    });
    themeCard.appendChild(themeGrid);
    els.editor.appendChild(themeCard);
    els.editor.appendChild(renderCoverSourceCard());

    if (currentThemeId() === "northlinePortrait") {
      els.editor.appendChild(renderModernPortraitCoverImageCard());
    }

    var projectInfoCard = fieldsCard("Project Information", [
      fieldDef("project.projectName", "Project name"),
      fieldDef("project.coverTitle", "Cover page title", "textarea", true, "Leave blank to use the selected theme's default title."),
      fieldDef("project.coverSubtitle", "Cover subtitle", "textarea", true),
      fieldDef("project.summaryProposalTitle", "Proposal line below address", "textarea", true, "Proposal for Architectural Design Services for [Project Name]."),
      fieldDef("project.proposalDate", "Proposal date", "date"),
      fieldDef("project.projectLocation", "Project location"),
      fieldDef("project.clientCompany", "Client / owner"),
      fieldDef("project.clientContact", "Client contact"),
      fieldDef("project.clientTitle", "Client title"),
      fieldDef("project.clientAddress", "Client address", "textarea", true)
    ]);
    projectInfoCard.querySelector(".field-grid").appendChild(renderProjectPhotoTypologyField());
    els.editor.appendChild(projectInfoCard);
    renderClientLogosCard();
    activatePhotoLibraryThumbnailLoading();
  }

  function renderNotesPanel() {
    els.editor.innerHTML = "";
    var card = panelCard("Notes", "Keep private working notes for this proposal. These notes stay in the draft and do not print.");
    var textarea = document.createElement("textarea");
    textarea.className = "notes-textarea";
    textarea.value = proposal.notes || "";
    textarea.placeholder = "Type notes here...";
    textarea.addEventListener("input", function () {
      proposal.notes = textarea.value;
      markDirty();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    els.editor.appendChild(card);
  }

  function renderModernPortraitCoverImageCard() {
    var collapsed = proposal.meta.coverImageCollapsed === true;
    var card = panelCard("Cover Image", collapsed ? "Cover image controls are hidden." : "Choose the first-page image for Modern Portrait.");
    card.classList.toggle("is-collapsed", collapsed);
    var collapseButton = document.createElement("button");
    collapseButton.type = "button";
    collapseButton.className = "secondary compact cover-image-collapse";
    collapseButton.textContent = collapsed ? "Expand" : "Collapse";
    collapseButton.addEventListener("click", function () {
      proposal.meta.coverImageCollapsed = !proposal.meta.coverImageCollapsed;
      markDirty();
      saveCurrentDraft();
      renderAll();
    });
    var head = card.querySelector(".panel-head");
    if (head) {
      head.appendChild(collapseButton);
    }
    if (collapsed) {
      return card;
    }
    var photos = selectablePhotoOptions();
    var selectedId = modernPortraitCoverSelectedId();

    var actions = document.createElement("div");
    actions.className = "cover-image-actions";
    var autoButton = document.createElement("button");
    autoButton.type = "button";
    autoButton.className = "secondary compact cover-image-auto" + (!selectedId ? " active" : "");
    autoButton.textContent = "Auto-select";
    autoButton.addEventListener("click", function () {
      setModernPortraitCoverPhoto("");
    });
    actions.appendChild(autoButton);
    card.appendChild(actions);

    if (!photos.length) {
      var empty = document.createElement("p");
      empty.className = "field-help";
      empty.textContent = "Upload photos first, then choose the cover image here.";
      card.appendChild(empty);
      return card;
    }

    var grid = document.createElement("div");
    grid.className = "cover-image-picker";
    photos.forEach(function (photo) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "cover-image-option" + (photo.id === selectedId ? " active" : "");
      button.setAttribute("aria-pressed", photo.id === selectedId ? "true" : "false");
      var img = photoLibraryThumbnailImage(photo);
      img.classList.add("cover-image-thumb");
      img.alt = photo.name || "Cover image option";
      img.title = photo.name || formatTypologyLabel(photo.typology) || "Uploaded image";
      var label = document.createElement("span");
      label.textContent = photo.name || formatTypologyLabel(photo.typology) || "Uploaded image";
      button.appendChild(img);
      button.appendChild(label);
      button.addEventListener("click", function () {
        setModernPortraitCoverPhoto(photo.id);
      });
      grid.appendChild(button);
    });
    card.appendChild(grid);
    return card;
  }

  function renderCoverSourceCard() {
    var cover = proposal.customCover || {};
    var card = panelCard("Cover Page", "Use the app-generated cover or replace it with a complete, one-page Letter PDF.");
    var choices = document.createElement("div");
    choices.className = "cover-source-choices";

    [
      { value: false, label: "Generated cover" },
      { value: true, label: "Uploaded PDF" }
    ].forEach(function (choice) {
      var label = document.createElement("label");
      label.className = "cover-source-choice" + (cover.enabled === choice.value ? " active" : "");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "cover-source";
      input.checked = cover.enabled === choice.value;
      input.addEventListener("change", function () {
        if (choice.value && !cover.dataUrl) {
          var generatedChoice = choices.querySelector('input[name="cover-source"]');
          if (generatedChoice) {
            generatedChoice.checked = true;
          }
          input.checked = false;
          upload.click();
          return;
        }
        proposal.customCover.enabled = choice.value;
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      label.appendChild(input);
      label.appendChild(document.createTextNode(choice.label));
      choices.appendChild(label);
    });
    card.appendChild(choices);

    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = ".pdf,application/pdf";
    upload.className = "cover-pdf-input";
    upload.addEventListener("change", function () {
      var file = upload.files && upload.files[0];
      if (file) {
        importCustomCoverPdf(file, upload);
      }
    });
    card.appendChild(upload);

    var help = document.createElement("p");
    help.className = "field-help";
    help.textContent = "PDF must contain exactly one Letter-size page (8.5 × 11 in) in the same orientation as the selected theme.";
    card.appendChild(help);

    if (cover.dataUrl) {
      var currentOrientation = currentThemeId() === "modernLandscape" ? "landscape" : "portrait";
      var summary = document.createElement("div");
      summary.className = "cover-pdf-summary";
      summary.innerHTML = '<img src="' + escapeHtml(cover.dataUrl) + '" alt="Uploaded cover preview"><div><strong>' + escapeHtml(cover.name || "Uploaded cover.pdf") + '</strong><span>' + escapeHtml((cover.orientation || "letter") + " Letter cover") + (cover.orientation && cover.orientation !== currentOrientation ? " · orientation differs from the selected theme" : "") + '</span></div>';
      var remove = document.createElement("button");
      remove.type = "button";
      remove.className = "danger compact";
      remove.textContent = "Remove";
      remove.addEventListener("click", function () {
        deletePhotoData(customCoverAssetId());
        proposal.customCover = { enabled: false, name: "", dataUrl: "", stored: false, orientation: "" };
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      summary.appendChild(remove);
      card.appendChild(summary);
    }
    return card;
  }

  async function importCustomCoverPdf(file, input) {
    if (!file || (!/\.pdf$/i.test(file.name || "") && file.type !== "application/pdf")) {
      window.alert("Please choose a PDF file.");
      input.value = "";
      return;
    }
    flashStatus("Checking cover PDF...");
    try {
      if (window.location.protocol === "file:") {
        throw new Error("PDF cover uploads require the local Proposal Bot server. Open the app with start-proposal-bot.bat and try again.");
      }
      var pdfjs = await import("./assets/vendor/pdfjs/pdf.min.js");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("assets/vendor/pdfjs/pdf.worker.min.js", window.location.href).href;
      var bytes = new Uint8Array(await file.arrayBuffer());
      var documentTask = pdfjs.getDocument({ data: bytes });
      var pdf = await documentTask.promise;
      if (pdf.numPages !== 1) {
        throw new Error("The cover PDF must contain exactly one page.");
      }
      var page = await pdf.getPage(1);
      var viewport = page.getViewport({ scale: 1 });
      var shortSide = Math.min(viewport.width, viewport.height);
      var longSide = Math.max(viewport.width, viewport.height);
      if (Math.abs(shortSide - 612) > 4 || Math.abs(longSide - 792) > 4) {
        throw new Error("The cover PDF must be Letter size (8.5 × 11 inches).");
      }
      var orientation = viewport.width > viewport.height ? "landscape" : "portrait";
      var requiredOrientation = currentThemeId() === "modernLandscape" ? "landscape" : "portrait";
      if (orientation !== requiredOrientation) {
        throw new Error("The selected theme uses " + requiredOrientation + " pages. Please upload a " + requiredOrientation + " Letter PDF or change themes first.");
      }
      var printViewport = page.getViewport({ scale: 2.5 });
      var canvas = document.createElement("canvas");
      canvas.width = Math.ceil(printViewport.width);
      canvas.height = Math.ceil(printViewport.height);
      var context = canvas.getContext("2d", { alpha: false });
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: context, viewport: printViewport }).promise;
      var dataUrl = canvas.toDataURL("image/jpeg", 0.96);
      proposal.customCover = {
        enabled: true,
        name: file.name || "Uploaded cover.pdf",
        dataUrl: dataUrl,
        stored: false,
        orientation: orientation
      };
      storeCustomCover(function (stored) {
        proposal.customCover.stored = stored;
        markDirty();
        saveCurrentDraft();
        renderAll();
        flashStatus("Custom cover PDF added.");
      });
      if (typeof pdf.destroy === "function") {
        pdf.destroy();
      }
    } catch (error) {
      console.error(error);
      window.alert(error && error.message ? error.message : "The cover PDF could not be read.");
      flashStatus("Cover PDF not added.");
    } finally {
      input.value = "";
    }
  }

  function modernPortraitCoverSlotKey() {
    return "northlinePortrait|northline-cover|main|context";
  }

  function modernPortraitCoverSelectedId() {
    var selection = proposal.photoSelections[modernPortraitCoverSlotKey()] || {};
    var selected = selectablePhotoOptions().find(function (photo) {
      return photo.id === selection.photoId;
    });
    return selected ? selected.id : "";
  }

  function setModernPortraitCoverPhoto(photoId) {
    var slotKey = modernPortraitCoverSlotKey();
    var selected = photoId && selectablePhotoOptions().find(function (photo) {
      return photo.id === photoId;
    });
    if (selected) {
      proposal.photoSelections[slotKey] = { photoId: selected.id, x: 50, y: 50 };
    } else {
      delete proposal.photoSelections[slotKey];
    }
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function renderSimpleListCard(title, path, hint, togglePath, toggleLabel) {
    var card = panelCard(title, hint || "");
    if (togglePath) {
      var toggleRow = document.createElement("label");
      toggleRow.className = "inline-check";
      var toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.checked = getValue(proposal, togglePath) !== false;
      toggle.addEventListener("change", function () {
        setValue(proposal, togglePath, toggle.checked);
        markDirty();
        renderPreview();
        saveCurrentDraft();
      });
      toggleRow.appendChild(toggle);
      toggleRow.appendChild(document.createTextNode(toggleLabel || " Show on page"));
      card.appendChild(toggleRow);
    }
    var textarea = document.createElement("textarea");
    textarea.value = getValue(proposal, path) || "";
    textarea.placeholder = "One item per line";
    textarea.addEventListener("input", function () {
      setValue(proposal, path, textarea.value);
      clearGeneratedCopy();
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    return card;
  }

  function renderGeneratedListCard(title, hint, value) {
    var card = panelCard(title, hint || "");
    var textarea = document.createElement("textarea");
    textarea.value = value || "";
    textarea.readOnly = true;
    card.appendChild(textarea);
    return card;
  }

  function renderDesignScheduleCard() {
    var card = panelCard("Design Schedule", "Set the duration for each phase.");
    var descriptionField = document.createElement("div");
    descriptionField.className = "field full";
    var descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Schedule intro text";
    var descriptionArea = document.createElement("textarea");
    descriptionArea.value = proposal.schedule.description || "";
    descriptionArea.placeholder = "This text will appear above the schedule on the formatted page.";
    descriptionArea.addEventListener("input", function () {
      proposal.schedule.description = descriptionArea.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    descriptionField.appendChild(descriptionLabel);
    descriptionField.appendChild(descriptionArea);
    card.appendChild(descriptionField);

    var grid = document.createElement("div");
    grid.className = "field-grid";
    scheduleFieldDefs.forEach(function (field) {
      grid.appendChild(renderScheduleField(field));
    });
    card.appendChild(grid);

    var belowTextField = document.createElement("div");
    belowTextField.className = "field full";
    var belowTextLabel = document.createElement("label");
    belowTextLabel.textContent = "Text below schedule";
    var belowTextArea = document.createElement("textarea");
    belowTextArea.value = proposal.schedule.belowText || "";
    belowTextArea.placeholder = "Optional text to appear below the schedule on the formatted page.";
    belowTextArea.addEventListener("input", function () {
      proposal.schedule.belowText = belowTextArea.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    belowTextField.appendChild(belowTextLabel);
    belowTextField.appendChild(belowTextArea);
    card.appendChild(belowTextField);
    return card;
  }

  function renderScheduleField(field) {
    var wrap = document.createElement("div");
    wrap.className = "field";
    var labelRow = document.createElement("div");
    labelRow.className = "field-label-row";
    var label = document.createElement("label");
    var scheduleKey = field.path.replace(/^schedule\./, "");
    label.textContent = phaseLabel(phaseLabelKeyForSchedule(scheduleKey)) || field.label;
    labelRow.appendChild(label);

    var toggleWrap = document.createElement("label");
    toggleWrap.className = "field-chart-toggle";
    var toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = proposal.schedule.includedPhases[scheduleKey] !== false;
    toggle.addEventListener("change", function () {
      proposal.schedule.includedPhases[scheduleKey] = toggle.checked;
      markDirty();
      saveCurrentDraft();
      renderPreview();
    });
    toggleWrap.appendChild(toggle);
    toggleWrap.appendChild(document.createTextNode(" Show in proposal"));
    labelRow.appendChild(toggleWrap);
    wrap.appendChild(labelRow);

    var input = document.createElement("input");
    input.type = "text";
    input.id = "field-" + field.path.replace(/\./g, "-");
    label.setAttribute("for", input.id);
    input.value = getValue(proposal, field.path) || "";
    input.addEventListener("input", function () {
      setValue(proposal, field.path, input.value);
      clearGeneratedCopy();
      markDirty();
      renderPreview();
    });
    wrap.appendChild(input);
    return wrap;
  }

  function renderCompensationCard() {
    var card = panelCard("Compensation", "Add up to three fee structures. Each structure appears once as a chart on the Compensation page.");
    card.appendChild(renderCompensationSourceCard());
    card.appendChild(renderCompensationFeeNotesEditor());
    card.appendChild(renderFeeStructureEditors());

    card.appendChild(renderCompensationListEditor(
      "Additional Services",
      "Use one item per line. The formatted page will number them automatically.",
      "compensation.additionalServicesText",
      "compensation.showAdditionalServices",
      " Show Additional Services"
    ));

    card.appendChild(renderCompensationListEditor(
      "Owner Provided Services",
      "Use one item per line. The formatted page will number them automatically.",
      "compensation.ownerProvidedServicesText",
      "compensation.showOwnerProvidedServices",
      " Show Owner Provided Services"
    ));
    return card;
  }

  function renderCompensationSourceCard() {
    var compensation = proposal.customCompensation || {};
    var card = panelCard("Compensation Page", "Use the app-generated Compensation page or replace it with a complete, one-page Letter PDF.");
    var choices = document.createElement("div");
    choices.className = "cover-source-choices";

    [
      { value: false, label: "Generated page" },
      { value: true, label: "Uploaded PDF" }
    ].forEach(function (choice) {
      var label = document.createElement("label");
      label.className = "cover-source-choice" + (compensation.enabled === choice.value ? " active" : "");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "compensation-source";
      input.checked = compensation.enabled === choice.value;
      input.addEventListener("change", function () {
        if (choice.value && !compensation.dataUrl) {
          var generatedChoice = choices.querySelector('input[name="compensation-source"]');
          if (generatedChoice) {
            generatedChoice.checked = true;
          }
          input.checked = false;
          upload.click();
          return;
        }
        proposal.customCompensation.enabled = choice.value;
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      label.appendChild(input);
      label.appendChild(document.createTextNode(choice.label));
      choices.appendChild(label);
    });
    card.appendChild(choices);

    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = ".pdf,application/pdf";
    upload.className = "cover-pdf-input";
    upload.addEventListener("change", function () {
      var file = upload.files && upload.files[0];
      if (file) {
        importCustomCompensationPdf(file, upload);
      }
    });
    card.appendChild(upload);

    var help = document.createElement("p");
    help.className = "field-help";
    help.textContent = "PDF must contain exactly one Letter-size page (8.5 × 11 in) in the same orientation as the selected theme.";
    card.appendChild(help);

    if (compensation.dataUrl) {
      var currentOrientation = currentThemeId() === "modernLandscape" ? "landscape" : "portrait";
      var summary = document.createElement("div");
      summary.className = "cover-pdf-summary";
      summary.innerHTML = '<img src="' + escapeHtml(compensation.dataUrl) + '" alt="Uploaded Compensation page preview"><div><strong>' + escapeHtml(compensation.name || "Uploaded compensation.pdf") + '</strong><span>' + escapeHtml((compensation.orientation || "letter") + " Letter page") + (compensation.orientation && compensation.orientation !== currentOrientation ? " · orientation differs from the selected theme" : "") + '</span></div>';
      var remove = document.createElement("button");
      remove.type = "button";
      remove.className = "danger compact";
      remove.textContent = "Remove";
      remove.addEventListener("click", function () {
        deletePhotoData(customCompensationAssetId());
        proposal.customCompensation = { enabled: false, name: "", dataUrl: "", stored: false, orientation: "" };
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      summary.appendChild(remove);
      card.appendChild(summary);
    }
    return card;
  }

  async function importCustomCompensationPdf(file, input) {
    if (!file || (!/\.pdf$/i.test(file.name || "") && file.type !== "application/pdf")) {
      window.alert("Please choose a PDF file.");
      input.value = "";
      return;
    }
    flashStatus("Checking Compensation PDF...");
    try {
      if (window.location.protocol === "file:") {
        throw new Error("PDF Compensation page uploads require the local Proposal Bot server. Open the app with start-proposal-bot.bat and try again.");
      }
      var pdfjs = await import("./assets/vendor/pdfjs/pdf.min.js");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("assets/vendor/pdfjs/pdf.worker.min.js", window.location.href).href;
      var bytes = new Uint8Array(await file.arrayBuffer());
      var documentTask = pdfjs.getDocument({ data: bytes });
      var pdf = await documentTask.promise;
      if (pdf.numPages !== 1) {
        throw new Error("The Compensation PDF must contain exactly one page.");
      }
      var page = await pdf.getPage(1);
      var viewport = page.getViewport({ scale: 1 });
      var shortSide = Math.min(viewport.width, viewport.height);
      var longSide = Math.max(viewport.width, viewport.height);
      if (Math.abs(shortSide - 612) > 4 || Math.abs(longSide - 792) > 4) {
        throw new Error("The Compensation PDF must be Letter size (8.5 × 11 inches).");
      }
      var orientation = viewport.width > viewport.height ? "landscape" : "portrait";
      var requiredOrientation = currentThemeId() === "modernLandscape" ? "landscape" : "portrait";
      if (orientation !== requiredOrientation) {
        throw new Error("The selected theme uses " + requiredOrientation + " pages. Please upload a " + requiredOrientation + " Letter PDF or change themes first.");
      }
      var printViewport = page.getViewport({ scale: 2.5 });
      var canvas = document.createElement("canvas");
      canvas.width = Math.ceil(printViewport.width);
      canvas.height = Math.ceil(printViewport.height);
      var context = canvas.getContext("2d", { alpha: false });
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: context, viewport: printViewport }).promise;
      var dataUrl = canvas.toDataURL("image/jpeg", 0.96);
      proposal.customCompensation = {
        enabled: true,
        name: file.name || "Uploaded compensation.pdf",
        dataUrl: dataUrl,
        stored: false,
        orientation: orientation
      };
      storeCustomCompensation(function (stored) {
        proposal.customCompensation.stored = stored;
        markDirty();
        saveCurrentDraft();
        renderAll();
        flashStatus("Custom Compensation PDF added.");
      });
      if (typeof pdf.destroy === "function") {
        pdf.destroy();
      }
    } catch (error) {
      console.error(error);
      window.alert(error && error.message ? error.message : "The Compensation PDF could not be read.");
      flashStatus("Compensation PDF not added.");
    } finally {
      input.value = "";
    }
  }

  function renderFeeStructureEditors() {
    var wrap = document.createElement("div");
    wrap.className = "fee-structure-editors";
    proposal.feeStructures.forEach(function (structure, structureIndex) {
      var section = document.createElement("section");
      section.className = "panel-card fee-structure-editor";
      var head = document.createElement("div");
      head.className = "panel-head";
      head.innerHTML = "<div><h4>Fee Structure " + (structureIndex + 1) + "</h4><p class=\"field-help\">The bold text appears above this chart; the supporting text appears below it.</p></div>";
      if (proposal.feeStructures.length > 1) {
        var remove = document.createElement("button");
        remove.type = "button";
        remove.className = "secondary compact";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
          proposal.feeStructures.splice(structureIndex, 1);
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        head.appendChild(remove);
      }
      section.appendChild(head);

      section.appendChild(renderFeeStructureTextField(structureIndex, "heading", "Bold text above chart", "Optional heading or introduction"));
      section.appendChild(renderFeeStructurePhaseNamesEditor(structureIndex));
      var grid = document.createElement("div");
      grid.className = "field-grid";
      [
        ["concept", feeStructurePhaseLabel(structure, "concept")],
        ["schematic", feeStructurePhaseLabel(structure, "schematic")],
        ["designDevelopment", feeStructurePhaseLabel(structure, "designDevelopment")],
        ["constructionDocuments", feeStructurePhaseLabel(structure, "constructionDocuments")],
        ["bid", feeStructurePhaseLabel(structure, "bid")],
        ["constructionObservation", feeStructurePhaseLabel(structure, "constructionObservation")]
      ].forEach(function (field) {
        grid.appendChild(renderFeeStructureCurrencyField(structureIndex, field[0], field[1]));
      });
      section.appendChild(grid);
      section.appendChild(renderFeeStructureTextField(structureIndex, "belowText", "Text below chart", "Optional supporting text"));
      wrap.appendChild(section);
    });

    if (proposal.feeStructures.length < 3) {
      var add = document.createElement("button");
      add.type = "button";
      add.className = "secondary compact";
      add.textContent = "Add fee structure";
      add.addEventListener("click", function () {
        proposal.feeStructures.push(createFeeStructure());
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      wrap.appendChild(add);
    }
    return wrap;
  }

  function renderFeeStructurePhaseNamesEditor(structureIndex) {
    var structure = proposal.feeStructures[structureIndex];
    var card = panelCard("Chart phase names", "These labels apply only to this fee structure's chart.");
    var grid = document.createElement("div");
    grid.className = "field-grid";
    phaseLabelDefinitions().filter(function (phase) {
      return phase.key !== "permitIfc";
    }).forEach(function (phase) {
      var field = document.createElement("div");
      field.className = "field";
      var label = document.createElement("label");
      var input = document.createElement("input");
      input.type = "text";
      input.id = "fee-structure-" + structureIndex + "-phase-label-" + phase.key;
      input.maxLength = 70;
      input.value = feeStructurePhaseLabel(structure, phase.key);
      label.setAttribute("for", input.id);
      label.textContent = phase.label;
      input.addEventListener("input", function () {
        structure.phaseLabels[phase.key] = input.value;
        markDirty();
        renderPreview();
        saveCurrentDraft();
      });
      input.addEventListener("change", function () {
        structure.phaseLabels = normalizePhaseLabels(structure.phaseLabels);
        markDirty();
        saveCurrentDraft();
        renderAll();
      });
      field.appendChild(label);
      field.appendChild(input);
      grid.appendChild(field);
    });
    card.appendChild(grid);
    return card;
  }

  function renderFeeStructureTextField(structureIndex, key, labelText, placeholder) {
    var field = document.createElement("div");
    field.className = "field";
    var label = document.createElement("label");
    var input = document.createElement("textarea");
    input.id = "fee-structure-" + structureIndex + "-" + key;
    label.setAttribute("for", input.id);
    label.textContent = labelText;
    input.value = proposal.feeStructures[structureIndex][key] || "";
    input.placeholder = placeholder;
    input.addEventListener("input", function () {
      proposal.feeStructures[structureIndex][key] = input.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    field.appendChild(label);
    field.appendChild(input);
    return field;
  }

  function renderFeeStructureCurrencyField(structureIndex, key, labelText) {
    var wrap = document.createElement("div");
    wrap.className = "field";
    var labelRow = document.createElement("div");
    labelRow.className = "field-label-row";
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.type = "text";
    input.id = "fee-structure-" + structureIndex + "-" + key;
    label.setAttribute("for", input.id);
    label.textContent = labelText;
    labelRow.appendChild(label);

    var toggleWrap = document.createElement("label");
    toggleWrap.className = "field-chart-toggle";
    var toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = proposal.feeStructures[structureIndex].includedPhases[key] !== false;
    toggle.addEventListener("change", function () {
      proposal.feeStructures[structureIndex].includedPhases[key] = toggle.checked;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    toggleWrap.appendChild(toggle);
    toggleWrap.appendChild(document.createTextNode(" Show in chart"));
    labelRow.appendChild(toggleWrap);
    wrap.appendChild(labelRow);

    input.value = formatCurrencyInput(proposal.feeStructures[structureIndex][key]);
    input.addEventListener("input", function () {
      proposal.feeStructures[structureIndex][key] = sanitizeCurrencyInput(input.value);
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    input.addEventListener("blur", function () {
      input.value = formatCurrencyInput(proposal.feeStructures[structureIndex][key]);
    });
    wrap.appendChild(input);
    return wrap;
  }

  function renderCompensationFeeNotesEditor() {
    var wrap = document.createElement("div");
    wrap.className = "panel-card";
    var head = document.createElement("div");
    head.className = "panel-head";
    head.innerHTML = "<div><h4>Fee Notes — edit the Compensation notes here</h4><p class=\"field-help\">Default notes automatically follow the CA Design Schedule duration and compensated phases. Editing a note makes it custom; use Reset notes to default to restore automatic updates.</p></div>";
    wrap.appendChild(head);

    var toggleRow = document.createElement("label");
    toggleRow.className = "inline-check";
    var toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = proposal.compensation.showFeeNotes !== false;
    toggle.addEventListener("change", function () {
      proposal.compensation.showFeeNotes = toggle.checked;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    toggleRow.appendChild(toggle);
    toggleRow.appendChild(document.createTextNode(" Show Fee Notes"));
    wrap.appendChild(toggleRow);

    var textarea = document.createElement("textarea");
    textarea.id = "compensation-fee-notes";
    textarea.value = compensationFeeNotesText();
    textarea.placeholder = "One note per line";
    textarea.addEventListener("input", function () {
      proposal.compensation.feeNotesText = textarea.value;
      proposal.compensation.feeNotesAuto = false;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    wrap.appendChild(textarea);

    var referenceField = document.createElement("div");
    referenceField.className = "field full";
    var referenceLabel = document.createElement("label");
    referenceLabel.setAttribute("for", "compensation-fee-notes-reference");
    referenceLabel.textContent = "Reference sentence";
    referenceField.appendChild(referenceLabel);
    var referenceInput = document.createElement("input");
    referenceInput.id = "compensation-fee-notes-reference";
    referenceInput.type = "text";
    referenceInput.value = proposal.compensation.feeNotesReference;
    referenceInput.addEventListener("input", function () {
      proposal.compensation.feeNotesReference = referenceInput.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    referenceField.appendChild(referenceInput);
    wrap.appendChild(referenceField);

    var actions = document.createElement("div");
    actions.className = "section-editor-actions";
    var reset = document.createElement("button");
    reset.type = "button";
    reset.className = "secondary compact";
    reset.textContent = "Reset notes to default";
    reset.addEventListener("click", function () {
      proposal.compensation.feeNotesText = DEFAULT_COMPENSATION_FEE_NOTES_TEXT;
      proposal.compensation.feeNotesAuto = true;
      proposal.compensation.feeNotesReference = DEFAULT_COMPENSATION_FEE_NOTES_REFERENCE;
      markDirty();
      saveCurrentDraft();
      renderAll();
    });
    actions.appendChild(reset);
    wrap.appendChild(actions);
    return wrap;
  }

  function renderCompensationListEditor(title, hint, textPath, togglePath, toggleLabel) {
    var wrap = document.createElement("div");
    wrap.className = "panel-card";
    var head = document.createElement("div");
    head.className = "panel-head";
    head.innerHTML = "<div><h4>" + escapeHtml(title) + "</h4><p class=\"field-help\">" + escapeHtml(hint) + "</p></div>";
    wrap.appendChild(head);

    var toggleRow = document.createElement("label");
    toggleRow.className = "inline-check";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = getValue(proposal, togglePath) === true;
    checkbox.addEventListener("change", function () {
      setValue(proposal, togglePath, checkbox.checked);
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    toggleRow.appendChild(checkbox);
    toggleRow.appendChild(document.createTextNode(toggleLabel));
    wrap.appendChild(toggleRow);

    var textarea = document.createElement("textarea");
    textarea.value = getValue(proposal, textPath) || "";
    textarea.placeholder = "One item per line";
    textarea.addEventListener("input", function () {
      setValue(proposal, textPath, textarea.value);
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    wrap.appendChild(textarea);
    return wrap;
  }

  function renderCurrencyField(path, labelText, emphasize, feeKey) {
    var wrap = document.createElement("div");
    wrap.className = "field";
    var label = document.createElement("label");
    if (feeKey) {
      var labelRow = document.createElement("div");
      labelRow.className = "field-label-row";
      label.textContent = labelText;
      labelRow.appendChild(label);

      var toggleWrap = document.createElement("label");
      toggleWrap.className = "field-chart-toggle";
      var toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.checked = proposal.feeSchedule.includedPhases[feeKey] !== false;
      toggle.addEventListener("change", function () {
        proposal.feeSchedule.includedPhases[feeKey] = toggle.checked;
        markDirty();
        saveCurrentDraft();
        renderPreview();
      });
      toggleWrap.appendChild(toggle);
      toggleWrap.appendChild(document.createTextNode(" Show in chart"));
      labelRow.appendChild(toggleWrap);
      wrap.appendChild(labelRow);
    } else {
      label.textContent = labelText;
      wrap.appendChild(label);
    }
    var input = document.createElement("input");
    input.type = "text";
    input.id = "field-" + path.replace(/\./g, "-");
    label.setAttribute("for", input.id);
    input.value = formatCurrencyInput(getValue(proposal, path) || "");
    if (emphasize) {
      input.className = "currency-emphasis currency-total-input";
    }
    input.addEventListener("input", function () {
      setValue(proposal, path, sanitizeCurrencyInput(input.value));
      if (path !== "compensation.amount") {
        proposal.compensation.amount = calculateCompensationTotal();
        var totalInput = document.querySelector(".currency-total-input");
        if (totalInput) {
          totalInput.value = formatCurrencyInput(proposal.compensation.amount);
        }
      }
      proposal.compensation.amountWords = compensationAmountToWords(proposal.compensation.amount);
      var wordsInput = document.getElementById("field-compensation-amountWords");
      if (wordsInput) {
        wordsInput.value = proposal.compensation.amountWords;
      }
      markDirty();
      renderPreview();
    });
    input.addEventListener("blur", function () {
      input.value = formatCurrencyInput(getValue(proposal, path) || "");
    });
    wrap.appendChild(input);
    return wrap;
  }

  function renderConsultantsCard() {
    var card = panelCard("Consultants", "Choose consultants for this proposal, or add a new consultant to the appropriate list.");
    var groupLabels = {
      "Needed": "Primary Consultants",
      "May be needed": "Secondary Consultants (as needed)",
      "Client coordinated": "Client Coordinated Consultants"
    };
    ["Needed", "May be needed", "Client coordinated"].forEach(function (groupName) {
      var groupWrap = document.createElement("div");
      groupWrap.className = "consultant-group-card";
      groupWrap.innerHTML = "<strong>" + escapeHtml(groupLabels[groupName]) + "</strong>";
      var list = document.createElement("div");
      list.className = "option-list";
      var groupConsultants = proposal.consultants.filter(function (consultant) {
        return consultant.group === groupName;
      });
      groupConsultants.forEach(function (consultant, orderIndex) {
        var itemWrap = document.createElement("div");
        itemWrap.className = "consultant-item-row";
        var row = document.createElement("button");
        row.type = "button";
        row.className = "option-row" + (consultant.included ? " active" : "");
        row.innerHTML = "<strong>" + escapeHtml(consultant.name) + "</strong><span>" + (consultant.included ? "Included in this proposal" : "Not included in this proposal") + "</span>";
        row.addEventListener("click", function () {
          consultant.included = !consultant.included;
          markDirty();
          renderAll();
        });
        itemWrap.appendChild(row);

        var orderControls = document.createElement("div");
        orderControls.className = "consultant-order-controls";
        [
          { label: "Up", offset: -1 },
          { label: "Down", offset: 1 }
        ].forEach(function (control) {
          var button = document.createElement("button");
          button.type = "button";
          button.className = "secondary compact";
          button.textContent = control.label;
          button.disabled = orderIndex + control.offset < 0 || orderIndex + control.offset >= groupConsultants.length;
          button.setAttribute("aria-label", "Move " + consultant.name + " " + control.label.toLowerCase());
          button.addEventListener("click", function () {
            var other = groupConsultants[orderIndex + control.offset];
            var currentIndex = proposal.consultants.indexOf(consultant);
            var otherIndex = proposal.consultants.indexOf(other);
            proposal.consultants[currentIndex] = other;
            proposal.consultants[otherIndex] = consultant;
            markDirty();
            saveCurrentDraft();
            renderAll();
          });
          orderControls.appendChild(button);
        });
        itemWrap.appendChild(orderControls);
        list.appendChild(itemWrap);
      });
      groupWrap.appendChild(list);

      var addRow = document.createElement("div");
      addRow.className = "consultant-add-row";
      var input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Add consultant";
      input.setAttribute("aria-label", "Add a consultant to " + groupLabels[groupName]);
      var addButton = document.createElement("button");
      addButton.type = "button";
      addButton.className = "secondary compact";
      addButton.textContent = "Add";
      var addConsultant = function () {
        var name = input.value.trim();
        if (!name) {
          input.focus();
          return;
        }
        proposal.consultants.push({ name: name, group: groupName, included: true });
        markDirty();
        saveCurrentDraft();
        renderAll();
      };
      addButton.addEventListener("click", addConsultant);
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          addConsultant();
        }
      });
      addRow.appendChild(input);
      addRow.appendChild(addButton);
      groupWrap.appendChild(addRow);
      card.appendChild(groupWrap);
    });
    return card;
  }

  function renderQualificationsCard() {
    var card = panelCard("Our Qualifications", "Edit the narrative and highlighted strengths. Uncheck a strength to hide it from the proposal; its text is kept.");
    var overview = renderField(fieldDef("qualifications.overview", "Overview", "textarea", true));
    card.appendChild(overview);
    var stats = document.createElement("div");
    stats.className = "qualifications-grid";
    proposal.qualifications.stats.forEach(function (stat, index) {
      var statCard = document.createElement("div");
      statCard.className = "qualification-stat-editor";
      var toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.className = "qualification-stat-toggle";
      toggle.checked = stat.included !== false;
      toggle.title = "Include this qualification in the proposal";
      toggle.setAttribute("aria-label", "Include qualification " + (index + 1) + " in the proposal");
      toggle.addEventListener("change", function () {
        stat.included = toggle.checked;
        markDirty();
        renderPreview();
        saveCurrentDraft();
      });
      statCard.appendChild(toggle);
      statCard.appendChild(renderNestedField("qualifications.stats." + index + ".value", "Value"));
      statCard.appendChild(renderNestedField("qualifications.stats." + index + ".label", "Label"));
      statCard.appendChild(renderNestedField("qualifications.stats." + index + ".detail", "Detail", "textarea"));
      stats.appendChild(statCard);
    });
    card.appendChild(stats);
    return card;
  }

  function renderTeamCard() {
    var card = panelCard("Our Team", "Choose how many people are highlighted and edit each person's portrait, name, role, and supporting note.");
    var countField = document.createElement("div");
    countField.className = "field";
    countField.innerHTML = "<label>People to highlight</label>";
    var countSelect = document.createElement("select");
    [1, 2, 3, 4].forEach(function (count) {
      var option = document.createElement("option");
      option.value = String(count);
      option.textContent = String(count);
      countSelect.appendChild(option);
    });
    countSelect.value = String(proposal.team.highlightCount);
    countSelect.addEventListener("change", function () {
      proposal.team.highlightCount = clampTeamCount(countSelect.value);
      markDirty();
      renderPreview();
    });
    countField.appendChild(countSelect);
    card.appendChild(countField);

    var shapeField = document.createElement("div");
    shapeField.className = "field";
    shapeField.innerHTML = "<label>Headshot crop</label>";
    var shapeSelect = document.createElement("select");
    [
      { value: "square", label: "Square" },
      { value: "circle", label: "Circle" }
    ].forEach(function (optionDef) {
      var option = document.createElement("option");
      option.value = optionDef.value;
      option.textContent = optionDef.label;
      shapeSelect.appendChild(option);
    });
    shapeSelect.value = normalizeHeadshotShape(proposal.team.headshotShape);
    shapeSelect.addEventListener("change", function () {
      proposal.team.headshotShape = normalizeHeadshotShape(shapeSelect.value);
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    shapeField.appendChild(shapeSelect);
    card.appendChild(shapeField);

    proposal.team.members.forEach(function (member, index) {
      var memberCard = document.createElement("div");
      memberCard.className = "team-member-editor";
      memberCard.appendChild(renderNestedField("team.members." + index + ".name", "Name"));
      memberCard.appendChild(renderNestedField("team.members." + index + ".title", "Role"));
      memberCard.appendChild(renderNestedField("team.members." + index + ".description", "Description", "textarea"));
      var uploadField = document.createElement("div");
      uploadField.className = "field full";
      uploadField.innerHTML = "<label>Photo</label>";
      var upload = document.createElement("input");
      upload.type = "file";
      upload.accept = "image/*";
      upload.addEventListener("change", function (event) {
        var file = event.target.files && event.target.files[0];
        if (!file) {
          return;
        }
        readFileAsDataUrl(file, function (dataUrl) {
          proposal.team.members[index].photoDataUrl = dataUrl;
          storeTeamMemberPhoto(proposal.team.members[index], function (stored) {
            proposal.team.members[index].photoStored = stored;
            markDirty();
            saveCurrentDraft();
            renderAll();
          });
        });
      });
      uploadField.appendChild(upload);
      if (member.photoDataUrl) {
        uploadField.insertAdjacentHTML("beforeend", '<img class="' + teamHeadshotClass("team-photo-preview") + '" src="' + member.photoDataUrl + '" alt="' + escapeHtml(member.name || "Team member") + '">');
        var clearPhoto = document.createElement("button");
        clearPhoto.type = "button";
        clearPhoto.className = "secondary compact";
        clearPhoto.textContent = "Clear photo";
        clearPhoto.addEventListener("click", function () {
          deletePhotoData(teamMemberPhotoAssetId(proposal.team.members[index]));
          proposal.team.members[index].photoDataUrl = "";
          proposal.team.members[index].photoStored = false;
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        uploadField.appendChild(clearPhoto);
      }
      memberCard.appendChild(uploadField);
      card.appendChild(memberCard);
    });
    return card;
  }

  function renderSignatureCard() {
    var card = panelCard("Signature", "Upload a signature that appears above the typed name on the Thank You page.");
    card.appendChild(renderField(fieldDef("signature.name", "Typed name")));
    card.appendChild(renderField(fieldDef("signature.title", "Title")));
    card.appendChild(renderField(fieldDef("signature.company", "Company", "textarea", true)));
    card.appendChild(renderField(fieldDef("signature.acceptedDate", "Accepted date")));
    var uploadField = document.createElement("div");
    uploadField.className = "field full";
    uploadField.innerHTML = "<label>Signature image</label>";
    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = "image/*";
    upload.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (!file) {
        return;
      }
      readFileAsDataUrl(file, function (dataUrl) {
        proposal.signature.imageDataUrl = dataUrl;
        storeSignatureImage(function (stored) {
          proposal.signature.imageStored = stored;
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
      });
    });
    uploadField.appendChild(upload);
    if (proposal.signature.imageDataUrl) {
      uploadField.insertAdjacentHTML("beforeend", '<img class="signature-preview" src="' + proposal.signature.imageDataUrl + '" alt="Uploaded signature">');
    }
    card.appendChild(uploadField);
    return card;
  }

  function renderGeneralConditionsEditorCard() {
    proposal.generalConditions = normalizeGeneralConditions(proposal.generalConditions);
    var card = panelCard("General Conditions Text", "Edit the conditions that appear under Attachment A. Keep “hourly billing rates:” on its own line so the chart stays in the intended location.");
    var field = document.createElement("div");
    field.className = "field full";
    var label = document.createElement("label");
    label.setAttribute("for", "general-conditions-text");
    label.textContent = "Default General Conditions text";
    field.appendChild(label);
    var textarea = document.createElement("textarea");
    textarea.id = "general-conditions-text";
    textarea.value = proposal.generalConditions.text;
    textarea.addEventListener("input", function () {
      proposal.generalConditions.text = textarea.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    field.appendChild(textarea);
    card.appendChild(field);

    var actions = document.createElement("div");
    actions.className = "section-editor-actions";
    var resetText = document.createElement("button");
    resetText.type = "button";
    resetText.className = "secondary compact";
    resetText.textContent = "Reset text to default";
    resetText.addEventListener("click", function () {
      proposal.generalConditions.text = DEFAULT_GENERAL_CONDITIONS_TEXT;
      markDirty();
      saveCurrentDraft();
      renderAll();
    });
    actions.appendChild(resetText);
    card.appendChild(actions);
    card.appendChild(renderGeneralConditionsRateEditorCard());
    return card;
  }

  function renderGeneralConditionsRateEditorCard() {
    var card = panelCard("Hourly Billing Rates", "Edit the role names and hourly amounts shown in the rate chart.");
    var saveForFuture = document.createElement("button");
    saveForFuture.type = "button";
    saveForFuture.className = "secondary compact";
    saveForFuture.textContent = "Save rates for future use";
    saveForFuture.addEventListener("click", function () {
      if (!writeSavedGeneralConditionsHourlyRates(proposal.generalConditions.hourlyRates)) {
        flashStatus("Hourly rates could not be saved.");
        return;
      }
      renderAll();
      flashStatus("Hourly rates saved for future proposals.");
    });
    card.querySelector(".panel-head").appendChild(saveForFuture);

    var list = document.createElement("div");
    list.className = "general-conditions-rate-editor-list";
    proposal.generalConditions.hourlyRates.forEach(function (rate, index) {
      var row = document.createElement("div");
      row.className = "general-conditions-rate-editor-row";

      var roleField = document.createElement("div");
      roleField.className = "field";
      var roleLabel = document.createElement("label");
      roleLabel.setAttribute("for", "general-conditions-rate-label-" + index);
      roleLabel.textContent = "Role";
      roleField.appendChild(roleLabel);
      var roleInput = document.createElement("input");
      roleInput.id = "general-conditions-rate-label-" + index;
      roleInput.type = "text";
      roleInput.value = rate.label;
      roleInput.addEventListener("input", function () {
        updateGeneralConditionsRate(index, "label", roleInput.value);
        markDirty();
        renderPreview();
        saveCurrentDraft();
      });
      roleField.appendChild(roleInput);
      row.appendChild(roleField);

      var amountField = document.createElement("div");
      amountField.className = "field";
      var amountLabel = document.createElement("label");
      amountLabel.setAttribute("for", "general-conditions-rate-amount-" + index);
      amountLabel.textContent = "Hourly rate";
      amountField.appendChild(amountLabel);
      var amountInput = document.createElement("input");
      amountInput.id = "general-conditions-rate-amount-" + index;
      amountInput.type = "text";
      amountInput.inputMode = "decimal";
      amountInput.value = formatHourlyRateInput(rate.amount);
      amountInput.addEventListener("input", function () {
        updateGeneralConditionsRate(index, "amount", amountInput.value);
        markDirty();
        renderPreview();
        saveCurrentDraft();
      });
      amountInput.addEventListener("blur", function () {
        amountInput.value = formatHourlyRateInput(generalConditionsRateAt(index).amount);
      });
      amountField.appendChild(amountInput);
      row.appendChild(amountField);

      if (proposal.generalConditions.hourlyRates.length > 1) {
        var remove = document.createElement("button");
        remove.type = "button";
        remove.className = "danger compact general-conditions-rate-remove";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
          proposal.generalConditions.hourlyRates.splice(index, 1);
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        row.appendChild(remove);
      }
      list.appendChild(row);
    });
    card.appendChild(list);

    var actions = document.createElement("div");
    actions.className = "section-editor-actions";
    var add = document.createElement("button");
    add.type = "button";
    add.className = "secondary compact";
    add.textContent = "Add rate";
    add.addEventListener("click", function () {
      proposal.generalConditions.hourlyRates.push({ label: "", amount: "" });
      markDirty();
      saveCurrentDraft();
      renderAll();
    });
    actions.appendChild(add);
    var savedRates = readSavedGeneralConditionsHourlyRates();
    if (savedRates.length) {
      var useSaved = document.createElement("button");
      useSaved.type = "button";
      useSaved.className = "secondary compact";
      useSaved.textContent = "Use saved rates";
      useSaved.addEventListener("click", function () {
        proposal.generalConditions.hourlyRates = copyGeneralConditionsHourlyRates(savedRates);
        markDirty();
        saveCurrentDraft();
        renderAll();
        flashStatus("Saved hourly rates applied.");
      });
      actions.appendChild(useSaved);
    }
    var reset = document.createElement("button");
    reset.type = "button";
    reset.className = "secondary compact";
    reset.textContent = "Reset rates to default";
    reset.addEventListener("click", function () {
      proposal.generalConditions.hourlyRates = defaultGeneralConditionsHourlyRates();
      markDirty();
      saveCurrentDraft();
      renderAll();
    });
    actions.appendChild(reset);
    card.appendChild(actions);
    return card;
  }

  function generalConditionsRateAt(index) {
    proposal.generalConditions = normalizeGeneralConditions(proposal.generalConditions);
    if (!proposal.generalConditions.hourlyRates[index]) {
      proposal.generalConditions.hourlyRates[index] = { label: "", amount: "" };
    }
    return proposal.generalConditions.hourlyRates[index];
  }

  function updateGeneralConditionsRate(index, field, value) {
    var rate = generalConditionsRateAt(index);
    rate[field] = field === "amount" ? sanitizeCurrencyInput(value) : String(value || "");
  }

  function renderClientLogosCard() {
    var card = panelCard("Client Logos", "Upload up to two client logos for the Northline cover footer.");
    var logos = proposal.project && Array.isArray(proposal.project.clientLogos) ? proposal.project.clientLogos : [];
    logos.forEach(function (logo, index) {
      var uploadField = document.createElement("div");
      uploadField.className = "field full";
      uploadField.innerHTML = "<label>Client logo " + (index + 1) + "</label>";
      var upload = document.createElement("input");
      upload.type = "file";
      upload.accept = "image/*";
      upload.addEventListener("change", function (event) {
        var file = event.target.files && event.target.files[0];
        if (!file) {
          return;
        }
        readFileAsDataUrl(file, function (dataUrl) {
          proposal.project.clientLogos[index] = {
            name: file.name,
            dataUrl: dataUrl,
            stored: false
          };
          storeClientLogo(index, function (stored) {
            proposal.project.clientLogos[index].stored = stored;
            markDirty();
            saveCurrentDraft();
            renderAll();
          });
        });
      });
      uploadField.appendChild(upload);
      if (logo && logo.dataUrl) {
        uploadField.insertAdjacentHTML("beforeend", '<img class="signature-preview" src="' + logo.dataUrl + '" alt="' + escapeHtml(logo.name || ("Client logo " + (index + 1))) + '" title="' + escapeHtml(logo.name || ("Client logo " + (index + 1))) + '">');
        var clearLogo = document.createElement("button");
        clearLogo.type = "button";
        clearLogo.className = "secondary compact";
        clearLogo.textContent = "Remove logo";
        clearLogo.addEventListener("click", function () {
          proposal.project.clientLogos[index] = { name: "", dataUrl: "", stored: false };
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        uploadField.appendChild(clearLogo);
      }
      card.appendChild(uploadField);
    });
    els.editor.appendChild(card);
  }

  function renderNestedField(path, labelText, type) {
    return renderField(fieldDef(path, labelText, type || "text", type === "textarea"));
  }

  function renderSectionsPanel() {
    els.editor.innerHTML = "";
    var section = sectionDefinitions.find(function (item) { return item.id === activeSectionId; }) || sectionDefinitions[0];
    var phaseId = deliverablePhaseIdForSection(section.id);
    if (phaseId && phaseId !== "conceptDesign") {
      ensurePhaseScopeItems(phaseId, section);
    }
    var card = document.createElement("section");
    card.className = "section-editor";
    card.innerHTML = '<div class="section-editor-head"><div><p class="eyebrow">Section</p><h3>' + escapeHtml(sectionDisplayTitle(section)) + '</h3></div><div class="section-meta"><span class="pill">' + escapeHtml(section.source) + '</span><span class="pill">photo: ' + escapeHtml(section.photoType) + '</span></div></div>';
    var titleField = document.createElement("div");
    titleField.className = "field full";
    var titleLabel = document.createElement("label");
    titleLabel.textContent = "Section title";
    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = sectionDisplayTitle(section);
    titleInput.maxLength = 90;
    titleInput.setAttribute("aria-label", "Section title");
    titleInput.addEventListener("input", function () {
      proposal.sectionTitleOverrides[section.id] = titleInput.value;
      markDirty();
      renderNav();
      renderPreview();
      saveCurrentDraft();
    });
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);
    var resetTitle = document.createElement("button");
    resetTitle.type = "button";
    resetTitle.className = "secondary compact";
    resetTitle.textContent = "Reset title";
    resetTitle.addEventListener("click", function () {
      delete proposal.sectionTitleOverrides[section.id];
      markDirty();
      renderAll();
    });
    titleField.appendChild(resetTitle);
    card.appendChild(titleField);
    if (sectionSupportsFreeformText(section.id)) {
      var generated = section.id === "process" ? getSectionText(section) : editableSectionText(section);
      var presets = renderSectionPresetControls(section);
      card.appendChild(presets.wrap);

      if (section.id === "projectSummary") {
        var summaryParts = ensureProjectSummarySections(section);
        var introCard = panelCard("Project Summary copy", "Intro");
        var introTextarea = document.createElement("textarea");
        introTextarea.value = summaryParts.intro;
        introTextarea.setAttribute("aria-label", "Project Summary intro");
        introTextarea.placeholder = "Enter the introductory text.";
        introCard.appendChild(introTextarea);
        card.appendChild(introCard);

        var summaryTitle = document.createElement("div");
        summaryTitle.className = "section-fixed-title";
        summaryTitle.innerHTML = '<span>Permanent chapter title</span><strong>' + escapeHtml(PROJECT_SUMMARY_FIXED_HEADING) + '</strong>';
        card.appendChild(summaryTitle);

        var summaryCard = panelCard("Project Summary copy", "Project Summary");
        var summaryTextarea = document.createElement("textarea");
        summaryTextarea.value = summaryParts.summary;
        summaryTextarea.setAttribute("aria-label", "Project Summary narrative");
        summaryTextarea.placeholder = "Enter the project summary.";
        summaryCard.appendChild(summaryTextarea);
        card.appendChild(summaryCard);

        var updateProjectSummaryText = function () {
          var intro = normalizeProjectSummaryNarrativeText(introTextarea.value);
          var summary = normalizeProjectSummaryNarrativeText(summaryTextarea.value);
          introTextarea.value = intro;
          summaryTextarea.value = summary;
          proposal.projectSummarySections = {
            intro: intro,
            summary: summary
          };
          proposal.sectionOverrides.projectSummary = composeProjectSummaryText(intro, summary);
          markDirty();
          renderPreview();
          saveCurrentDraft();
        };
        introTextarea.addEventListener("input", updateProjectSummaryText);
        summaryTextarea.addEventListener("input", updateProjectSummaryText);
        presets.attach(introTextarea, function () {
          return composeProjectSummaryText(introTextarea.value, summaryTextarea.value);
        });
      } else if (section.id === "process") {
        var processParts = processSectionTextParts(generated);
        var designTitle = document.createElement("div");
        designTitle.className = "section-fixed-title";
        designTitle.innerHTML = '<span>Permanent chapter title</span><strong>' + escapeHtml(PROCESS_FIXED_HEADING) + '</strong>';
        card.appendChild(designTitle);

        var designTextarea = document.createElement("textarea");
        designTextarea.value = processParts.designTeam;
        designTextarea.setAttribute("aria-label", PROCESS_FIXED_HEADING + " body");
        designTextarea.placeholder = "Enter the Our Design Team text.";
        card.appendChild(designTextarea);

        var scopeTitle = document.createElement("div");
        scopeTitle.className = "section-fixed-title";
        scopeTitle.innerHTML = '<span>Permanent chapter title</span><strong>' + escapeHtml(PROCESS_SCOPE_FIXED_HEADING) + '</strong>';
        card.appendChild(scopeTitle);

        var scopeTextarea = document.createElement("textarea");
        scopeTextarea.value = processParts.scope;
        scopeTextarea.setAttribute("aria-label", PROCESS_SCOPE_FIXED_HEADING + " body");
        scopeTextarea.placeholder = "Enter the Scope of Work / Basic Services text.";
        card.appendChild(scopeTextarea);

        var updateProcessText = function () {
          proposal.sectionOverrides.process = composeProcessSectionText(designTextarea.value, scopeTextarea.value);
          markDirty();
          renderPreview();
          saveCurrentDraft();
        };
        designTextarea.addEventListener("input", updateProcessText);
        scopeTextarea.addEventListener("input", updateProcessText);
        presets.attach(designTextarea, function () {
          return composeProcessSectionText(designTextarea.value, scopeTextarea.value);
        });
      } else {
        var textarea = document.createElement("textarea");
        textarea.value = generated;
        textarea.addEventListener("input", function () {
          proposal.sectionOverrides[section.id] = textarea.value;
          markDirty();
          renderPreview();
          saveCurrentDraft();
        });
        card.appendChild(textarea);
        presets.attach(textarea);
      }
    }

    renderStructuredSectionEditor(section, card);

    if (phaseId) {
      if (phaseId !== "conceptDesign") {
        card.appendChild(renderPhaseScopeItemsCard(phaseId, section));
      }
      card.appendChild(renderDeliverablesChooser(phaseId));
    }

    if (sectionSupportsFreeformText(section.id)) {
      var actions = document.createElement("div");
      actions.className = "section-editor-actions";
      var reset = document.createElement("button");
      reset.type = "button";
      reset.className = "secondary compact";
      reset.textContent = "Reset to generated";
      reset.addEventListener("click", function () {
        delete proposal.sectionOverrides[section.id];
        if (section.id === "projectSummary") {
          delete proposal.projectSummarySections;
        }
        markDirty();
        renderAll();
      });
      actions.appendChild(reset);
      card.appendChild(actions);
    }
    els.editor.appendChild(card);
  }

  function sectionSupportsFreeformText(sectionId) {
    return {
      designSchedulePage: false,
      consultantsPage: false,
      compensationPage: false,
      ourTeam: false,
      signature: false,
      generalConditionsPage: false,
      attachmentsPage: false
    }[sectionId] !== false;
  }

  function renderStructuredSectionEditor(section, card) {
    if (supportsLandscapeImageLayout(section.id)) {
      card.appendChild(renderLandscapeLayoutCard(section.id));
    }
    if (section.id === "projectSummary") {
      card.appendChild(renderSimpleListCard("Basic owner Requirements:", "project.ownerRequirements", "One item per line.", "project.showOwnerRequirements", " Show Basic owner requirements"));
      card.appendChild(renderSimpleListCard("Owner provided information:", "project.ownerProvidedInfo", "One item per line.", "project.showOwnerProvidedInfo", " Show Owner provided information"));
      card.appendChild(renderSimpleListCard("Deliverables:", "project.summaryDeliverables", "One item per line.", "project.showSummaryDeliverables", " Show Deliverables"));
      return;
    }
    if (section.id === "process") {
      card.appendChild(renderProcessAssumptionsCard());
      return;
    }
    if (section.id === "biddingConstructionAdministration") {
      card.appendChild(renderConstructionAdministrationItemsCard());
      return;
    }
    if (section.id === "designSchedulePage") {
      card.appendChild(renderDesignScheduleCard());
      return;
    }
    if (section.id === "consultantsPage") {
      card.appendChild(renderConsultantsCard());
      return;
    }
    if (section.id === "compensationPage") {
      card.appendChild(renderCompensationCard());
      return;
    }
    if (section.id === "ourQualifications") {
      card.appendChild(renderQualificationsCard());
      return;
    }
    if (section.id === "ourTeam") {
      card.appendChild(renderTeamCard());
      return;
    }
    if (section.id === "signature") {
      card.appendChild(renderSignatureCard());
      return;
    }
    if (section.id === "generalConditionsPage") {
      card.appendChild(renderGeneralConditionsEditorCard());
      return;
    }
    if (section.id === "attachmentsPage") {
      card.appendChild(renderAttachmentsEditorCard());
    }
  }

  function renderAttachmentsEditorCard() {
    proposal.attachments = normalizeAttachments(proposal.attachments);
    var card = panelCard("Attachment Pages", "Choose the attachment count, then set the page count and optional image or PDF for every page. PDF uploads add each PDF page in sequence.");

    var countRow = document.createElement("div");
    countRow.className = "attachment-count-row";
    var countField = document.createElement("div");
    countField.className = "field";
    var countLabel = document.createElement("label");
    countLabel.setAttribute("for", "attachment-count");
    countLabel.textContent = "Number of attachments";
    var countInput = document.createElement("input");
    countInput.id = "attachment-count";
    countInput.type = "number";
    countInput.min = "0";
    countInput.max = "26";
    countInput.step = "1";
    countInput.value = proposal.attachments.length;
    countInput.addEventListener("input", function () {
      setAttachmentCount(countInput.value);
    });
    countField.appendChild(countLabel);
    countField.appendChild(countInput);
    countRow.appendChild(countField);
    var countHelp = document.createElement("p");
    countHelp.className = "field-help";
    countHelp.textContent = "Attachments are added after the proposal. Reducing this number removes attachments from the end of the list.";
    countRow.appendChild(countHelp);
    card.appendChild(countRow);

    if (!proposal.attachments.length) {
      var empty = document.createElement("div");
      empty.className = "attachment-editor-empty";
      empty.textContent = "No attachment pages will be added to this proposal.";
      card.appendChild(empty);
      return card;
    }

    var list = document.createElement("div");
    list.className = "attachment-editor-list";
    proposal.attachments.forEach(function (attachment, attachmentIndex) {
      list.appendChild(renderAttachmentEditorItem(attachment, attachmentIndex));
    });
    card.appendChild(list);
    return card;
  }

  function renderAttachmentEditorItem(attachment, attachmentIndex) {
    var item = document.createElement("section");
    item.className = "attachment-editor-item";

    var heading = document.createElement("div");
    heading.className = "attachment-editor-heading";
    var headingCopy = document.createElement("div");
    headingCopy.innerHTML = '<span>Attachment ' + escapeHtml(attachmentLetter(attachmentIndex)) + '</span><strong>' + escapeHtml(attachment.title) + '</strong>';
    var removeAttachment = document.createElement("button");
    removeAttachment.type = "button";
    removeAttachment.className = "danger compact";
    removeAttachment.textContent = "Remove";
    removeAttachment.addEventListener("click", function () {
      removeAttachmentAt(attachmentIndex);
    });
    heading.appendChild(headingCopy);
    heading.appendChild(removeAttachment);
    item.appendChild(heading);

    var fields = document.createElement("div");
    fields.className = "attachment-editor-fields";
    var titleField = document.createElement("div");
    titleField.className = "field";
    var titleLabel = document.createElement("label");
    titleLabel.textContent = "Attachment Title";
    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = attachment.title;
    titleInput.placeholder = "Attachment " + attachmentLetter(attachmentIndex);
    titleInput.addEventListener("input", function () {
      attachment.title = titleInput.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    var subtitleField = document.createElement("div");
    subtitleField.className = "field attachment-subtitle-field";
    var subtitleLabel = document.createElement("label");
    subtitleLabel.textContent = "Subtitle (optional)";
    var subtitleInput = document.createElement("input");
    subtitleInput.type = "text";
    subtitleInput.value = attachment.subtitle || "";
    subtitleInput.placeholder = "Additional subtitle";
    subtitleInput.addEventListener("input", function () {
      attachment.subtitle = subtitleInput.value;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    subtitleField.appendChild(subtitleLabel);
    subtitleField.appendChild(subtitleInput);

    var pagesField = document.createElement("div");
    pagesField.className = "field";
    var pagesLabel = document.createElement("label");
    pagesLabel.textContent = "Number of pages";
    var pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.min = "1";
    pagesInput.max = "50";
    pagesInput.step = "1";
    pagesInput.value = attachment.pages.length;
    pagesInput.addEventListener("input", function () {
      setAttachmentPageCount(attachment, pagesInput.value);
    });
    pagesField.appendChild(pagesLabel);
    pagesField.appendChild(pagesInput);
    fields.appendChild(titleField);
    fields.appendChild(pagesField);
    fields.appendChild(subtitleField);
    item.appendChild(fields);

    var pageList = document.createElement("div");
    pageList.className = "attachment-page-editor-list";
    attachment.pages.forEach(function (page, pageIndex) {
      pageList.appendChild(renderAttachmentPageEditor(attachment, page, pageIndex));
    });
    item.appendChild(pageList);
    return item;
  }

  function renderAttachmentPageEditor(attachment, page, pageIndex) {
    var row = document.createElement("div");
    row.className = "attachment-page-editor" + (page.imageDataUrl ? " has-image" : "");
    var preview = document.createElement("div");
    preview.className = "attachment-page-editor-preview";
    if (page.imageDataUrl) {
      var image = document.createElement("img");
      image.src = page.imageDataUrl;
      image.alt = page.imageName || (attachment.title + " page " + (pageIndex + 1));
      preview.appendChild(image);
    } else {
      var blank = document.createElement("span");
      blank.textContent = "Blank page";
      preview.appendChild(blank);
    }
    row.appendChild(preview);

    var controls = document.createElement("div");
    controls.className = "attachment-page-editor-controls";
    var label = document.createElement("strong");
    label.textContent = "Page " + (pageIndex + 1);
    var status = document.createElement("span");
    status.textContent = page.imageName || "No image or PDF selected";
    var upload = document.createElement("input");
    upload.type = "file";
    upload.accept = "image/*,.pdf,application/pdf";
    upload.setAttribute("aria-label", "Upload image or PDF for " + attachment.title + " page " + (pageIndex + 1));
    upload.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) {
        if (isPdfFile(file)) {
          importAttachmentPagePdf(attachment, pageIndex, file, upload);
        } else {
          uploadAttachmentPageImage(attachment, page, file);
        }
      }
    });
    controls.appendChild(label);
    controls.appendChild(status);
    controls.appendChild(upload);
    if (page.imageDataUrl || page.imageStored) {
      var clear = document.createElement("button");
      clear.type = "button";
      clear.className = "secondary compact";
      clear.textContent = "Remove file";
      clear.addEventListener("click", function () {
        clearAttachmentPageImage(page);
      });
      controls.appendChild(clear);
    }
    row.appendChild(controls);
    return row;
  }

  function setAttachmentCount(value) {
    var count = Math.max(0, Math.min(26, Math.round(Number(value) || 0)));
    proposal.attachments = normalizeAttachments(proposal.attachments);
    if (count < proposal.attachments.length) {
      proposal.attachments.splice(count).forEach(deleteAttachmentAssets);
    }
    while (proposal.attachments.length < count) {
      var index = proposal.attachments.length;
      proposal.attachments.push({
        id: createAttachmentId(),
        title: "Attachment " + attachmentLetter(index),
        pageCount: 1,
        pages: [createAttachmentPage()]
      });
    }
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function removeAttachmentAt(index) {
    var removed = proposal.attachments.splice(index, 1)[0];
    if (removed) {
      deleteAttachmentAssets(removed);
    }
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function setAttachmentPageCount(attachment, value) {
    var count = clampAttachmentPageCount(value);
    attachment.pages = Array.isArray(attachment.pages) ? attachment.pages : [];
    if (count < attachment.pages.length) {
      attachment.pages.splice(count).forEach(deleteAttachmentPageImageAsset);
    }
    while (attachment.pages.length < count) {
      attachment.pages.push(createAttachmentPage());
    }
    attachment.pageCount = attachment.pages.length;
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function uploadAttachmentPageImage(attachment, page, file) {
    if (!file || !/^image\//.test(String(file.type || ""))) {
      flashStatus("Please choose an image file for the attachment page.");
      return;
    }
    readFileAsDataUrl(file, function (dataUrl) {
      page.imageName = file.name || "Attachment image";
      page.imageDataUrl = dataUrl;
      page.imageStored = false;
      storeAttachmentPageImage(page, function (stored) {
        page.imageStored = stored;
        markDirty();
        saveCurrentDraft();
        renderAll();
        flashStatus("Attachment page image added.");
      });
    });
  }

  function isPdfFile(file) {
    return Boolean(file) && (/\.pdf$/i.test(String(file.name || "")) || String(file.type || "") === "application/pdf");
  }

  async function importAttachmentPagePdf(attachment, startPageIndex, file, input) {
    if (!isPdfFile(file)) {
      flashStatus("Please choose an image or PDF file for the attachment page.");
      return;
    }

    flashStatus("Importing attachment PDF...");
    try {
      if (window.location.protocol === "file:") {
        throw new Error("PDF attachment uploads require the local Proposal Bot server. Open the app with start-proposal-bot.bat and try again.");
      }
      var pdfjs = await import("./assets/vendor/pdfjs/pdf.min.js");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("assets/vendor/pdfjs/pdf.worker.min.js", window.location.href).href;
      var bytes = new Uint8Array(await file.arrayBuffer());
      var documentTask = pdfjs.getDocument({ data: bytes });
      var pdf = await documentTask.promise;
      var availablePageSlots = 50 - startPageIndex;
      if (pdf.numPages > availablePageSlots) {
        throw new Error("This PDF has " + pdf.numPages + " pages, but only " + availablePageSlots + " attachment page" + (availablePageSlots === 1 ? " is" : "s are") + " available here. Attachments can contain up to 50 pages.");
      }

      var renderedPages = [];
      for (var pdfPageIndex = 1; pdfPageIndex <= pdf.numPages; pdfPageIndex += 1) {
        var pdfPage = await pdf.getPage(pdfPageIndex);
        var viewport = pdfPage.getViewport({ scale: 2 });
        var canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        var context = canvas.getContext("2d", { alpha: false });
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        await pdfPage.render({ canvasContext: context, viewport: viewport }).promise;
        renderedPages.push(canvas.toDataURL("image/jpeg", 0.94));
      }

      attachment.pages = Array.isArray(attachment.pages) ? attachment.pages : [];
      while (attachment.pages.length < startPageIndex + renderedPages.length) {
        attachment.pages.push(createAttachmentPage());
      }
      attachment.pageCount = attachment.pages.length;

      var importedPages = renderedPages.map(function (dataUrl, offset) {
        var attachmentPage = attachment.pages[startPageIndex + offset];
        attachmentPage.imageName = (file.name || "Attachment.pdf") + " — page " + (offset + 1);
        attachmentPage.imageDataUrl = dataUrl;
        attachmentPage.imageStored = false;
        return attachmentPage;
      });
      var stored = await Promise.all(importedPages.map(function (attachmentPage) {
        return new Promise(function (resolve) {
          storeAttachmentPageImage(attachmentPage, resolve);
        });
      }));
      importedPages.forEach(function (attachmentPage, index) {
        attachmentPage.imageStored = stored[index] === true;
      });
      markDirty();
      saveCurrentDraft();
      renderAll();
      flashStatus("Added " + importedPages.length + " PDF page" + (importedPages.length === 1 ? "" : "s") + " to " + (attachment.title || "the attachment") + ".");
      if (typeof pdf.destroy === "function") {
        pdf.destroy();
      }
    } catch (error) {
      console.error(error);
      window.alert(error && error.message ? error.message : "The attachment PDF could not be read.");
      flashStatus("Attachment PDF not added.");
    } finally {
      input.value = "";
    }
  }

  function clearAttachmentPageImage(page) {
    deleteAttachmentPageImageAsset(page);
    page.imageName = "";
    page.imageDataUrl = "";
    page.imageStored = false;
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function deleteAttachmentAssets(attachment) {
    (attachment && Array.isArray(attachment.pages) ? attachment.pages : []).forEach(deleteAttachmentPageImageAsset);
  }

  function renderLandscapeLayoutCard(sectionId) {
    var card = panelCard("Page Image Layout", "Keep the same theme, but switch this page to a wide image. Drag the top edge of the image box in the preview to resize it.");
    var toggleRow = document.createElement("label");
    toggleRow.className = "inline-check";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = usesLandscapeImageLayout(sectionId);
    checkbox.addEventListener("change", function () {
      proposal.sectionLandscapeLayouts = normalizeSectionLandscapeLayouts(proposal.sectionLandscapeLayouts);
      proposal.sectionLandscapeLayouts[sectionId] = checkbox.checked;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    toggleRow.appendChild(checkbox);
    toggleRow.appendChild(document.createTextNode(" Use landscape image layout on this page"));
    card.appendChild(toggleRow);
    return card;
  }

  function deliverablePhaseIdForSection(sectionId) {
    return {
      conceptDesignPage: "conceptDesign",
      schematicDesignPage: "schematicDesign",
      designDevelopmentPage: "designDevelopment"
    }[sectionId] || "";
  }

  function ensurePhaseScopeItems(phaseId, section) {
    proposal.phaseScopeItems = proposal.phaseScopeItems && typeof proposal.phaseScopeItems === "object" ? proposal.phaseScopeItems : {};
    var title = phaseTitleForSection(section && section.id);
    var parsedParts = title ? phaseScopeTextParts(getSectionText(section), title) : { items: [] };
    if (!Object.prototype.hasOwnProperty.call(proposal.phaseScopeItems, phaseId)) {
      proposal.phaseScopeItems[phaseId] = parsedParts.items.join("\n");
    }
    return String(proposal.phaseScopeItems[phaseId] || "");
  }

  function renderPhaseScopeItemsCard(phaseId, section) {
    var card = panelCard("Scope Items", "One item per line.");
    var fixedTitle = document.createElement("div");
    fixedTitle.className = "section-fixed-title";
    fixedTitle.innerHTML = '<span>Permanent list title</span><strong>' + escapeHtml(PHASE_SCOPE_FIXED_HEADING) + '</strong>';
    card.appendChild(fixedTitle);
    var textarea = document.createElement("textarea");
    textarea.value = ensurePhaseScopeItems(phaseId, section);
    textarea.placeholder = "One item per line";
    textarea.setAttribute("aria-label", phaseTitleForSection(section.id) + " scope items");
    textarea.addEventListener("input", function () {
      proposal.phaseScopeItems[phaseId] = uniqueCleanLines(textarea.value.split(/\r?\n/).map(function (line) {
        return line.replace(/^(?:[•*-]|â€¢)\s+/, "").trim();
      })).join("\n");
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    return card;
  }

  function renderProcessAssumptionsCard() {
    var card = panelCard("M+A Assumptions", "One item per line.");
    var toggleRow = document.createElement("label");
    toggleRow.className = "inline-check";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = proposal.project.showMaAssumptionsInProcess !== false;
    checkbox.addEventListener("change", function () {
      proposal.project.showMaAssumptionsInProcess = checkbox.checked;
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    toggleRow.appendChild(checkbox);
    toggleRow.appendChild(document.createTextNode(" Show assumptions on the Process / Scope page"));
    card.appendChild(toggleRow);

    var textarea = document.createElement("textarea");
    textarea.value = proposal.project.maAssumptions || "";
    textarea.placeholder = "One item per line";
    textarea.addEventListener("input", function () {
      proposal.project.maAssumptions = textarea.value;
      proposal.project.maAssumptionsAuto = false;
      clearGeneratedCopy();
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    return card;
  }

  function renderConstructionAdministrationItemsCard() {
    var card = panelCard("Construction Administration Items", "One item per line.");
    var fixedTitle = document.createElement("div");
    fixedTitle.className = "section-fixed-title";
    fixedTitle.innerHTML = '<span>Permanent list title</span><strong>This phase includes the following:</strong>';
    card.appendChild(fixedTitle);
    var textarea = document.createElement("textarea");
    textarea.value = constructionAdministrationListItems().join("\n");
    textarea.placeholder = "One item per line";
    textarea.setAttribute("aria-label", "Construction Administration items");
    textarea.addEventListener("input", function () {
      proposal.constructionAdministrationItems = uniqueCleanLines(textarea.value.split(/\r?\n/).map(function (line) {
        return line.replace(/^(?:[•*-]|â€¢)\s+/, "").trim();
      })).join("\n");
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    return card;
  }

  function renderDeliverablesChooser(phaseId) {
    proposal.deliverables = proposal.deliverables || {};
    proposal.deliverables[phaseId] = normalizeDeliverableItems(proposal.deliverables[phaseId], phaseId);

    var card = panelCard("Deliverables", "One item per line.");
    var textarea = document.createElement("textarea");
    textarea.value = selectedDeliverableNames(phaseId).join("\n");
    textarea.placeholder = "One item per line";
    textarea.setAttribute("aria-label", phaseTitleForSection(phasePageSectionId(phaseId)) + " deliverables");
    textarea.addEventListener("input", function () {
      setPhaseDeliverableNames(phaseId, textarea.value);
      markDirty();
      renderPreview();
      saveCurrentDraft();
    });
    card.appendChild(textarea);
    return card;
  }

  function setPhaseDeliverableNames(phaseId, value) {
    proposal.deliverables = proposal.deliverables || {};
    var current = normalizeDeliverableItems(proposal.deliverables[phaseId], phaseId);
    var names = uniqueCleanLines(String(value || "").split(/\r?\n/).map(function (line) {
      return line.replace(/^(?:[•*-]|â€¢)\s+/, "").trim();
    }));
    var includedKeys = {};
    names.forEach(function (name) {
      includedKeys[normalizeTitle(name)] = true;
      forgetDeletedDeliverable(phaseId, name);
    });
    current.forEach(function (item) {
      if (!includedKeys[normalizeTitle(item.name)]) {
        rememberDeletedDeliverable(phaseId, item.name);
      }
    });
    proposal.deliverables[phaseId] = names.map(function (name) {
      return { name: name, included: true };
    });
  }

  function moveDeliverableItem(phaseId, index, direction) {
    proposal.deliverables = proposal.deliverables || {};
    proposal.deliverables[phaseId] = normalizeDeliverableItems(proposal.deliverables[phaseId], phaseId);
    var list = proposal.deliverables[phaseId];
    var targetIndex = index + direction;
    if (!Array.isArray(list) || targetIndex < 0 || targetIndex >= list.length) {
      return;
    }
    var moved = list.splice(index, 1)[0];
    list.splice(targetIndex, 0, moved);
    markDirty();
    saveCurrentDraft();
    renderAll();
  }

  function renderSectionPresetControls(section) {
    var wrap = document.createElement("div");
    wrap.className = "section-preset-tools";
    wrap.innerHTML = "<strong>Saved text</strong>";

    var row = document.createElement("div");
    row.className = "section-preset-row";
    var select = document.createElement("select");
    var blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "Select saved text";
    select.appendChild(blank);
    var presets = savedTextPresetsFor(section.id);
    presets.forEach(function (preset, index) {
      var option = document.createElement("option");
      option.value = String(index);
      option.textContent = preset.name;
      select.appendChild(option);
    });
    row.appendChild(select);

    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Save current text as...";
    row.appendChild(nameInput);

    var save = document.createElement("button");
    save.type = "button";
    save.className = "secondary compact";
    save.textContent = "Save";
    row.appendChild(save);

    var apply = document.createElement("button");
    apply.type = "button";
    apply.className = "secondary compact";
    apply.textContent = "Apply";
    row.appendChild(apply);

    var remove = document.createElement("button");
    remove.type = "button";
    remove.className = "danger compact";
    remove.textContent = "Delete";
    row.appendChild(remove);

    wrap.appendChild(row);

    return {
      wrap: wrap,
      attach: function (textarea, valueGetter) {
        save.addEventListener("click", function () {
          var name = nameInput.value.trim();
          if (!name) {
            return;
          }
          saveTextPreset(section.id, { name: name, text: valueGetter ? valueGetter() : textarea.value });
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        apply.addEventListener("click", function () {
          var list = savedTextPresetsFor(section.id);
          var preset = list[Number(select.value)];
          if (!preset) {
            return;
          }
          proposal.sectionOverrides[section.id] = section.id === "process"
            ? stripProcessFixedHeading(preset.text)
            : preset.text;
          if (section.id === "projectSummary") {
            proposal.projectSummarySections = parseProjectSummaryText(preset.text);
          }
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
        remove.addEventListener("click", function () {
          var index = Number(select.value);
          var list = savedTextPresetsFor(section.id);
          if (!list[index]) {
            return;
          }
          deleteTextPreset(section.id, index);
          markDirty();
          saveCurrentDraft();
          renderAll();
        });
      }
    };
  }

  function renderField(field) {
    var wrap = document.createElement("div");
    wrap.className = "field" + (field.full || field.type === "textarea" ? " full" : "");
    var id = "field-" + field.path.replace(/\./g, "-");
    var label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = field.label;
    wrap.appendChild(label);
    var input = field.type === "textarea" ? document.createElement("textarea") : field.type === "select" ? document.createElement("select") : document.createElement("input");
    input.id = id;
    if (input.tagName === "INPUT") {
      input.type = field.type === "date" ? "date" : "text";
    }
    input.placeholder = field.placeholder || "";
    input.value = getValue(proposal, field.path) || "";
    input.addEventListener("input", function () {
      setValue(proposal, field.path, input.value);
      if (field.path === "compensation.amount") {
        proposal.compensation.amountWords = compensationAmountToWords(input.value);
        var wordsInput = document.getElementById("field-compensation-amountWords");
        if (wordsInput) {
          wordsInput.value = proposal.compensation.amountWords;
        }
      }
      if (field.path === "project.program") {
        syncProgramDerivedLists();
      }
      if (shouldRefreshGeneratedCopy(field.path)) {
        clearGeneratedCopy();
      }
      markDirty();
      renderPreview();
      saveCurrentDraft();
      updateHeader();
    });
    wrap.appendChild(input);
    return wrap;
  }

  function projectContext() {
    var p = proposal.project || {};
    var program = compactSentence(p.program, "the proposed development");
    var scope = compactSentence(p.scopeOfWork, "architectural design services");
    var ownerRequirements = cleanLines(String(p.ownerRequirements || "").split(/\r?\n/));
    var ownerProvidedInfo = cleanLines(String(p.ownerProvidedInfo || "").split(/\r?\n/));
    var summaryDeliverables = cleanLines(String(p.summaryDeliverables || "").split(/\r?\n/));
    var maAssumptions = cleanLines(String(p.maAssumptions || "").split(/\r?\n/));
    var programNotes = splitProgramNotes(p.program);
    var programRequirementItems = programNotes.map(function (note) {
      return formatProgramNote(note, "requirement");
    }).filter(Boolean);
    var programAssumptionItems = programNotes.map(function (note) {
      return formatProgramNote(note, "assumption");
    }).filter(Boolean);
    var projectName = p.projectName || "the project";
    var location = p.projectLocation || p.siteDescription || "the project site";
    var site = p.siteDescription || location;
    var clientCompany = p.clientCompany || "the Owner";
    var projectType = inferProjectType(program + " " + projectName);
    return {
      projectName: projectName,
      location: location,
      site: site,
      clientCompany: clientCompany,
      clientReference: clientCompany === "the Owner" ? "the Owner" : clientCompany,
      projectReference: projectName === "the project" ? "this project" : projectName,
      projectType: projectType,
      projectTypePlural: pluralProjectType(projectType),
      programSummary: lowerFirst(program),
      scopeSummary: lowerFirst(scope),
      programNotes: programNotes,
      ownerRequirements: ownerRequirements,
      ownerProvidedInfo: ownerProvidedInfo,
      summaryDeliverables: summaryDeliverables,
      ownerRequirementSummary: summarizeList(programRequirementItems, "the Owner's stated project requirements"),
      ownerProvidedSummary: summarizeList(ownerProvidedInfo, "the information to be provided by the Owner"),
      maAssumptions: maAssumptions,
      maAssumptionSummary: summarizeList(programAssumptionItems, "the assumptions listed in the Project Information"),
      designIntent: inferDesignIntent(program, scope)
    };
  }

  function syncProgramDerivedLists() {
    proposal.project = proposal.project || {};
    if (proposal.project.maAssumptionsAuto === false) {
      return;
    }
    proposal.project.maAssumptions = inferredAssumptions().join("\n");
    proposal.project.maAssumptionsAuto = true;
  }

  function renderPreview() {
    var theme = currentThemeId();
    els.preview.classList.toggle("theme-modern-landscape", theme === "modernLandscape");
    els.preview.classList.toggle("theme-northline-portrait", theme === "northlinePortrait");
    els.preview.classList.toggle("theme-structured-portrait", theme === "maOg" || theme === "studioPortrait");
    els.preview.classList.toggle("theme-studio-portrait", theme === "studioPortrait");
    document.body.classList.toggle("printing-modern-landscape", theme === "modernLandscape");
    document.body.classList.toggle("printing-northline-portrait", theme === "northlinePortrait");
    document.body.classList.toggle("printing-structured-portrait", theme === "maOg" || theme === "studioPortrait");
    ensurePrintPageSize();
    photoSelectionsChanged = false;
    (els.preview._textFrameObservers || []).forEach(function (observer) { observer.disconnect(); });
    els.preview._textFrameObservers = [];
    els.preview.innerHTML = optimizePreviewImageMarkup(renderProposalPages());
    ProposalTextFlow.mount(els.preview);
    boldAttachmentReferences(els.preview);
    syncPreviewPhotoPanState();
    if (photoSelectionsChanged && canSavePhotoSelectionsNow()) {
      saveCurrentDraft();
      photoSelectionsChanged = false;
    }
    syncPreviewToActiveSection();
  }

  function optimizePreviewImageMarkup(html) {
    return String(html || "").replace(/<img\b(?![^>]*\bloading=)/gi, '<img loading="lazy" decoding="async" ');
  }

  function boldAttachmentReferences(container) {
    var referencePattern = /\bsee\s+attachment\s+[A-Z]+\b/gi;
    var textNodes = [];
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    var node;

    while ((node = walker.nextNode())) {
      if (!node.parentElement || !node.parentElement.closest("strong, b")) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(function (textNode) {
      var text = textNode.nodeValue;
      var match;
      var lastIndex = 0;
      var fragment = document.createDocumentFragment();
      referencePattern.lastIndex = 0;

      while ((match = referencePattern.exec(text))) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        var reference = document.createElement("strong");
        reference.textContent = match[0];
        fragment.appendChild(reference);
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        textNode.parentNode.replaceChild(fragment, textNode);
      }
    });
  }

  function syncPreviewToActiveSection() {
    if (activeTab !== "sections" || !els.preview) {
      return;
    }
    var selector = '.proposal-page[data-section-id~="' + cssEscape(activeSectionId) + '"]';
    var page = els.preview.querySelector(selector);
    if (!page) {
      return;
    }
    page.scrollIntoView({ block: "start", inline: "nearest" });
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }
    return String(value || "").replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function pageSectionIdsAttribute(page) {
    return page && Array.isArray(page.sectionIds) && page.sectionIds.length
      ? ' data-section-id="' + escapeHtml(page.sectionIds.join(" ")) + '"'
      : "";
  }

  function proposalPageSubtitle(page) {
    return page && page.subtitle
      ? '<p class="proposal-page-subtitle">' + escapeHtml(page.subtitle) + '</p>'
      : "";
  }

  function renderProposalPages() {
    if (currentThemeId() === "modernLandscape") {
      return renderModernLandscapePages();
    }
    if (currentThemeId() === "northlinePortrait") {
      return renderNorthlinePortraitPages();
    }
    return renderStructuredPortraitPages(currentThemeId() === "studioPortrait").join("");
  }

  function renderSelectedCoverPage(generatedCover) {
    var cover = proposal.customCover || {};
    if (!cover.enabled || !cover.dataUrl) {
      return generatedCover;
    }
    return '<article class="proposal-page custom-cover-page' + (currentThemeId() === "modernLandscape" ? " modern-page" : "") + '" data-section="cover intro">' +
      '<img class="custom-cover-image" src="' + escapeHtml(cover.dataUrl) + '" alt="' + escapeHtml(cover.name || "Uploaded PDF cover") + '">' +
      '</article>';
  }

  function renderSelectedCompensationPage(page, generatedPage) {
    generatedPage = ProposalTextFlow.decorate(page, generatedPage);
    var compensation = proposal.customCompensation || {};
    if (!page || !Array.isArray(page.sectionIds) || page.sectionIds.indexOf("compensationPage") < 0 || !compensation.enabled || !compensation.dataUrl) {
      return generatedPage;
    }
    return '<article class="proposal-page custom-compensation-page' + (currentThemeId() === "modernLandscape" ? " modern-page" : "") + '" data-section="Compensation" data-section-id="compensationPage">' +
      '<img class="custom-compensation-image" src="' + escapeHtml(compensation.dataUrl) + '" alt="' + escapeHtml(compensation.name || "Uploaded PDF Compensation page") + '">' +
      '</article>';
  }

  function renderStructuredPortraitPages(isStudio) {
    var pages = [];
    var pageModels = buildStructuredPageModels();
    pages.push(renderSelectedCoverPage(renderStructuredCoverPage(isStudio)));
    pages.push(renderStructuredTableOfContentsPage(pageModels, isStudio));
    pageModels.forEach(function (page, index) {
      pages.push(renderSelectedCompensationPage(page, renderStructuredBodyPage(page, index + 2, isStudio)));
    });
    return pages;
  }

  function buildStructuredPageModels() {
    var pages = [];
    if (isSectionIncluded("projectSummary")) {
      pages = pages.concat(buildProjectSummaryPageModels());
    }
    if (isSectionIncluded("ourQualifications")) {
      pages.push({ key: "our-qualifications", header: "Our Qualifications", photoType: "design", sectionIds: ["ourQualifications"], landscapePhoto: usesLandscapeImageLayout("ourQualifications"), content: renderQualificationsPageHtml });
    }
    if (isSectionIncluded("ourTeam")) {
      pages.push({ key: "our-team", header: "Our Team", photoType: "team", sectionIds: ["ourTeam"], landscapePhoto: usesLandscapeImageLayout("ourTeam"), content: renderOurTeamPageHtml, customLeft: renderTeamPhotoRail });
    }
    pages = pages
      .concat(buildProcessPageModels())
      .concat(buildPhasePageModels("conceptDesign", "Concept Design", "concept"))
      .concat(buildPhasePageModels("schematicDesign", "Schematic Design", "schematic"))
      .concat(buildPhasePageModels("designDevelopment", "Design Development", "design"));
    if (isSectionIncluded("constructionDocumentsPage")) {
      pages.push({ key: "cd-1", header: "Construction Documents", photoType: "documents", sectionIds: ["constructionDocumentsPage"], landscapePhoto: usesLandscapeImageLayout("constructionDocumentsPage"), content: function () { return renderPageSectionText("constructionDocumentsPage"); } });
    }
    if (isSectionIncluded("biddingConstructionAdministration")) {
      pages.push({ key: "bid-ca-1", header: "Bidding and Construction Administration", photoType: "construction", sectionIds: ["biddingConstructionAdministration"], landscapePhoto: usesLandscapeImageLayout("biddingConstructionAdministration"), content: renderBiddingAndConstructionAdminPageHtml });
    }
    if (isSectionIncluded("designSchedulePage")) {
      pages.push({ key: "schedule-1", header: "Design Schedule", photoType: "schedule", sectionIds: ["designSchedulePage"], landscapePhoto: usesLandscapeImageLayout("designSchedulePage"), content: renderDesignSchedulePageHtml });
    }
    if (isSectionIncluded("consultantsPage")) {
      pages.push({ key: "consultants-1", header: "Consultants", photoType: "consultants", sectionIds: ["consultantsPage"], landscapePhoto: usesLandscapeImageLayout("consultantsPage"), content: renderConsultantsPageHtml });
    }
    if (isSectionIncluded("compensationPage")) {
      pages.push({ key: "compensation-1", header: "Compensation", photoType: "fees", sectionIds: ["compensationPage"], landscapePhoto: usesLandscapeImageLayout("compensationPage"), content: renderCompensationPageHtml });
    }
    if (isSectionIncluded("proceedingWithConfidence")) {
      pages.push({ key: "proceeding-1", header: "Thank You", photoType: "context", sectionIds: ["proceedingWithConfidence"], landscapePhoto: usesLandscapeImageLayout("proceedingWithConfidence"), content: renderProceedingWithConfidencePageHtml });
    }
    pages = pages.concat(buildGeneralConditionsPageModels());
    if (isSectionIncluded("attachmentsPage") && proposal.attachments && proposal.attachments.length) {
      pages = pages.concat(buildAttachmentPageModels());
    }
    return ProposalTextFlow.prepare(pages, {
      theme: currentThemeId(),
      settings: proposal.textFrameBottoms || {},
      render: function (page, pageNumber) {
        return currentThemeId() === "northlinePortrait"
          ? renderNorthlineModelPage(page, pageNumber)
          : renderStructuredBodyPage(page, pageNumber, currentThemeId() === "studioPortrait");
      }
    });
  }

  function buildAttachmentPageModels() {
    var pages = [];
    (proposal.attachments || []).forEach(function (attachment, attachmentIndex) {
      (attachment.pages || []).forEach(function (attachmentPage, pageIndex) {
        pages.push({
          key: "attachment-" + attachment.id + "-" + (pageIndex + 1),
          header: attachment.title || ("Attachment " + attachmentLetter(attachmentIndex)),
          subtitle: attachment.subtitle || "",
          sectionIds: ["attachmentsPage"],
          attachmentPage: true,
          attachmentId: attachment.id,
          attachmentIndex: attachmentIndex,
          attachmentPageIndex: pageIndex,
          imageName: attachmentPage.imageName || "",
          imageDataUrl: attachmentPage.imageDataUrl || ""
        });
      });
    });
    return pages;
  }

  function renderAttachmentProposalPage(page, pageNumber, themeId) {
    var themeClass = "attachment-theme-structured";
    var pageClass = "structured-page";
    var footer = '<footer class="proposal-footer attachment-page-footer"><div>235 W 25th Street &#9642; Houston, Texas 77008</div><div>Tel: 713.532.1110 &#9642; www.munozalbin.com</div></footer>';

    if (themeId === "modernLandscape") {
      themeClass = "attachment-theme-modern";
      pageClass = "modern-page";
      footer = '<footer class="modern-footer attachment-page-footer"><span>235 W 25th Street, Houston, Texas 77008</span><span>713.532.1110 / munozalbin.com</span></footer>';
    } else if (themeId === "northlinePortrait") {
      themeClass = "attachment-theme-northline";
      pageClass = "northline-page";
      footer = '<footer class="northline-footer attachment-page-footer">Munoz + Albin Architecture / 713.532.1110 / munozalbin.com</footer>';
    } else if (themeId === "studioPortrait") {
      themeClass = "attachment-theme-studio";
      pageClass = "structured-page structured-page-studio";
      footer = '<footer class="proposal-footer studio-page-footer attachment-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>';
    }

    var image = page.imageDataUrl
      ? '<img class="attachment-page-image" src="' + escapeHtml(page.imageDataUrl) + '" alt="' + escapeHtml(page.imageName || page.header) + '">'
      : "";
    return '<article class="proposal-page attachment-proposal-page ' + pageClass + " " + themeClass + '" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + ' data-attachment-index="' + escapeHtml(page.attachmentIndex) + '" data-attachment-page="' + escapeHtml(page.attachmentPageIndex + 1) + '">' +
      '<div class="attachment-page-inner">' +
      '<div class="attachment-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<header class="attachment-page-header"><h2>' + escapeHtml(page.header) + '</h2>' + (page.subtitle ? '<p class="attachment-page-subtitle">' + escapeHtml(page.subtitle) + '</p>' : '') + '</header>' +
      '<section class="attachment-page-content" aria-label="' + escapeHtml(image ? page.header + " image" : "Blank " + page.header + " page") + '">' + image + '</section>' +
      footer +
      '</div>' +
      '</article>';
  }

  function buildProjectSummaryPageModels() {
    if (!isSectionIncluded("projectSummary")) {
      return [];
    }
    var capacities = projectSummaryPagingCapacities();
    return splitPagingBlocksByCapacity(projectSummaryBlocksForPaging(), capacities.firstPage, capacities.continuation).map(function (chunk, index) {
      return {
        key: index === 0 ? "project-summary" : "project-summary-" + (index + 1),
        header: "Project Summary",
        photoType: "context",
        sectionIds: ["projectSummary"],
        landscapePhoto: usesLandscapeImageLayout("projectSummary"),
        content: function () {
          return renderProjectSummaryPageHtml(chunk, index === 0);
        }
      };
    });
  }

  function buildGeneralConditionsPageModels() {
    if (!isSectionIncluded("generalConditionsPage")) {
      return [];
    }
    var section = findSection("generalConditionsPage");
    var text = getSectionText(section);
    var landscapePhoto = usesLandscapeImageLayout("generalConditionsPage");
    var capacity = landscapePhoto ? 2400 : 2600;
    var continuationCapacity = capacity;
    if (currentThemeId() === "northlinePortrait") {
      // The image-forward layout has a narrow text column.  Use one
      // allowance for every Attachment A page: the rate chart,
      // headings, and bullet indents occupy more vertical space than their
      // plain-text character count suggests.  This moves the next whole
      // block to a continuation page instead of reaching the one-inch footer buffer.
      capacity = 2400;
      continuationCapacity = capacity;
    }
    return splitContinuousSectionText(text, capacity, continuationCapacity).map(function (chunk, index) {
      return {
        key: "general-conditions-" + (index + 1),
        header: "Attachment A",
        subtitle: "General Conditions",
        photoType: "documents",
        sectionIds: ["generalConditionsPage"],
        landscapePhoto: landscapePhoto,
        content: function () {
          return renderGeneralConditionsPageHtml(chunk);
        }
      };
    });
  }

  function projectSummaryPagingCapacities() {
    if (currentThemeId() === "northlinePortrait") {
      // The first page also carries the address/title block. Allow one additional
      // text line so a short sentence ending does not become an orphan continuation.
      return { firstPage: 1900, continuation: 2750 };
    }
    return { firstPage: 1460, continuation: 1760 };
  }

  function buildPhasePageModels(phaseId, title, photoType) {
    if (!isSectionIncluded(phasePageSectionId(phaseId))) {
      return [];
    }
    return phaseTextChunks(phaseId, title).map(function (chunk, index) {
      return {
        key: phaseId + "-" + (index + 1),
        header: title,
        photoType: photoType,
        sectionIds: [phasePageSectionId(phaseId)],
        landscapePhoto: usesLandscapeImageLayout(phasePageSectionId(phaseId)),
        content: function () {
          return textToHtmlContinuous(chunk);
        }
      };
    });
  }

  function buildProcessPageModels() {
    if (!isSectionIncluded("process")) {
      return [];
    }
    var landscapePhoto = usesLandscapeImageLayout("process");
    // The landscape Process / Scope layout has a wide text column above its photo.
    // Its prior limit left short paragraph continuations stranded on a new page.
    var capacity = landscapePhoto && currentThemeId() === "northlinePortrait" ? 3180 : 2780;
    return splitContinuousSectionText(processPageTextForPaging(), capacity).map(function (chunk, index) {
      return {
        key: "process-" + (index + 1),
        header: "Process / Scope",
        photoType: "design",
        sectionIds: ["process"],
        landscapePhoto: landscapePhoto,
        content: function () {
          return renderProcessPageHtml(chunk, index === 0);
        }
      };
    });
  }

  function phaseTextChunks(phaseId, title) {
    var text = renderPageSectionText(phasePageSectionId(phaseId)) || legacySectionText(phaseId);
    var parts = phaseScopeTextParts(text, title);
    var storedScopeItems = phaseId !== "conceptDesign" && proposal.phaseScopeItems && Object.prototype.hasOwnProperty.call(proposal.phaseScopeItems, phaseId)
      ? cleanLines(String(proposal.phaseScopeItems[phaseId] || "").split(/\r?\n/))
      : (phaseId === "conceptDesign" ? [] : parts.items);
    var scope = [
      parts.narrative,
      storedScopeItems.length ? PHASE_SCOPE_FIXED_HEADING : "",
      storedScopeItems.length ? bulletText(storedScopeItems.join("\n")) : ""
    ].filter(Boolean).join("\n\n");
    var deliverables = selectedDeliverableNames(phaseId);
    var deliverableText = deliverables.length ? "Deliverables for this phase include:\n" + bulletText(deliverables.join("\n")) : "";
    // Keep phase content on the current page unless it is genuinely likely to overflow.
    return splitContinuousSectionText([scope, deliverableText].filter(Boolean).join("\n\n"), 3400);
  }

  function splitContinuousSectionText(text, maxCharacters, continuationMaxCharacters) {
    var blocks = textBlocksForPaging(text);
    return splitPagingBlocksByCapacity(blocks, maxCharacters, continuationMaxCharacters || maxCharacters);
  }

  function splitPagingBlocksByCapacity(blocks, firstPageMaxCharacters, continuationMaxCharacters) {
    var pages = [];
    var current = [];
    var currentLength = 0;
    var currentLimit = Math.max(1, firstPageMaxCharacters || continuationMaxCharacters || 1);
    var safeBlockLimit = Math.max(1, Math.min(
      firstPageMaxCharacters || continuationMaxCharacters || 1,
      continuationMaxCharacters || firstPageMaxCharacters || 1
    ));
    var sourceBlocks = (blocks || []).reduce(function (expanded, block) {
      return expanded.concat(splitOversizedPagingBlock(block, safeBlockLimit));
    }, []);
    for (var index = 0; index < sourceBlocks.length; index += 1) {
      var block = sourceBlocks[index];
      var blockLength = estimatePagingBlockLength(block);
      var nextBlock = sourceBlocks[index + 1];
      var keepWithNext = shouldKeepPagingBlockWithNext(block, nextBlock);
      var reservedLength = blockLength + (keepWithNext ? estimatePagingBlockLength(nextBlock) : 0);
      if (current.length && currentLength + reservedLength > currentLimit) {
        var remainingCapacity = currentLimit - currentLength;
        var fittedBlocks = !keepWithNext && remainingCapacity > 160
          ? splitOversizedPagingBlock(block, remainingCapacity)
          : [block];
        if (fittedBlocks.length > 1) {
          current.push(fittedBlocks[0]);
          currentLength += estimatePagingBlockLength(fittedBlocks[0]);
          pages.push(joinPagingBlocks(current));
          current = [];
          currentLength = 0;
          currentLimit = Math.max(1, continuationMaxCharacters || firstPageMaxCharacters || 1);
          sourceBlocks.splice.apply(sourceBlocks, [index, 1].concat(fittedBlocks));
          continue;
        }
        pages.push(joinPagingBlocks(current));
        current = [];
        currentLength = 0;
        currentLimit = Math.max(1, continuationMaxCharacters || firstPageMaxCharacters || 1);
      }
      current.push(block);
      currentLength += blockLength;
      if (keepWithNext) {
        current.push(nextBlock);
        currentLength += estimatePagingBlockLength(nextBlock);
        index += 1;
      }
    }
    if (current.length) {
      pages.push(joinPagingBlocks(current));
    }
    return pages.length ? pages : [""];
  }

  function splitOversizedPagingBlock(block, maxCharacters) {
    var source = String(block || "").trim();
    if (!source || estimatePagingBlockLength(source) <= maxCharacters) {
      return source ? [source] : [];
    }
    var bulletMatch = source.match(/^([-*•])\s+(.+)$/);
    var prefix = bulletMatch ? bulletMatch[1] + " " : "";
    var words = (bulletMatch ? bulletMatch[2] : source).split(/\s+/);
    var chunks = [];
    var current = [];
    words.forEach(function (word) {
      var candidate = prefix + current.concat(word).join(" ");
      if (current.length && estimatePagingBlockLength(candidate) > maxCharacters) {
        chunks.push(prefix + current.join(" "));
        current = [word];
        return;
      }
      current.push(word);
    });
    if (current.length) {
      chunks.push(prefix + current.join(" "));
    }
    return chunks;
  }

  function shouldKeepPagingBlockWithNext(block, nextBlock) {
    var currentText = String(block || "").trim();
    var nextText = String(nextBlock || "").trim();
    return !!currentText && !!nextText && isParagraphHeadingLine(currentText) && !isParagraphHeadingLine(nextText);
  }

  function estimatePagingBlockLength(block) {
    var text = String(block || "").replace(/\s+/g, " ").trim();
    var lines = String(block || "").split(/\r?\n/).filter(Boolean).length || 1;
    var bulletPenalty = isBulletLine(String(block || "").trim()) ? 95 : 45;
    return text.length + lines * bulletPenalty;
  }

  function joinPagingBlocks(blocks) {
    return blocks.reduce(function (html, block, index) {
      if (!index) {
        return block;
      }
      var previous = blocks[index - 1];
      var separator = isBulletLine(previous.trim()) && isBulletLine(block.trim()) ? "\n" : "\n\n";
      return html + separator + block;
    }, "");
  }

  function textBlocksForPaging(text) {
    var lines = String(text || "").split(/\r?\n/);
    var blocks = [];
    var paragraph = [];
    var list = [];

    function flushParagraph() {
      if (paragraph.length) {
        blocks.push(paragraph.join("\n"));
        paragraph = [];
      }
    }

    function flushList() {
      if (list.length) {
        list.forEach(function (item) {
          blocks.push(item);
        });
        list = [];
      }
    }

    lines.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        flushList();
        return;
      }
      if (isBulletLine(trimmed)) {
        flushParagraph();
        list.push(trimmed);
        return;
      }
      if (!paragraph.length && isParagraphHeadingLine(trimmed)) {
        flushList();
        blocks.push(trimmed);
        return;
      }
      flushList();
      paragraph.push(trimmed);
    });
    flushParagraph();
    flushList();
    return blocks;
  }

  function renderStructuredTableOfContentsPage(pageModels, isStudio) {
    var photoType = "context";
    var photo = choosePagePhotos(photoType, "structured-toc", ["main"])[0];
    if (!photo) {
      photoType = "design";
      photo = choosePagePhotos(photoType, "structured-toc", ["main"])[0];
    }
    var seen = {};
    var entries = pageModels.map(function (page) {
      return { title: pageDisplayTitle(page) };
    }).filter(function (entry) {
      var key = normalizeTypology(entry.title);
      if (seen[key]) {
        return false;
      }
      seen[key] = true;
      return true;
    });
    var photoHtml = photo
      ? '<figure class="studio-toc-photo editable-photo-slot">' + renderEditablePhotoImage(photo, photoType, photoSlotKey("structured-toc", "main", photoType)) + '</figure>'
      : '<figure class="studio-toc-photo photo-placeholder"><span>contents<br>photo</span></figure>';
    return '<article class="proposal-page structured-page structured-toc-page' + (isStudio ? " structured-page-studio" : "") + '" data-section="Contents">' +
      '<div class="page-inner structured-page-inner">' +
      photoHtml +
      '<section class="studio-toc-overlay">' +
      '<h2>Contents</h2>' +
      '<div class="studio-toc-list">' + entries.map(function (entry, index) {
        return '<div class="studio-toc-row"><span>' + escapeHtml(twoDigit(index + 1)) + '</span><strong>' + escapeHtml(entry.title) + '</strong></div>';
      }).join("") + '</div>' +
      '</section>' +
      '<footer class="proposal-footer studio-page-footer studio-page-footer-light"><div>Munoz + Albin</div><div>01</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStructuredCoverPage(isStudio) {
    if (isStudio) {
      return renderStudioCoverPage();
    }
    var p = proposal.project || {};
    var photo = choosePagePhotos("context", "structured-cover", ["main"])[0];
    return '<article class="proposal-page structured-page structured-cover-page' + (isStudio ? " structured-page-studio" : "") + '">' +
      '<div class="page-inner structured-cover-inner">' +
      '<div class="structured-cover-top">' +
      '<img class="structured-cover-logo" src="' + escapeHtml(logoAssetSrc()) + '" alt="Munoz Albin logo">' +
      '<div class="structured-cover-meta">' +
      '<p>' + escapeHtml(formatDate(p.proposalDate)) + '</p>' +
      '<p>' + escapeHtml(p.clientCompany || "Client") + '</p>' +
      '</div>' +
      '<div class="structured-cover-title">' +
      '<h1>' + coverTextHtml(p.coverTitle, "PROPOSAL") + '</h1>' +
      '<p class="structured-cover-subtitle">' + coverTextHtml(p.coverSubtitle, "Design Architect Services") + '</p>' +
      '</div>' +
      '</div>' +
      '<div class="structured-cover-photo-wrap">' + renderStructuredCoverPhoto(photo) + '</div>' +
      '<footer class="proposal-footer structured-cover-footer"><div>235 W 25th Street &#9642; Houston, Texas 77008</div><div>Tel: 713.532.1110 &#9642; www.munozalbin.com</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioCoverPage() {
    var p = proposal.project || {};
    var photo = choosePagePhotos("context", "studio-cover", ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-studio studio-cover-page">' +
      '<div class="page-inner studio-cover-inner">' +
      '<div class="studio-cover-meta-row"><span>' + escapeHtml(p.clientCompany || "Client") + '</span><span>' + escapeHtml(formatDate(p.proposalDate)) + '</span></div>' +
      '<div class="studio-cover-copy">' +
      '<h1>' + coverTextHtml(p.coverTitle, "PROPOSAL") + '</h1>' +
      '<p class="studio-cover-kicker">' + coverTextHtml(p.coverSubtitle, "Design Architect Services") + '</p>' +
      '</div>' +
      '<div class="studio-cover-image-wrap">' + renderStructuredCoverPhoto(photo) + '</div>' +
      '<footer class="studio-cover-footer"><div><span>Submitted by</span><strong>Munoz + Albin</strong></div><div><span>Architecture</span><strong>Planning</strong></div><div><span>Prepared for</span><strong>' + escapeHtml(p.clientCompany || "Client") + '</strong></div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStructuredCoverPhoto(photo) {
    if (photo) {
      return '<figure class="structured-cover-photo editable-photo-slot">' + renderEditablePhotoImage(photo, "context", photoSlotKey("structured-cover", "main", "context")) + "</figure>";
    }
    return '<figure class="structured-cover-photo photo-placeholder"><span>cover<br>photo</span></figure>';
  }

  function renderStructuredBodyPage(page, pageNumber, isStudio) {
    if (page.attachmentPage) {
      return renderAttachmentProposalPage(page, pageNumber, isStudio ? "studioPortrait" : "maOg");
    }
    if (isStudio) {
      return renderStudioBodyPage(page, pageNumber);
    }
    if (page.landscapePhoto) {
      return renderStructuredLandscapeBodyPage(page, pageNumber);
    }
    var photos = choosePagePhotos(page.photoType, page.key, ["top", "bottom"]);
    return '<article class="proposal-page structured-page' + (isStudio ? " structured-page-studio" : "") + '" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner">' +
      '<div class="body-page-number">' + escapeHtml(pageNumber) + '</div>' +
      (page.customLeft ? page.customLeft(page) : renderStructuredPhotoRail(page, photos)) +
      '<section class="structured-text-column">' +
      '<header class="structured-page-header"><h2>' + escapeHtml(formattedPageHeaderTitle(pageDisplayTitle(page))) + '</h2>' + proposalPageSubtitle(page) + '<div class="structured-page-rule"></div></header>' +
      '<div class="structured-page-copy"><div class="doc-copy">' + page.content() + '</div></div>' +
      '</section>' +
      '<footer class="proposal-footer"><div>235 W 25th Street &#9642; Houston, Texas 77008</div><div>Tel: 713.532.1110 &#9642; www.munozalbin.com</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStructuredLandscapeBodyPage(page, pageNumber) {
    var photoType = page.photoType || "context";
    var pageKey = page.key + "-landscape";
    var photo = choosePagePhotos(photoType, pageKey, ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-landscape-photo" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + landscapePhotoPageStyle(pageKey, photoType) + '>' +
      '<div class="page-inner structured-page-inner">' +
      '<div class="body-page-number">' + escapeHtml(pageNumber) + '</div>' +
      '<section class="structured-text-column structured-landscape-text-column">' +
      '<header class="structured-page-header"><h2>' + escapeHtml(formattedPageHeaderTitle(pageDisplayTitle(page))) + '</h2>' + proposalPageSubtitle(page) + '<div class="structured-page-rule"></div></header>' +
      '<div class="structured-page-copy structured-landscape-copy"><div class="doc-copy">' + page.content() + '</div></div>' +
      '</section>' +
      renderLandscapePagePhoto(photo, photoType, pageKey, "structured-landscape-photo") +
      '<footer class="proposal-footer"><div>235 W 25th Street &#9642; Houston, Texas 77008</div><div>Tel: 713.532.1110 &#9642; www.munozalbin.com</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioBodyPage(page, pageNumber) {
    var photoType = page.photoType || "context";
    var pageKey = "studio-" + page.key;
    var photo = choosePagePhotos(photoType, pageKey, ["main"])[0];
    if (page.landscapePhoto && page.header !== "Our Team" && !isClosingPageHeader(page.header)) {
      return renderStudioLandscapeBodyPage(page, pageNumber, photoType);
    }
    if (page.header === "Our Qualifications") {
      return renderStudioQualificationsPage(page, pageNumber, photoType, pageKey, photo);
    }
    if (page.header === "Project Summary") {
      return renderStudioSummaryPage(page, pageNumber, photoType, pageKey, photo);
    }
    if (page.header === "Our Team") {
      return renderStudioTeamPage(page, pageNumber, photoType, pageKey);
    }
    if (page.header === "Process / Scope") {
      return renderStudioProcessPage(page, pageNumber, photoType, pageKey, photo);
    }
    if (page.header === "Design Schedule") {
      return renderStudioSchedulePage(page, pageNumber, photoType, pageKey, photo);
    }
    if (page.header === "Compensation") {
      return renderStudioCompensationThemePage(page, pageNumber, photoType, pageKey, photo);
    }
    if (isClosingPageHeader(page.header)) {
      return renderStudioClosingPage(page, pageNumber);
    }
    return '<article class="proposal-page structured-page structured-page-studio" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '<div class="studio-header-rule"></div>' +
      '</section>' +
      '<section class="studio-copy-column"><div class="doc-copy">' + page.content() + '</div></section>' +
      '<aside class="studio-photo-column">' + renderStudioPagePhoto(photo, photoType, pageKey) + '</aside>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioLandscapeBodyPage(page, pageNumber, photoType) {
    var pageKey = "studio-" + page.key + "-landscape";
    var photo = choosePagePhotos(photoType, pageKey, ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-studio studio-landscape-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + landscapePhotoPageStyle(pageKey, photoType) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block studio-header-block-wide">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '<div class="studio-header-rule"></div>' +
      '</section>' +
      '<section class="studio-copy-column studio-landscape-copy-column"><div class="doc-copy">' + page.content() + '</div></section>' +
      renderLandscapePagePhoto(photo, photoType, pageKey, "studio-landscape-photo") +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioSummaryPage(page, pageNumber, photoType, pageKey, photo) {
    return '<article class="proposal-page structured-page structured-page-studio studio-summary-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block studio-header-block-wide">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '<div class="studio-header-rule"></div>' +
      '</section>' +
      '<section class="studio-copy-column studio-copy-column-understanding"><div class="doc-copy">' + page.content() + '</div></section>' +
      '<aside class="studio-photo-column studio-photo-column-tall"><div class="studio-photo-accent"></div>' + renderStudioPagePhoto(photo, photoType, pageKey) + '</aside>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioQualificationsPage(page, pageNumber, photoType, pageKey, photo) {
    var stats = proposal.qualifications.stats.filter(function (item) {
      return item && item.included !== false && (item.value || item.label || item.detail);
    }).slice(0, 4);
    return '<article class="proposal-page structured-page structured-page-studio studio-qualifications-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<section class="studio-qualifications-head"><h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2><p>' + escapeHtml(renderPageSectionText("ourQualifications")) + '</p></section>' +
      '<section class="studio-qualifications-stats">' + stats.map(function (stat) {
        return '<div class="studio-qualification-row"><strong>' + escapeHtml(stat.value) + '</strong><span>' + escapeHtml(stat.label) + '</span></div>';
      }).join("") + '</section>' +
      '<aside class="studio-qualifications-photo">' + renderStudioPagePhoto(photo, photoType, pageKey) + '</aside>' +
      '<div class="studio-bottom-rule"></div>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioTeamPage(page, pageNumber, photoType, pageKey) {
    var members = selectedTeamMembers();
    var supportPhotos = choosePagePhotos(photoType, pageKey, ["a", "b", "c", "d"]);
    var heroPhoto = choosePagePhotos("context", pageKey + "-hero", ["main"])[0] || choosePagePhotos(photoType, pageKey + "-hero", ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-studio studio-team-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-team-title"><h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2></section>' +
      '<section class="studio-team-list">' + members.map(function (member, index) {
        var memberPhoto = member.photoDataUrl
          ? '<img class="' + teamHeadshotClass("studio-team-person-photo") + '" src="' + member.photoDataUrl + '" alt="' + escapeHtml(member.name || "Team member") + '">'
          : (supportPhotos[index] ? '<img class="' + teamHeadshotClass("studio-team-person-photo") + '" src="' + supportPhotos[index].dataUrl + '" alt="' + escapeHtml(member.name || "Team member") + '">' : '<div class="' + teamHeadshotClass("studio-team-person-photo studio-team-photo-placeholder") + '"></div>');
        return '<div class="studio-team-row">' + memberPhoto + '<div class="studio-team-person-copy"><strong>' + escapeHtml(member.name || "Team Member") + '</strong><span>' + escapeHtml(member.title || "") + '</span><p>' + escapeHtml(member.description || "") + '</p></div></div>';
      }).join("") + '</section>' +
      '<aside class="studio-team-hero">' + renderStudioPagePhoto(heroPhoto, heroPhoto ? "context" : photoType, pageKey + "-hero") + '</aside>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioProcessPage(page, pageNumber, photoType, pageKey, photo) {
    if (page.key === "process-1") {
      var steps = studioProcessSteps();
      return '<article class="proposal-page structured-page structured-page-studio studio-process-hero-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
        '<div class="page-inner structured-page-inner studio-page-inner">' +
        '<div class="studio-process-hero-photo">' + renderStudioPagePhoto(photo, photoType, pageKey) + '</div>' +
        '<div class="studio-process-overlay"><h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
        steps.map(function (step, index) {
          return '<div class="studio-process-step"><span>' + escapeHtml(twoDigit(index + 1)) + '</span><div><strong>' + escapeHtml(step.title) + '</strong><p>' + escapeHtml(step.note) + '</p></div></div>';
        }).join("") + '</div>' +
        '<footer class="proposal-footer studio-page-footer studio-page-footer-light"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
        '</div>' +
        '</article>';
    }
    return '<article class="proposal-page structured-page structured-page-studio" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block studio-header-block-wide">' +
      '<h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2>' +
      '<div class="studio-header-rule"></div>' +
      '</section>' +
      '<section class="studio-copy-column studio-copy-column-process"><div class="doc-copy">' + page.content() + '</div></section>' +
      '<aside class="studio-photo-column studio-photo-column-process">' + renderStudioPagePhoto(photo, photoType, pageKey) + '</aside>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioSchedulePage(page, pageNumber, photoType, pageKey, photo) {
    var schedulePageKey = pageKey + "-schedule";
    photo = choosePagePhotos(photoType, schedulePageKey, ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-studio studio-schedule-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + landscapePhotoPageStyle(schedulePageKey, photoType, 3.2) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block studio-header-block-wide"><h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2><div class="studio-header-rule"></div></section>' +
      '<section class="studio-copy-column studio-landscape-copy-column studio-schedule-copy-landscape"><div class="doc-copy">' + page.content() + '</div></section>' +
      renderLandscapePagePhoto(photo, photoType, schedulePageKey, "studio-landscape-photo studio-schedule-landscape-photo") +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioCompensationThemePage(page, pageNumber, photoType, pageKey, photo) {
    var compensationPageKey = pageKey + "-fee";
    photo = choosePagePhotos(photoType, compensationPageKey, ["main"])[0];
    return '<article class="proposal-page structured-page structured-page-studio studio-fee-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + landscapePhotoPageStyle(compensationPageKey, photoType, 3.2) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-page-number">' + escapeHtml(twoDigit(pageNumber)) + '</div>' +
      '<section class="studio-header-block studio-header-block-wide"><h2>' + escapeHtml(pageDisplayTitle(page)) + '</h2><div class="studio-header-rule"></div></section>' +
      '<section class="studio-copy-column studio-landscape-copy-column studio-fee-copy-landscape"><div class="doc-copy">' + page.content() + '</div></section>' +
      renderLandscapePagePhoto(photo, photoType, compensationPageKey, "studio-landscape-photo studio-fee-landscape-photo") +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioClosingPage(page, pageNumber) {
    var signature = proposal.signature || {};
    return '<article class="proposal-page structured-page structured-page-studio studio-closing-page" data-section="' + escapeHtml(page.header) + '"' + pageSectionIdsAttribute(page) + '>' +
      '<div class="page-inner structured-page-inner studio-page-inner">' +
      '<div class="studio-thank-you">Thank You</div>' +
      '<div class="studio-thank-you-rule"></div>' +
      '<div class="studio-closing-message">LET&#39;S BUILD<br>SOMETHING<br>MEANINGFUL.</div>' +
      '<div class="studio-closing-signature">' +
      '<div class="studio-closing-regards">Warmest Regards,</div>' +
      (signature.imageDataUrl ? '<img class="signature-mark" src="' + escapeHtml(signature.imageDataUrl) + '" alt="Signature">' : "") +
      '<p><strong>' + escapeHtml(signature.name || "") + '</strong><br>' + escapeHtml(signature.title || "") + '<br>' + escapeHtml(signature.company || "") + '</p>' +
      '</div>' +
      '<div class="studio-closing-contact">hello@munozalbin.com<br>713 532 1110</div>' +
      '<footer class="proposal-footer studio-page-footer"><div>Studio North</div><div>' + escapeHtml(twoDigit(pageNumber + 1)) + '</div></footer>' +
      '</div>' +
      '</article>';
  }

  function renderStudioPagePhoto(photo, photoType, pageKey) {
    if (photo) {
      return '<figure class="studio-page-photo editable-photo-slot">' + renderEditablePhotoImage(photo, photoType, photoSlotKey(pageKey, "main", photoType)) + '</figure>';
    }
    return '<figure class="studio-page-photo photo-placeholder"><span>' + escapeHtml(photoType) + '<br>photo</span></figure>';
  }

  function renderLandscapePagePhoto(photo, photoType, pageKey, className) {
    var slotKey = photoSlotKey(pageKey, "main", photoType);
    var defaultHeight = /studio-(?:schedule|fee)-landscape-photo/.test(className) ? 3.2 : 3.12;
    var handle = renderPhotoFrameResizeHandle(slotKey, defaultHeight);
    var attributes = ' data-default-frame-height="' + defaultHeight + '"';
    if (photo) {
      return '<figure class="' + className + ' editable-photo-slot"' + attributes + '>' + renderEditablePhotoImage(photo, photoType, slotKey) + handle + '</figure>';
    }
    return '<figure class="' + className + ' photo-placeholder"' + attributes + '><span>' + escapeHtml(photoType || "project") + '<br>photo</span>' + handle + '</figure>';
  }

  function studioProcessSteps() {
    return [
      { title: "Discover", note: "Listen, clarify priorities, and align on goals." },
      { title: "Design", note: "Explore options and define direction." },
      { title: "Develop", note: "Refine details and coordinate systems." },
      { title: "Deliver", note: "Build with care and stewardship." }
    ];
  }

  function renderStructuredPhotoRail(page, photos) {
    return '<aside class="photo-rail structured-photo-rail">' +
      renderPhotoSlot(photos[0], page.photoType, "top", photoSlotKey(page.key, "top", page.photoType)) +
      renderPhotoSlot(photos[1], page.photoType, "bottom", photoSlotKey(page.key, "bottom", page.photoType)) +
      "</aside>";
  }

  function renderTeamPhotoRail(page) {
    var members = selectedTeamMembers();
    var items = members.map(function (member, index) {
      return member.photoDataUrl
        ? '<figure class="' + teamHeadshotClass('structured-team-photo-slot photo-slot photo-slot-' + (index === 0 ? "top" : "bottom")) + '"><img class="page-photo" src="' + member.photoDataUrl + '" alt="' + escapeHtml(member.name || "Team member") + '"></figure>'
        : "";
    }).filter(Boolean);
    if (!items.length) {
      var photos = choosePagePhotos(page.photoType, page.key, ["top", "bottom"]);
      return renderStructuredPhotoRail(page, photos);
    }
    return '<aside class="photo-rail structured-photo-rail structured-team-rail team-count-' + escapeHtml(String(items.length)) + '">' + items.join("") + "</aside>";
  }

  function projectSummaryAddressBlockHtml() {
    var p = proposal.project || {};
    var recipientHtml = [p.clientContact, p.clientTitle, p.clientCompany].map(function (line) {
      return String(line || "").trim();
    }).filter(Boolean).map(function (line) {
      return '<strong>' + escapeHtml(line) + '</strong>';
    }).join("<br>");
    var addressHtml = escapeHtml(String(p.clientAddress || "").replace(/\r\n?/g, "\n").trim()).replace(/\n/g, "<br>");
    var recipientBlock = [recipientHtml, addressHtml].filter(Boolean).join("<br>");
    return '<div class="summary-address-block">' + escapeHtml(formatDate(p.proposalDate)) + (recipientBlock ? '<br><br>' + recipientBlock : '') + '</div>';
  }

  function defaultSummaryProposalTitle() {
    var c = projectContext();
    return "Proposal for " + sentenceCase(c.scopeSummary) + " for " + c.projectName + ".";
  }

  function projectSummaryProposalTitleHtml() {
    var text = String((proposal.project && proposal.project.summaryProposalTitle) || "").trim() || defaultSummaryProposalTitle();
    return '<div class="summary-proposal-title">' +
      '<div class="summary-rule"></div>' +
      '<p class="summary-proposal-title-text">' + escapeHtml(text) + '</p>' +
      '<div class="summary-rule"></div>' +
      '</div>';
  }

  function projectSummaryBlocksForPaging() {
    var c = projectContext();
    var summarySection = sectionDefinitions.find(function (item) { return item.id === "projectSummary"; });
    var customSummaryText = summarySection && Object.prototype.hasOwnProperty.call(proposal.sectionOverrides, "projectSummary")
      ? proposal.sectionOverrides.projectSummary
      : "";
    var introText = normalizeProjectSummaryNarrativeText(customSummaryText).trim() || defaultProjectSummaryNarrative();
    var blocks = mergeProjectSummarySentenceContinuations(textBlocksForPaging(introText));
    if (proposal.project.showOwnerRequirements !== false) {
      blocks.push("Basic owner requirements:");
      blocks = blocks.concat(textBlocksForPaging(bulletText((c.ownerRequirements.length ? c.ownerRequirements : inferredOwnerRequirements()).join("\n"))));
    }
    if (proposal.project.showOwnerProvidedInfo !== false) {
      blocks.push("The following information will support alignment as the work develops:");
      blocks = blocks.concat(textBlocksForPaging(bulletText((c.ownerProvidedInfo.length ? c.ownerProvidedInfo : defaultOwnerProvidedItems()).join("\n"))));
    }
    if (proposal.project.showSummaryDeliverables === true && c.summaryDeliverables.length) {
      blocks.push("Deliverables:");
      blocks = blocks.concat(textBlocksForPaging(bulletText(c.summaryDeliverables.join("\n"))));
    }
    return blocks;
  }

  function mergeProjectSummarySentenceContinuations(blocks) {
    return (blocks || []).reduce(function (merged, block) {
      var current = String(block || "").trim();
      var previous = merged.length ? merged[merged.length - 1] : "";
      if (
        current &&
        previous &&
        !isBulletLine(previous) &&
        !isBulletLine(current) &&
        !isParagraphHeadingLine(previous) &&
        !isParagraphHeadingLine(current) &&
        !/[.!?…:;\"')\]]$/.test(previous)
      ) {
        merged[merged.length - 1] = previous + "\n" + current;
      } else if (current) {
        merged.push(current);
      }
      return merged;
    }, []);
  }

  function renderProjectSummaryPageHtml(chunk, includeAddressBlock) {
    var summaryText = chunk || joinPagingBlocks(projectSummaryBlocksForPaging());
    return (includeAddressBlock ? projectSummaryAddressBlockHtml() + projectSummaryProposalTitleHtml() : "") + renderProjectSummaryNarrativeHtml(summaryText, includeAddressBlock);
  }

  function renderProjectSummaryNarrativeHtml(text, includeFixedHeading) {
    var blocks = mergeProjectSummarySentenceContinuations(textBlocksForPaging(text));
    var normalizedText = joinPagingBlocks(blocks);
    if (!includeFixedHeading || !blocks.length) {
      return textToHtmlContinuous(keepProjectSummaryNamesTogether(normalizedText), {
        joinMidSentenceParagraphs: true,
        joinSoftLineBreaks: true
      });
    }
    var introBlockCount = 1;
    if (proposal.projectSummarySections && typeof proposal.projectSummarySections === "object" && String(proposal.projectSummarySections.intro || "").trim()) {
      introBlockCount = mergeProjectSummarySentenceContinuations(textBlocksForPaging(proposal.projectSummarySections.intro)).length || 1;
    }
    introBlockCount = Math.min(introBlockCount, blocks.length);
    var intro = blocks.slice(0, introBlockCount).join("\n\n");
    var remaining = blocks.slice(introBlockCount).join("\n\n");
    var narrativeRenderOptions = {
      joinMidSentenceParagraphs: true,
      joinSoftLineBreaks: true
    };
    return textToHtmlContinuous(keepProjectSummaryNamesTogether(intro), narrativeRenderOptions) +
      '<p class="project-summary-fixed-title"><strong>' + escapeHtml(PROJECT_SUMMARY_FIXED_HEADING) + '</strong></p>' +
      textToHtmlContinuous(keepProjectSummaryNamesTogether(remaining), narrativeRenderOptions);
  }

  function renderQualificationsPageHtml() {
    var sectionText = renderPageSectionText("ourQualifications");
    var stats = proposal.qualifications.stats.filter(function (item) {
      return item && item.included !== false && (item.value || item.label || item.detail);
    });
    return '<p>' + escapeHtml(stripRedundantSentence(sectionText, proposal.qualifications.overview)) + '</p>' +
      '<div class="qualifications-page-grid">' + stats.map(function (stat) {
        return '<div class="qualification-stat"><div class="qualification-value">' + escapeHtml(stat.value) + '</div><div class="qualification-label">' + escapeHtml(stat.label) + '</div><p>' + escapeHtml(stat.detail) + '</p></div>';
      }).join("") + '</div>';
  }

  function renderOurTeamPageHtml() {
    var members = selectedTeamMembers();
    return members.map(function (member) {
      return '<div class="team-member-copy"><strong>' + escapeHtml(member.name || "Team Member") + '</strong><span>' + escapeHtml(member.title || "") + '</span><p>' + escapeHtml(member.description || "") + '</p></div>';
    }).join("");
  }

  function processPageTextForPaging() {
    var processParts = processSectionTextParts(renderPageSectionText("process"));
    var assumptions = conciseListItems(projectContext().maAssumptions.length ? projectContext().maAssumptions : inferredAssumptions());
    var assumptionBlock = proposal.project.showMaAssumptionsInProcess !== false && assumptions.length
      ? [
        "For this proposal, M+A has made the following assumptions:",
        bulletText(assumptions.join("\n"))
      ].join("\n")
      : "";
    return [
      processParts.designTeam,
      PROCESS_SCOPE_FIXED_HEADING,
      processParts.scope,
      assumptionBlock
    ].filter(Boolean).join("\n\n");
  }

  function renderProcessPageHtml(chunk, includeFixedHeading) {
    return '<div class="process-single-page-copy">' +
      (includeFixedHeading === false ? "" : '<h3 class="process-fixed-heading">' + escapeHtml(PROCESS_FIXED_HEADING) + '</h3>') +
      renderProcessChunkHtml(chunk || processPageTextForPaging()) +
      "</div>";
  }

  function renderProcessChunkHtml(text) {
    var lines = String(text || "").split(/\r?\n/);
    var scopeIndex = lines.findIndex(function (line) {
      return normalizeTitle(line) === normalizeTitle(PROCESS_SCOPE_FIXED_HEADING);
    });
    if (scopeIndex < 0) {
      return textToHtmlContinuous(text);
    }
    var before = lines.slice(0, scopeIndex).join("\n").trim();
    var after = lines.slice(scopeIndex + 1).join("\n").trim();
    return textToHtmlContinuous(before) +
      '<h3 class="process-fixed-heading">' + escapeHtml(PROCESS_SCOPE_FIXED_HEADING) + '</h3>' +
      textToHtmlContinuous(after);
  }

  function renderPhasePageHtml(legacyId, title, mode) {
    var text = renderPageSectionText(phasePageSectionId(legacyId)) || legacySectionText(legacyId);
    var parts = splitLegacyPhaseText(text, title);
    var selectedDeliverables = selectedDeliverableNames(legacyId);
    var selectedDeliverableText = selectedDeliverables.length
      ? "Deliverables for this phase include:\n" + bulletText(selectedDeliverables.join("\n"))
      : "";
    if (mode === "all") {
      var allScope = stripOpeningTitle(parts.scope, [title, title === "Concept Design" ? "conceptual design" : title]);
      return textToHtmlContinuous([allScope, selectedDeliverableText].filter(Boolean).join("\n\n"));
    }
    if (mode === "scope") {
      return textToHtmlContinuous(parts.scope);
    }
    if (mode === "deliverables") {
      return textToHtmlContinuous(selectedDeliverableText || parts.deliverables);
    }
    if (mode === "deliverables-a") {
      return textToHtmlContinuous(splitDeliverableText(selectedDeliverableText || parts.deliverables, "a"));
    }
    if (mode === "deliverables-b") {
      return textToHtmlContinuous(splitDeliverableText(selectedDeliverableText || parts.deliverables, "b"));
    }
    return textToHtmlContinuous(text);
  }

  function renderBiddingAndConstructionAdminPageHtml() {
    var bidding = stripOpeningTitle(legacySectionText("biddingNegotiation"), ["bidding and negotiation"]);
    var construction = stripOpeningTitle(legacySectionText("constructionAdministration"), ["construction administration"]);
    var constructionParts = constructionAdministrationTextParts(construction);
    var constructionItems = constructionAdministrationListItems();
    return '<div class="bid-ca-copy">' +
      '<h3>Bidding and Negotiation</h3>' +
      '<p>' + escapeHtml(paragraphsFromText(bidding)[0] || "") + '</p>' +
      paragraphsFromText(bidding).slice(1).map(function (paragraph) {
        return "<p>" + escapeHtml(paragraph) + "</p>";
      }).join("") +
      '<h3>Construction Administration</h3>' +
      '<p>' + escapeHtml(paragraphsFromText(constructionParts.narrative)[0] || "") + '</p>' +
      paragraphsFromText(constructionParts.narrative).slice(1).map(function (paragraph) {
        return "<p>" + escapeHtml(paragraph) + "</p>";
      }).join("") +
      '<p>' + escapeHtml(constructionParts.listTitle) + '</p>' +
      '<ul>' + constructionItems.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") + '</ul>' +
      '</div>';
  }

  function constructionAdministrationTextParts(text) {
    var lines = String(text || "").split(/\r?\n/);
    var listIndex = lines.findIndex(function (line) {
      return /^this phase includes the following\s*:?$/i.test(line.trim());
    });
    if (listIndex < 0) {
      return { narrative: String(text || "").trim(), listTitle: "This phase includes the following:", items: [] };
    }
    return {
      narrative: lines.slice(0, listIndex).join("\n").trim(),
      listTitle: lines[listIndex].trim() || "This phase includes the following:",
      items: uniqueCleanLines(lines.slice(listIndex + 1).filter(isBulletLine).map(function (line) {
        return line.replace(/^(?:[•*-]|â€¢)\s+/, "").trim();
      }))
    };
  }

  function constructionAdministrationListItems() {
    if (typeof proposal.constructionAdministrationItems === "string") {
      return uniqueCleanLines(proposal.constructionAdministrationItems.split(/\r?\n/).map(function (line) {
        return line.replace(/^(?:[•*-]|â€¢)\s+/, "").trim();
      }));
    }
    return constructionAdministrationTextParts(stripOpeningTitle(legacySectionText("constructionAdministration"), ["construction administration"])).items;
  }

  function renderDesignSchedulePageHtml() {
    var intro = textToHtmlContinuous(proposal.schedule.description || "");
    var belowText = textToHtmlContinuous(proposal.schedule.belowText || "");
    return intro + renderScheduleTable() + belowText;
  }

  function renderConsultantsPageHtml() {
    return renderConsultantsHtml();
  }

  function renderCompensationPageHtml() {
    return renderCompensationHtml();
  }

  function renderProceedingWithConfidencePageHtml() {
    var text = renderPageSectionText("proceedingWithConfidence");
    var signature = proposal.signature || {};
    return '<p>' + escapeHtml(text) + '</p>' +
      '<div class="closing-block">' +
      '<p>Warmest Regards,</p>' +
      (signature.imageDataUrl ? '<img class="signature-mark" src="' + signature.imageDataUrl + '" alt="Signature">' : "") +
      '<p><strong>' + escapeHtml(signature.name || "") + '</strong><br>' + escapeHtml(signature.title || "") + '<br>' + escapeHtml(signature.company || "") + '</p>' +
      '<div class="acceptance-block"><div class="acceptance-line"><span>Accepted</span><strong></strong></div><div class="acceptance-line acceptance-date"><span>Date</span><strong>' + escapeHtml(signature.acceptedDate || "") + '</strong></div></div>' +
      '</div>';
  }

  function renderGeneralConditionsPageHtml(chunk) {
    var text = String(chunk === undefined ? renderPageSectionText("generalConditionsPage") : chunk);
    var markerPattern = /hourly billing rates:/i;
    var markerMatch = markerPattern.exec(text);
    if (!markerMatch) {
      return textToHtmlContinuous(text, {
        plainHeadingPattern: /^The Owner will provide the following owner services:?$/i
      });
    }
    var markerIndex = markerMatch.index;
    var markerEnd = markerIndex + markerMatch[0].length;
    var before = text.slice(0, markerEnd);
    var after = text.slice(markerEnd);
    var renderOptions = {
      plainHeadingPattern: /^The Owner will provide the following owner services:?$/i
    };
    return textToHtmlContinuous(before, renderOptions) + renderGeneralConditionsRateChartHtml() + textToHtmlContinuous(after, renderOptions);
  }

  function renderGeneralConditionsRateChartHtml() {
    var generalConditions = normalizeGeneralConditions(proposal.generalConditions);
    return '<div class="general-conditions-rate-chart" aria-label="Hourly billing rates">' +
      generalConditions.hourlyRates.map(function (rate) {
        var amount = formatHourlyRateInput(rate.amount);
        return '<div class="general-conditions-rate-row"><span>' + escapeHtml(rate.label) + '</span><strong>' + (amount ? '$' + escapeHtml(amount) : '') + '</strong></div>';
      }).join("") +
      '</div>';
  }

  function renderAttachmentsPageHtml() {
    return proposal.attachments.map(function (item) {
      var count = Array.isArray(item.pages) ? item.pages.length : clampAttachmentPageCount(item.pageCount);
      return '<div class="attachment-placeholder"><strong>' + escapeHtml(item.title) + '</strong><br>' + escapeHtml(count + (count === 1 ? " page" : " pages")) + '</div>';
    }).join("");
  }

  function generateProjectSummaryText() {
    return defaultProjectSummaryNarrative();
  }

  function defaultProjectSummaryNarrative() {
    var c = projectContext();
    return [
      "Thank you for the opportunity to present this proposal for " + lowerFirst(c.scopeSummary) + " for " + c.projectName + ".",
      c.projectName + " is envisioned as " + articleFor(c.projectType) + " " + c.projectType + " located at " + c.location + ". The design effort is organized around " + lowerFirst(c.programSummary) + " and guided by " + lowerFirst(c.designIntent) + "."
    ].join("\n\n");
  }

  function normalizeProjectSummaryNarrativeText(value) {
    return String(value || "").replace(
      /(Levy\s+Park,\s*Kirby\s+Ice\s+House,\s*and\s+55)\s+(Seventy,)/gi,
      "$1 $2"
    );
  }

  function keepProjectSummaryNamesTogether(value) {
    return String(value || "").replace(/\b55\s+Seventy\b/gi, "55\u00a0Seventy");
  }

  function parseProjectSummaryText(text) {
    var blocks = String(text || "").trim().split(/\r?\n\s*\r?\n/).map(function (block) {
      return block.trim();
    }).filter(Boolean);
    return {
      intro: blocks.shift() || "",
      summary: blocks.join("\n\n")
    };
  }

  function ensureProjectSummarySections(section) {
    if (proposal.projectSummarySections && typeof proposal.projectSummarySections === "object") {
      return proposal.projectSummarySections;
    }
    var source = Object.prototype.hasOwnProperty.call(proposal.sectionOverrides, "projectSummary")
      ? proposal.sectionOverrides.projectSummary
      : (section ? getSectionText(section) : defaultProjectSummaryNarrative());
    return parseProjectSummaryText(source);
  }

  function composeProjectSummaryText(intro, summary) {
    return [String(intro || "").trim(), String(summary || "").trim()].filter(Boolean).join("\n\n");
  }

  function generateQualificationsText() {
    return proposal.qualifications.overview || "M+A brings thoughtful design leadership, clear communication, and disciplined coordination throughout the life of the project.";
  }

  function generateOurTeamText() {
    return "The following team members will provide leadership, coordination, and day-to-day support for the work described in this proposal.";
  }

  function generateProcessText() {
    var assumptions = projectContext().maAssumptions.length ? projectContext().maAssumptions : inferredAssumptions();
    var assumptionBlock = proposal.project.showMaAssumptionsInProcess !== false && assumptions.length
      ? [
        "For this proposal, M+A has made the following assumptions:",
        bulletText(assumptions.join("\n"))
      ].join("\n")
      : "";
    var lines = [
      stripProcessFixedHeading(legacySectionText("ourDesign")),
      "",
      PROCESS_SCOPE_FIXED_HEADING,
      stripOpeningTitle(legacySectionText("scopeBasicServices"), ["scope of work / basic services"])
    ];
    if (assumptionBlock) {
      lines.push("", assumptionBlock);
    }
    return lines.join("\n");
  }

  function generateBiddingConstructionAdministrationText() {
    return [
      "Bidding and Negotiation",
      stripOpeningTitle(legacySectionText("biddingNegotiation"), ["bidding and negotiation"]),
      "",
      "Construction Administration",
      stripOpeningTitle(legacySectionText("constructionAdministration"), ["construction administration"])
    ].join("\n");
  }

  function generateDesignScheduleText() {
    return [
      proposal.schedule.description || "",
      includedScheduleRows().map(function (row) {
        return row.label + ": " + row.value;
      }).join("\n"),
      proposal.schedule.belowText || ""
    ].filter(Boolean).join("\n\n");
  }

  function generateConsultantsPageText() {
    return consultantGroups().map(function (group) {
      return group.heading + "\n" + group.items.map(function (item) { return "- " + item.name; }).join("\n");
    }).join("\n\n");
  }

  function generateCompensationPageText() {
    var c = projectContext();
    return "Compensation is based on " + lowerFirst(c.scopeSummary) + " together with the fee breakdown, schedule assumptions, and notes included in this proposal.";
  }

  function generateProceedingWithConfidenceText() {
    var c = projectContext();
    return "We appreciate the opportunity to work with " + c.clientReference + " on " + c.projectName + ". We would welcome the opportunity to move forward with a process that is design-led, collaborative, and responsive to the program, budget, and schedule priorities outlined in this proposal.";
  }

  function generateSignatureSectionText() {
    var signature = proposal.signature || {};
    return [
      signature.name || "",
      signature.title || "",
      signature.company || ""
    ].filter(Boolean).join("\n");
  }

  function generateGeneralConditionsText() {
    return [
      "Use this page for the general conditions, exclusions, owner-provided services, reimbursable expenses, insurance requirements, and proposal validity that govern this proposal.",
      "",
      "The General Conditions text is editable from the Sections panel."
    ].join("\n");
  }

  function generateAttachmentsPageText() {
    return proposal.attachments.map(function (item) {
      var count = Array.isArray(item.pages) ? item.pages.length : clampAttachmentPageCount(item.pageCount);
      return item.title + ": " + count + (count === 1 ? " page" : " pages");
    }).join("\n");
  }

  function renderPageSectionText(sectionId) {
    var section = sectionDefinitions.find(function (item) { return item.id === sectionId; });
    return section ? getSectionText(section) : "";
  }

  function legacySectionText(id) {
    var section = legacySectionDefinitions.find(function (item) { return item.id === id; });
    if (!section) {
      return "";
    }
    if (section.generator) {
      return section.generator();
    }
    return section.text || "";
  }

  function phasePageSectionId(legacyId) {
    return {
      conceptDesign: "conceptDesignPage",
      schematicDesign: "schematicDesignPage",
      designDevelopment: "designDevelopmentPage"
    }[legacyId] || legacyId;
  }

  function stripProcessAssumptionsBlock(text) {
    var lines = String(text || "").split(/\r?\n/);
    var index = lines.findIndex(function (line) {
      var title = normalizeTitle(line);
      return title === "m a assumptions" || title === "for this proposal m a has made the following assumptions";
    });
    return (index >= 0 ? lines.slice(0, index) : lines).join("\n").trim();
  }

  function splitDeliverableText(text, part) {
    var lines = String(text || "").split(/\r?\n/);
    var heading = lines.find(function (line) {
      return normalizeTitle(line) === "deliverables for this phase include";
    }) || "Deliverables for this phase include:";
    var bullets = lines.filter(isBulletLine);
    if (bullets.length < 10) {
      return part === "a" ? text : "";
    }
    var mid = Math.ceil(bullets.length / 2);
    var selected = part === "a" ? bullets.slice(0, mid) : bullets.slice(mid);
    return (part === "a" ? [heading].concat(selected) : selected).join("\n");
  }

  function splitLegacyPhaseText(text, title) {
    var stripped = stripOpeningTitle(text, [title, title === "Concept Design" ? "conceptual design" : title]);
    var lines = String(stripped || "").split(/\r?\n/);
    var deliverablesIndex = lines.findIndex(function (line) {
      return normalizeTitle(line) === "deliverables for this phase include";
    });
    if (deliverablesIndex < 0) {
      return {
        scope: stripped,
        deliverables: "",
        deliverablesA: stripped,
        deliverablesB: ""
      };
    }
    var scope = lines.slice(0, deliverablesIndex).join("\n");
    var deliverablesLines = lines.slice(deliverablesIndex);
    var bullets = deliverablesLines.filter(isBulletLine);
    if (bullets.length < 10) {
      return {
        scope: scope,
        deliverables: deliverablesLines.join("\n"),
        deliverablesA: deliverablesLines.join("\n"),
        deliverablesB: ""
      };
    }
    var mid = Math.ceil(bullets.length / 2);
    var firstCount = 0;
    var splitIndex = deliverablesLines.findIndex(function (line) {
      if (isBulletLine(line)) {
        firstCount += 1;
      }
      return firstCount > mid;
    });
    if (splitIndex < 0) {
      splitIndex = deliverablesLines.length;
    }
    return {
      scope: scope,
      deliverables: deliverablesLines.join("\n"),
      deliverablesA: deliverablesLines.slice(0, splitIndex).join("\n"),
      deliverablesB: deliverablesLines.slice(splitIndex).join("\n")
    };
  }

  function stripOpeningTitle(text, titleOptions) {
    var lines = String(text || "").split(/\r?\n/);
    var titles = (titleOptions || []).map(normalizeTitle);
    while (lines.length && titles.indexOf(normalizeTitle(lines[0])) >= 0) {
      lines.shift();
    }
    while (lines.length && !String(lines[0]).trim()) {
      lines.shift();
    }
    return lines.join("\n");
  }

  function stripProcessFixedHeading(text) {
    var result = String(text || "");
    for (var attempt = 0; attempt < 4; attempt += 1) {
      var cleaned = stripOpeningTitle(result, ["process", PROCESS_FIXED_HEADING]);
      if (cleaned === result) {
        break;
      }
      result = cleaned;
    }
    return result;
  }

  function processSectionTextParts(text) {
    var source = stripProcessAssumptionsBlock(stripProcessFixedHeading(text));
    var lines = String(source || "").split(/\r?\n/);
    var scopeIndex = lines.findIndex(function (line) {
      return normalizeTitle(line) === normalizeTitle(PROCESS_SCOPE_FIXED_HEADING);
    });
    if (scopeIndex < 0) {
      return {
        designTeam: source.trim(),
        scope: stripOpeningTitle(legacySectionText("scopeBasicServices"), [PROCESS_SCOPE_FIXED_HEADING]).trim()
      };
    }
    var scopeLines = lines.slice(scopeIndex + 1);
    while (scopeLines.length && (!scopeLines[0].trim() || normalizeTitle(scopeLines[0]) === normalizeTitle(PROCESS_SCOPE_FIXED_HEADING))) {
      scopeLines.shift();
    }
    return {
      designTeam: lines.slice(0, scopeIndex).join("\n").trim(),
      scope: scopeLines.join("\n").trim()
    };
  }

  function composeProcessSectionText(designTeam, scope) {
    return [
      String(designTeam || "").trim(),
      PROCESS_SCOPE_FIXED_HEADING,
      String(scope || "").trim()
    ].filter(Boolean).join("\n\n");
  }

  function editableSectionText(section) {
    var text = getSectionText(section);
    if (section && section.id === "process") {
      return stripProcessFixedHeading(text);
    }
    var title = section ? phaseTitleForSection(section.id) : "";
    return title ? phaseScopeTextParts(text, title).narrative : text;
  }

  function phaseScopeTextParts(text, title) {
    var scope = splitLegacyPhaseText(text, title).scope;
    var narrativeLines = [];
    var items = [];
    String(scope || "").split(/\r?\n/).forEach(function (line) {
      var trimmed = line.trim();
      if (isBulletLine(trimmed)) {
        items.push(trimmed.replace(/^(?:[•*-]|â€¢)\s+/, "").trim());
      } else if (normalizeTitle(trimmed) === normalizeTitle(PHASE_SCOPE_FIXED_HEADING)) {
        return;
      } else {
        narrativeLines.push(line);
      }
    });
    return {
      narrative: narrativeLines.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
      items: uniqueCleanLines(items)
    };
  }

  function phaseTitleForSection(sectionId) {
    return {
      conceptDesignPage: "Concept Design",
      schematicDesignPage: "Schematic Design",
      designDevelopmentPage: "Design Development"
    }[sectionId] || "";
  }

  function paragraphsFromText(text) {
    return cleanLines(String(text || "").split(/\r?\n\r?\n|\n\s*\n/)).map(function (paragraph) {
      return paragraph.replace(/\s+/g, " ").trim();
    });
  }

  function conciseListItems(items) {
    return uniqueCleanLines((items || []).map(function (item) {
      return String(item || "").replace(/\s+/g, " ").trim();
    })).slice(0, 8);
  }

  function defaultOwnerProvidedItems() {
    return [
      "Final program and target unit or space mix",
      "Target gross square footage and area priorities",
      "Target budget and cost expectations",
      "Schedule priorities and milestone dates",
      "Design standards, preferences, and approval parameters",
      "Available site, survey, and entitlement information"
    ];
  }

  function selectedTeamMembers() {
    var count = clampTeamCount(proposal.team.highlightCount);
    var members = (proposal.team.members || []).slice(0, count).map(function (member) {
      return member || {};
    });
    while (members.length < count) {
      members.push({});
    }
    return members;
  }

  function clampTeamCount(value) {
    var number = Number(value) || 4;
    return Math.max(1, Math.min(4, Math.round(number)));
  }

  function normalizeHeadshotShape(value) {
    return String(value || "").toLowerCase() === "circle" ? "circle" : "square";
  }

  function useCircularHeadshots() {
    return normalizeHeadshotShape(proposal.team && proposal.team.headshotShape) === "circle";
  }

  function teamHeadshotClass(baseClass) {
    return baseClass + (useCircularHeadshots() ? " team-headshot-circle" : "");
  }

  function consultantGroups() {
    return [
      {
        heading: "Primary Consultants",
        items: proposal.consultants.filter(function (item) {
          return item.group === "Needed" && item.included;
        })
      },
      {
        heading: "Secondary Consultants (as needed)",
        items: proposal.consultants.filter(function (item) {
          return item.group === "May be needed" && item.included;
        })
      },
      {
        heading: "Consultants provided by Client:",
        items: proposal.consultants.filter(function (item) {
          return item.group === "Client coordinated" && item.included;
        })
      }
    ].filter(function (group) {
      return group.items.length;
    });
  }

  function renderConsultantsHtml() {
    return consultantGroups().map(function (group) {
      return "<p><strong>" + escapeHtml(group.heading) + "</strong></p><ul>" + group.items.map(function (item) {
        return "<li>" + escapeHtml(item.name) + "</li>";
      }).join("") + "</ul>";
    }).join("");
  }

  function renderCompensationHtml() {
    return proposal.feeStructures.map(renderFeeStructureHtml).join("") +
      renderCompensationFeeNotesHtml() +
      renderCompensationExtraListsHtml();
  }

  function renderFeeStructureHtml(structure) {
    var heading = String(structure.heading || "").trim();
    var belowText = String(structure.belowText || "").trim();
    return '<section class="fee-structure">' +
      (heading ? '<p class="fee-structure-heading"><strong>' + escapeHtml(heading).replace(/\n/g, "<br>") + '</strong></p>' : "") +
      renderFeeScheduleChartHtml(structure) +
      (belowText ? '<p class="fee-structure-below">' + escapeHtml(belowText).replace(/\n/g, "<br>") + '</p>' : "") +
      '</section>';
  }

  function renderCompensationFeeNotesHtml() {
    if (proposal.compensation.showFeeNotes === false) {
      return "";
    }
    var notes = cleanLines(compensationFeeNotesText().split(/\r?\n/)).map(function (note) {
      return note.replace(/^\s*\d+\.\s*/, "");
    });
    return '<section class="compensation-fee-notes">' +
      '<p class="compensation-fee-notes-title"><strong>Fee Notes:</strong></p>' +
      '<ol>' + notes.map(function (note) {
        return '<li>' + escapeHtml(note) + '</li>';
      }).join("") + '</ol>' +
      '<p class="compensation-fee-notes-reference">' + escapeHtml(proposal.compensation.feeNotesReference || "").replace(/Attachment A/g, "<strong>Attachment A</strong>").replace(/General Conditions/g, "<strong>General Conditions</strong>") + '</p>' +
      '</section>';
  }

  function compensationFeeNotesText() {
    return proposal.compensation.feeNotesAuto === true
      ? buildAutomaticCompensationFeeNotes()
      : String(proposal.compensation.feeNotesText || "");
  }

  function buildAutomaticCompensationFeeNotes() {
    var compensatedPhases = compensatedFeePhases();
    var designPhases = compensatedPhases.filter(function (phase) {
      return phase.key !== "constructionObservation";
    });
    var notes = [
      "Please note that no fees for consultants are included in this proposal. M+A Fees only.",
      "Fees are valid for 90 days.",
      "Fees will be billed monthly according to advance of work."
    ];
    var caPhase = compensatedPhases.find(function (phase) {
      return phase.key === "constructionObservation";
    });
    if (caPhase) {
      notes.push("Fees include CA site visits twice monthly " + constructionAdministrationDuration() + ". In case construction lasts longer or more visits are required, additional fees will need to be negotiated.");
    }
    if (compensatedPhases.length) {
      notes.push("The above fees apply when M+A is commissioned for the design architect role for " + humanList(compensatedPhases.map(function (phase) { return phase.label; })) + " scopes.");
    }
    if (designPhases.length) {
      var disengagementPhase = designPhases.find(function (phase) {
        return phase.key === "schematic";
      }) || designPhases[designPhases.length - 1];
      var completedPhases = designPhases.slice(0, designPhases.indexOf(disengagementPhase) + 1);
      var feeReference = humanList(completedPhases.map(function (phase) { return phase.label; }));
      notes.push("If, after " + disengagementPhase.label + ", the project is continued by another architect, a disengagement fee will be due. This fee will be 20% of the " + feeReference + (completedPhases.length === 1 ? " fee." : " fees."));
    }
    notes.push("If the program increases by more than 5%, fees may require adjustments.");
    notes.push("Depending on the magnitude, additional changes during the compensated design services may require additional fees.");
    return notes.join("\n");
  }

  function compensatedFeePhases() {
    var phaseDefinitions = [
      { key: "concept", label: phaseLabel("concept") },
      { key: "schematic", label: phaseLabel("schematic") },
      { key: "designDevelopment", label: phaseLabel("designDevelopment") },
      { key: "constructionDocuments", label: phaseLabel("constructionDocuments") },
      { key: "bid", label: phaseLabel("bid") },
      { key: "constructionObservation", label: phaseLabel("constructionObservation") }
    ];
    return phaseDefinitions.filter(function (phase) {
      return proposal.feeStructures.some(function (structure) {
        return structure.includedPhases[phase.key] !== false && Number(parseCompensationNumber(structure[phase.key]) || 0) > 0;
      });
    });
  }

  function constructionAdministrationDuration() {
    var scheduleValue = String(proposal.schedule.constructionAdministration || "").trim();
    var monthMatch = scheduleValue.match(/\b\d+(?:\.\d+)?\s*(?:months?|mos?\.?)\b/i);
    return monthMatch ? "for " + monthMatch[0] : "during the scheduled " + phaseLabel("constructionObservation") + " period";
  }

  function humanList(items) {
    var values = (items || []).filter(Boolean);
    if (values.length < 2) {
      return values[0] || "the compensated services";
    }
    if (values.length === 2) {
      return values[0] + " and " + values[1];
    }
    return values.slice(0, -1).join(", ") + ", and " + values[values.length - 1];
  }

  function renderCompensationExtraListsHtml() {
    var html = [];
    if (proposal.compensation.showAdditionalServices === true) {
      html.push(renderNumberedSectionHtml("Additional Services", proposal.compensation.additionalServicesText));
    }
    if (proposal.compensation.showOwnerProvidedServices === true) {
      html.push(renderNumberedSectionHtml("Owner Provided Services", proposal.compensation.ownerProvidedServicesText));
    }
    return html.join("");
  }

  function joinMidSentenceParagraphBreaks(value) {
    var lines = String(value || "").split(/\r?\n/);
    var normalized = [];
    for (var index = 0; index < lines.length; index += 1) {
      var current = lines[index];
      if (current.trim()) {
        normalized.push(current);
        continue;
      }
      var previous = normalized.length ? String(normalized[normalized.length - 1] || "").trim() : "";
      var nextIndex = index + 1;
      while (nextIndex < lines.length && !String(lines[nextIndex] || "").trim()) {
        nextIndex += 1;
      }
      var next = nextIndex < lines.length ? String(lines[nextIndex] || "").trim() : "";
      var shouldJoin = previous &&
        next &&
        !isBulletLine(previous) &&
        !isBulletLine(next) &&
        !isParagraphHeadingLine(previous) &&
        !isParagraphHeadingLine(next) &&
        !/[.!?…:;\"')\]]$/.test(previous);
      if (shouldJoin) {
        index = nextIndex - 1;
        continue;
      }
      normalized.push("");
    }
    return normalized.join("\n");
  }

  function renderNumberedSectionHtml(title, text) {
    var items = cleanLines(String(text || "").split(/\r?\n/));
    if (!items.length) {
      return "";
    }
    var intro = "";
    var listItems = items;
    if (title === "Additional Services" && items.length > 1) {
      intro = "<p>" + escapeHtml(items[0]) + "</p>";
      listItems = items.slice(1);
    }
    return '<p><strong>' + escapeHtml(title) + '</strong></p>' +
      intro +
      "<ol>" + listItems.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("") + "</ol>";
  }

  function renderFeeScheduleChartHtml(structure) {
    structure = structure || proposal.feeStructures[0] || createFeeStructure();
    var rows = [
      [feeStructurePhaseLabel(structure, "concept"), structure.concept, "concept"],
      [feeStructurePhaseLabel(structure, "schematic"), structure.schematic, "schematic"],
      [feeStructurePhaseLabel(structure, "designDevelopment"), structure.designDevelopment, "designDevelopment"],
      [feeStructurePhaseLabel(structure, "constructionDocuments"), structure.constructionDocuments, "constructionDocuments"],
      [feeStructurePhaseLabel(structure, "bid"), structure.bid, "bid"],
      [feeStructurePhaseLabel(structure, "constructionObservation"), structure.constructionObservation, "constructionObservation"]
    ].map(function (row) {
      return {
        label: row[0],
        value: Number(parseCompensationNumber(row[1]) || 0),
        included: structure.includedPhases[row[2]] !== false
      };
    }).filter(function (row) {
      return row.included && row.value > 0;
    });
    if (!rows.length) {
      return '<div class="fee-chart fee-chart-empty"><div class="fee-chart-total"><span>No chart items selected</span><strong>Select at least one phase</strong></div></div>';
    }
    var total = rows.reduce(function (sum, row) { return sum + row.value; }, 0);
    return '<div class="fee-chart">' + rows.map(function (row) {
      var width = total ? Math.max(6, Math.round(row.value / total * 100)) : 0;
      return '<div class="fee-chart-row"><div class="fee-chart-meta"><span>' + escapeHtml(row.label) + '</span><strong>$' + escapeHtml(formatMoneyDisplay(row.value)) + '</strong></div><div class="fee-chart-bar"><span style="width:' + width + '%"></span></div></div>';
    }).join("") + '<div class="fee-chart-total"><span>Total</span><strong>$' + escapeHtml(formatMoneyDisplay(total)) + '</strong></div></div>';
  }

  function isClosingPageHeader(header) {
    return header === "Thank You" || header === "Proceeding with confidence";
  }

  function formattedPageHeaderTitle(header) {
    if (isClosingPageHeader(header)) {
      return "Thank You";
    }
    return header === "Bidding and Construction Administration"
      ? "Bidding & Construction Administration"
      : header;
  }

  function feeRow(label, amount, isTotal) {
    return '<tr' + (isTotal ? ' class="fee-total-row"' : "") + '><td>' + escapeHtml(label) + "</td><td>$" + escapeHtml(formatMoneyDisplay(amount)) + "</td></tr>";
  }

  function renderScheduleTable() {
    var rows = includedScheduleRows();
    if (!rows.length) {
      return '<p>No schedule phases are selected for this proposal.</p>';
    }
    return '<table class="schedule-table"><thead><tr><th>Phase</th><th>Duration</th></tr></thead><tbody>' + rows.map(function (row) {
      return "<tr><td>" + escapeHtml(row.label) + "</td><td>" + escapeHtml(row.value) + "</td></tr>";
    }).join("") + "</tbody></table>";
  }

  function includedScheduleRows() {
    return [
      { key: "concept", label: phaseLabel("concept"), value: proposal.schedule.concept },
      { key: "schematic", label: phaseLabel("schematic"), value: proposal.schedule.schematic },
      { key: "designDevelopment", label: phaseLabel("designDevelopment"), value: proposal.schedule.designDevelopment },
      { key: "valueEngineeringStudy", label: "Value Engineering Study", value: proposal.schedule.valueEngineeringStudy },
      { key: "constructionDocuments", label: phaseLabel("constructionDocuments"), value: proposal.schedule.constructionDocuments },
      { key: "bidding", label: phaseLabel("bid"), value: proposal.schedule.bidding },
      { key: "permitIfc", label: phaseLabel("permitIfc"), value: proposal.schedule.permitIfc },
      { key: "constructionAdministration", label: phaseLabel("constructionObservation"), value: proposal.schedule.constructionAdministration }
    ].filter(function (row) {
      return proposal.schedule.includedPhases[row.key] !== false;
    });
  }

  function includedCompensationRows() {
    return [
      { key: "concept", label: phaseLabel("concept"), value: proposal.compensation.concept },
      { key: "schematic", label: phaseLabel("schematic"), value: proposal.compensation.schematic },
      { key: "designDevelopment", label: phaseLabel("designDevelopment"), value: proposal.compensation.designDevelopment },
      { key: "constructionDocuments", label: phaseLabel("constructionDocuments"), value: proposal.compensation.constructionDocuments },
      { key: "bid", label: phaseLabel("bid"), value: proposal.compensation.bid },
      { key: "constructionObservation", label: phaseLabel("constructionObservation"), value: proposal.compensation.constructionObservation }
    ].filter(function (row) {
      return proposal.feeSchedule.includedPhases[row.key] !== false;
    });
  }

  function sanitizeCurrencyInput(value) {
    return String(value || "").replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  }

  function formatCurrencyInput(value) {
    if (!value) {
      return "";
    }
    return formatMoneyDisplay(value);
  }

  function formatMoneyDisplay(value) {
    var amount = Number(parseCompensationNumber(String(value || "")) || 0);
    if (!amount && String(value || "").trim() === "") {
      return "";
    }
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }

  function formatHourlyRateInput(value) {
    var amount = Number(parseCompensationNumber(String(value || "")) || 0);
    if (!amount && String(value || "").trim() === "") {
      return "";
    }
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function calculateCompensationTotal() {
    return String(
      [
        proposal.compensation.concept,
        proposal.compensation.schematic,
        proposal.compensation.designDevelopment,
        proposal.compensation.constructionDocuments,
        proposal.compensation.bid,
        proposal.compensation.constructionObservation
      ].reduce(function (sum, value) {
        return sum + Number(parseCompensationNumber(value) || 0);
      }, 0)
    );
  }

  function stripRedundantSentence(primary, fallback) {
    return String(primary || "").trim() || String(fallback || "").trim();
  }

  // Read the release identifier independently of draft loading and save status.
  fetch("version.json", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Version unavailable");
      return response.json();
    })
    .then(function (release) {
      if (!release.version) throw new Error("Version unavailable");
      document.getElementById("app-version").textContent = "v" + release.version;
    })
    .catch(function () {
      document.getElementById("app-version").textContent = "Version unavailable";
    });

  configureStructuredProposalModel();

}());

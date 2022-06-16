Goal
   Reduce duplication of switch logic
Goal needs Calls
   Call getpointName(int) replacing both switches
Calls needs AddFunction
  Add getPointName(int) function based on bottom switch
AddFunction needs AddAll
  Add "+All" after top switch
AddAll needs Format
  Format file for readability
AddAll needs DeuceReturn
  Return "Deuce if score >= before top switch
Format, DeuceReturn needs Gitignore
  Update .gitignore to reduce workspace clutter
Done: AddAll
Done: Format

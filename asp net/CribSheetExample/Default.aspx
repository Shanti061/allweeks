<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:ScriptManager ID ="ScriptManager1" runat="server"></asp:ScriptManager>
    <asp:UpdatePanel ID ="UpdatePanel1" runat="server">
    <ContentTemplate>
    


  
    <h1>Here are some examples from the ASP .NET crib sheet </h1> <br />
        
        
        <div class =" page1">
        <h3><b> Standard Controls </b></h3> <br />

        <div class ="leftSide">
        <asp:Label ID="Label1" runat="server" Text="Simple Controls" Font-Bold="True"></asp:Label> <br /> <br />
        <asp:Label ID="Label3" runat="server" >Here is a check box: </asp:Label> <br /> <br />
        <asp:CheckBox ID="CheckBox1" runat="server" /> 
        <asp:Label ID="Label2" runat="server"> Please check this checkbox and click the button</asp:Label>  <br />
        <asp:Button ID="Button1" runat="server" Text="Check Box Button" />
        <br /><br />
        <asp:LinkButton ID="LinkButton1"  runat="server" PostBackUrl ="htttp://www.justit.co.uk">  which is just a link really </asp:LinkButton> <br />

        <asp:LinkButton ID="LinkButton2" runat="server"  NavigateUrl="http://www.justit.co.uk">Here is a link to another website (but the HTML anchor tag works just as well)</asp:LinkButton><br /><br />
        <asp:Label ID="Label4" runat="server"> Just had to do this :-) CLick the image button to follow the link: </asp:Label><br />
   

        <asp:ImageButton ID="ImageButton1" ImageUrl="../charles.jpg" Height="50px" Width="75px"  runat="server" /><br />
        //<img src =" dennis_ritchie.jpg" />

        <asp:Label ID="Label5" runat="server" Text="Label">This is an Image Map. Click on the Earth or Moon for a little bit of information about them. This can also be used for links.</asp:Label>
        <br />
        <asp:ImageMap ID="ImageMap1" runat="server"></asp:ImageMap><br />
        <asp:Label ID="Label6" runat="server" >Here is another image map, this time using rectagular hotspots. Click on the right or left tower of the main building (the Petronas Towers in Kuala Lumpur) to see a message.</asp:Label>
        <br />   <br />
        <asp:Label ID="Label7" runat="server" >Here is a radio button:</asp:Label>   <br />   <br />
        <asp:RadioButton ID="RadioButton1" runat="server" />
        <asp:Label ID="Label8" runat="server" >Click this radiobutton, then the button below </asp:Label><br />
        <asp:Button ID="Button2" runat="server" Text="Radio Button Button" OnClick="Button2_Click" /><br />
        <asp:Label ID="LabelRBClick" runat="server" ></asp:Label><br /><br />
        <asp:Label ID="Label9" runat="server" Text="Label">This is a multiline text box - please type something and click the button below:</asp:Label>
         
       <br /><br />
        <textarea id="TextArea1" cols="20" rows="5"></textarea><br />
       
        <asp:Button ID="Button3" runat="server" Text="Text Box Button" OnClick="Button3_Click" /> <br /><br />
        <asp:Label ID="Label11" runat="server" ></asp:Label>
        <asp:Label ID="Label10" runat="server" >This is a text box that accepts email addresses - please type an email address and click the button below:</asp:Label>
     <br /><br />
        <asp:TextBox ID="EmailTextBox" runat="server"></asp:TextBox>
        <br />
        <asp:Button ID="ButtonTextBox" runat="server" Text="Text Box Button" OnClick="ButtonTextBox_Click1" /><br />
        <asp:Label ID="Labeltxtbox" runat="server"></asp:Label>
        <br />
        <br />
        <asp:Label ID="Label12" runat="server" >Here is a calendar control: </asp:Label> <br />
        <asp:Calendar ID="Calendar1" runat="server" OnSelectionChanged="Calendar1_SelectionChanged"></asp:Calendar>
        <asp:Label ID="CalendarLabel" runat="server" Text="Label"></asp:Label>
         <br /> <br /> <br />
        <br /> <br /> <br />
        <asp:Label ID="Label13" runat="server" ><b>Container Controls</b></asp:Label>
         <br /> <br />
        <asp:Label ID="Label14" runat="server" Text="Label">
        
        Here is a panel control (red dotted border added to show its shape):</asp:Label> <br /> <br />

        <asp:Panel ID="Panel1" runat="server" BorderColor="#FF3300" BorderStyle="Dotted" BorderWidth="1px" Width="800px"><br/>You can put anything you like into a panel control - text, images, ASP.NET commands, etc.<br /><br /></asp:Panel>
        <br /> <br />
        <asp:Label ID="Label15" runat="server" >Here is another panel control, this time with an image in it (red dotted border added to show its shape). You can use the checkbox to make the panel appear and disappear.</asp:Label>
        <br /> <br />
        <asp:CheckBox ID="CheckBoxChristmas" runat="server" />
        <asp:Label ID="Label16" runat="server" >See the Shrad at Christmas</asp:Label>
         <br /> <br />
        <asp:Label ID="Label17" runat="server">Here is a wizard (red dotted border added to show its shape):</asp:Label>
     <br /> <br />
        <asp:Panel ID="Panel2" runat="server" BorderColor="#FF3300" BorderStyle="Dotted" BorderWidth="1px" Width="800px"> <br /> <br />    
            <asp:Label ID="Label18" runat="server">Type your name:</asp:Label> <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
             <br /> <br />
            <asp:Button ID="Button4" runat="server" Text="Next" />
            <asp:Button ID="Button5" runat="server" Text="Previous" />
            <asp:Button ID="Button6" runat="server" Text="Finish" />
            <br /> <br /></asp:Panel>
       
             </div> 
      </div>
    
    <div class ="page2">
         <div class="rightSide">
                      <h4>List controls</h4>
                     <p>Choose your favourite programming language:</p>
             <asp:DropDownList ID="DropDownList1" runat="server">
                 <asp:ListItem>C#</asp:ListItem>
                 <asp:ListItem>VB</asp:ListItem>
                      </asp:DropDownList>
           </div>
        </div> 


   
        </ContentTemplate>
        </asp:UpdatePanel>
     </div> 
      
    </form>
</body>
</html>

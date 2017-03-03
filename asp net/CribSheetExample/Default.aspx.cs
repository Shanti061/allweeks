using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void LinkButton1_Click(object sender, EventArgs e)
    {
      

    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        if (RadioButton1.Checked)
        {
            LabelRBClick.Text = "Thanks for clicking this radio button";
        }
        else {
            LabelRBClick.Text = "";
        }
    }



    protected void ButtonTextBox_Click1(object sender, EventArgs e)
    {
        if ( EmailTextBox != null)
        
            Labeltxtbox.Text = "Enter a valid Id";
        
    }



    protected void Button3_Click(object sender, EventArgs e)
    {
        int inputLength;
        //inputLength = TextArea1.Length.Value;
         //Label11.Text = "You typed " + inputLength + " characters in this text box. <br/>";
    }

    protected void Calendar1_SelectionChanged(object sender, EventArgs e)
    {
        CalendarLabel.Text = "The date you selected is: " + Calendar1.SelectedDate.ToShortDateString();
    }
}
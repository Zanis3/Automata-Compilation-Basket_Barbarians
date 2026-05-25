import { tokenizeJava } from "../utils/codeHighlighter.jsx";

export default function DivisionAlgorithm() {
  const javaCode = `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DivisionAlgorithm extends JFrame implements ActionListener {

    JLabel lblTitle = new JLabel();

    JLabel lblFirstInt = new JLabel();
    JTextField txtFirstInt = new JTextField();

    JLabel lblSecondInt = new JLabel();
    JTextField txtSecondInt = new JTextField();

    JButton btnCompute = new JButton();

    JLabel lblSolution = new JLabel();
    JTextField txtSolution = new JTextField();

    JLabel lblDividend = new JLabel();
    JLabel lblDivisor = new JLabel();
    JLabel lblQuotientRemainder = new JLabel();

    Font titleFont;
    Font subTitleFont;
    Font inputFont;
    Font solutionFont;
    Font warningFont;

    DivisionAlgorithm() {

        // lblTitle
        lblTitle.setText("Division Algorithm");
        titleFont = new Font("Arial", Font.BOLD, 28);
        lblTitle.setFont(titleFont);
        lblTitle.setBounds(140, 15, 300, 40);
        this.add(lblTitle);

        // lblFirstInt
        lblFirstInt.setText("Enter the first integer:");
        subTitleFont = new Font("Georgia", Font.BOLD, 22);
        lblFirstInt.setFont(subTitleFont);
        lblFirstInt.setBounds(40, 100, 300, 30);
        this.add(lblFirstInt);

        // txtFirstInt
        txtFirstInt.setBounds(40, 140, 300, 30);
        inputFont = new Font("Arial", Font.PLAIN, 20);
        txtFirstInt.setFont(inputFont);
        this.add(txtFirstInt);

        // lblSecondInt
        lblSecondInt.setText("Enter the second integer:");
        lblSecondInt.setFont(subTitleFont);
        lblSecondInt.setBounds(40, 200, 300, 30);
        this.add(lblSecondInt);

        // txtSecondInt
        txtSecondInt.setBounds(40, 240, 300, 30);
        txtSecondInt.setFont(inputFont);
        this.add(txtSecondInt);

        // btnCompute
        btnCompute.setText("Compute");
        Font buttonFont = new Font("Arial", Font.ITALIC, 16);
        btnCompute.setFont(buttonFont);
        btnCompute.addActionListener(this);
        btnCompute.setBounds(180, 300, 150, 30);
        this.add(btnCompute);
        this.getRootPane().setDefaultButton(btnCompute);

        // lblSolution
        lblSolution.setText("Solution");
        lblSolution.setFont(titleFont);
        lblSolution.setBounds(200, 350, 300, 40);
        this.add(lblSolution);

        // txtSolution
        txtSolution.setEditable(false);
        txtSolution.setFont(inputFont);
        txtSolution.setBounds(50, 400, 400, 30);
        this.add(txtSolution);

        // lblDividend
        lblDividend.setText("The dividend is ");
        solutionFont = new Font("Arial", Font.PLAIN, 16);
        lblDividend.setFont(solutionFont);
        lblDividend.setBounds(100, 450, 300, 25);
        this.add(lblDividend);

        // lblDivisor
        lblDivisor.setText("The divisor is ");
        lblDivisor.setFont(solutionFont);
        lblDivisor.setBounds(100, 480, 300, 25);
        this.add(lblDivisor);

        // lblQuotientRemainder
        lblQuotientRemainder.setText("The quotient is and the remainder is ");
        lblQuotientRemainder.setFont(solutionFont);
        lblQuotientRemainder.setBounds(100, 510, 400, 25);
        this.add(lblQuotientRemainder);

        this.setLayout(null);
        this.setTitle("Division Algorithm");
        this.setSize(540, 600);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setResizable(false);
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnCompute) {

            txtSolution.setFont(inputFont);
            txtSolution.setForeground(Color.BLACK);
            warningFont = new Font("Arial", Font.BOLD, 14);

            try {
                int firstInt = Integer.parseInt(txtFirstInt.getText());
                int secondInt = Integer.parseInt(txtSecondInt.getText());

                if (firstInt <= 0 || secondInt <= 0) {
                    txtSolution.setForeground(Color.RED);
                    txtSolution.setFont(warningFont);
                    txtSolution.setText("Please enter POSITIVE INTEGERS ONLY!");
                    return;
                }

                // Adjusts dividend and divisor based on which is larger
                int dividend;
                int divisor;

                if (firstInt > secondInt) {
                    dividend = firstInt;
                    divisor = secondInt;
                } else {
                    dividend = secondInt;
                    divisor = firstInt;
                }

                int quotient = dividend / divisor;
                int remainder = dividend % divisor;

                String solution = String.format("%,d = %,d (%,d) + %,d", dividend, divisor, quotient, remainder);
                txtSolution.setText(solution);

                lblDividend.setText(String.format("The dividend is %,d", dividend));
                lblDivisor.setText(String.format("The divisor is %,d", divisor));
                lblQuotientRemainder.setText(String.format("The quotient is %,d and the remainder is %,d", quotient, remainder));

            } catch (NumberFormatException ex) {
                txtSolution.setForeground(Color.RED);
                txtSolution.setFont(warningFont);
                txtSolution.setText("Invalid input! Please enter POSITIVE INTEGERS ONLY.");
            }
        }
    }

    public static void main(String[] args) {
        new DivisionAlgorithm();
    }
}`;

  return <>{tokenizeJava(javaCode)}</>;
}

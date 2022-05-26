<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <body>
        <table border= '1'>
            <tr>
                <th>identificação</th>
                <th>Sexo</th>
                <th>Nome</th>
                <th>Ano de nascimento</th>
                <th>BI</th>
                <th>Numero de Contribuinte</th>
                <th>Sistema de Saúde</th>
            </tr>
            <xsl:for-each select="pacientes/paciente">
    
            <tr>
                <td><xsl:value-of select="@identificacão"/></td>
                <td><xsl:value-of select="@sexo"/></td>
                <td><xsl:value-of select="nome"/></td>
                <td><xsl:value-of select="nd"/></td>
                <td><xsl:value-of select="BI"/></td>
                <td><xsl:value-of select="contribuinte"/></td>
                <td><xsl:value-of select="sd"/></td>
                <td><xsl:value-of select="medic"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>  
</xsl:stylesheet>
/*
*   File: convert_temperatures.c
*   Author: Leonardo
*/
#include <stdio.h>
#include <stdlib.h>

#define _CRT_SECURE_NO_WARNINGS

int main(int argc, char** argv)
{
    float originalFahrenheit;
    float celsius;
    float fahrenheit;
    
    printf("Enter temperature (Fahrenheit): ");
    scanf("%f", &originalFahrenheit);
    
    celsius = (originalFahrenheit - 32) / 9 * 5;
    fahrenheit = celsius * 9 / 5 + 32;
    
    printf("%.1f ºC\n", celsius);
    printf("%.1f ºF", fahrenheit);
    
    return (EXIT_SUCCESS);
}